<?php
declare(strict_types=1);

require __DIR__ . '/includes/bootstrap.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Cache-Control: public, max-age=60');
    echo json_encode(vtgms_read_content());
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: GET, POST');
    echo json_encode(['ok' => false, 'error' => 'method']);
    exit;
}

if (!vtgms_is_admin()) {
    http_response_code(401);
    echo json_encode(['ok' => false, 'error' => 'auth']);
    exit;
}

vtgms_require_csrf();

$raw = file_get_contents('php://input');
$body = json_decode($raw ?: 'null', true);
if (!is_array($body)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'json']);
    exit;
}

$data = vtgms_read_content();

if (isset($body['fields']) && is_array($body['fields'])) {
    foreach ($body['fields'] as $key => $value) {
        if (!is_string($key) || !preg_match('/^[a-z0-9][a-z0-9._-]*$/i', $key)) {
            continue;
        }
        if (!is_string($value)) {
            continue;
        }
        $data['fields'][$key] = vtgms_sanitize_html($value);
    }
}

if (isset($body['images']) && is_array($body['images'])) {
    foreach ($body['images'] as $key => $path) {
        if (!is_string($key) || !preg_match('/^[a-z0-9][a-z0-9._-]*$/i', $key)) {
            continue;
        }
        if (!is_string($path)) {
            continue;
        }
        if (!preg_match('#^images/uploads/[a-zA-Z0-9._-]+$#', $path)) {
            continue;
        }
        $full = dirname(__DIR__, 2) . '/' . $path;
        if (is_readable($full)) {
            $data['images'][$key] = $path;
        }
    }
}

if (!vtgms_write_content($data)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'write']);
    exit;
}

echo json_encode(['ok' => true]);

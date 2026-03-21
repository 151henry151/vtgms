<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Admin · Vermont Green Mountain Sanctuary</title>
  <link rel="stylesheet" href="/styles.css">
  <style>
    body { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--color-birch); padding: 2rem; }
    .admin-card { max-width: 22rem; width: 100%; background: var(--color-cream); padding: 2rem; border-radius: var(--radius-lg); box-shadow: var(--shadow-soft); }
    .admin-card h1 { font-family: var(--font-display); font-size: 1.35rem; color: var(--color-forest); margin: 0 0 1rem; }
    .admin-card label { display: block; font-weight: 600; font-size: 0.85rem; margin-bottom: 0.35rem; color: var(--color-forest); }
    .admin-card input { width: 100%; padding: 0.65rem; border-radius: 10px; border: 1px solid rgba(45,74,45,0.2); margin-bottom: 1rem; font: inherit; }
    .admin-card button { width: 100%; padding: 0.75rem; border: none; border-radius: 999px; background: var(--color-earth); color: var(--color-cream); font-weight: 700; cursor: pointer; }
    .admin-card button:hover { background: var(--color-clay); color: var(--color-forest); }
    .err { color: #a33; font-size: 0.9rem; margin-bottom: 1rem; }
    .hint { font-size: 0.8rem; color: var(--color-stone); margin-top: 1rem; line-height: 1.4; }
  </style>
</head>
<body>
  <div class="admin-card">
    <h1>Site admin</h1>
    <?php if (isset($_GET['error'])): ?>
      <p class="err">Could not sign in. Check username and password.</p>
    <?php endif; ?>
    <form method="post" action="/api/login.php">
      <input type="hidden" name="next" value="/">
      <label for="u">Username</label>
      <input id="u" name="username" type="text" autocomplete="username" required>
      <label for="p">Password</label>
      <input id="p" name="password" type="password" autocomplete="current-password" required>
      <button type="submit">Sign in</button>
    </form>
    <p class="hint">After signing in, open the home page to edit text and images. Change the default password by replacing VTGMS_ADMIN_PASSWORD_HASH in <code>api/includes/bootstrap.php</code>.</p>
    <p style="margin-top:1rem"><a href="/">Back to site</a></p>
  </div>
</body>
</html>

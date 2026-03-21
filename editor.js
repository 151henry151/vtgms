(function () {
  "use strict";

  function escSel(s) {
    return String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  }

  fetch("/api/session.php", { credentials: "same-origin" })
    .then(function (r) {
      return r.json();
    })
    .then(function (sess) {
      if (!sess || !sess.ok || !sess.csrf) return;
      var csrf = sess.csrf;
      document.body.classList.add("vtgms-admin");

      var lo = document.createElement("a");
      lo.href = "/api/logout.php";
      lo.className = "vtgms-admin-logout";
      lo.textContent = "Sign out";
      document.body.appendChild(lo);

      document.querySelectorAll("[data-editable]").forEach(function (el) {
        var key = el.getAttribute("data-editable");
        if (!key) return;
        var wrap = document.createElement("div");
        wrap.className = "vtgms-editable-wrap";
        el.parentNode.insertBefore(wrap, el);
        wrap.appendChild(el);
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "vtgms-edit-btn";
        btn.setAttribute("aria-label", "Edit this text");
        btn.innerHTML = "\u270E";
        btn.title = "Edit";
        btn.addEventListener("click", function () {
          startTextEdit(el, key, csrf);
        });
        wrap.appendChild(btn);
      });

      document.querySelectorAll("[data-editable-img]").forEach(function (img) {
        if (img.tagName !== "IMG") return;
        var key = img.getAttribute("data-editable-img");
        if (!key) return;
        var wrap = document.createElement("div");
        wrap.className = "vtgms-img-wrap";
        img.parentNode.insertBefore(wrap, img);
        wrap.appendChild(img);
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "vtgms-img-btn";
        btn.setAttribute("aria-label", "Replace image");
        btn.innerHTML = "\u{1F4F7}";
        btn.title = "Replace image";
        var input = document.createElement("input");
        input.type = "file";
        input.accept = "image/jpeg,image/png,image/webp,image/gif";
        input.className = "vtgms-img-input";
        input.addEventListener("change", function () {
          if (!input.files || !input.files[0]) return;
          var fd = new FormData();
          fd.append("key", key);
          fd.append("file", input.files[0]);
          fetch("/api/upload.php", {
            method: "POST",
            credentials: "same-origin",
            headers: { "X-CSRF-Token": csrf },
            body: fd
          })
            .then(function (r) {
              return r.json();
            })
            .then(function (d) {
              if (d && d.ok && d.path) {
                img.src = d.path + "?t=" + Date.now();
              }
            })
            .catch(function () {});
          input.value = "";
        });
        btn.addEventListener("click", function () {
          input.click();
        });
        wrap.appendChild(btn);
        wrap.appendChild(input);
      });
    })
    .catch(function () {});

  function startTextEdit(el, key, csrf) {
    var isTa = el.tagName === "TEXTAREA";
    var original = isTa ? el.value : el.innerHTML;
    var ta = document.createElement("textarea");
    ta.className = "vtgms-edit-field";
    ta.value = isTa ? el.value : el.innerHTML;
    var bar = document.createElement("div");
    bar.className = "vtgms-edit-bar";
    var ok = document.createElement("button");
    ok.type = "button";
    ok.className = "vtgms-edit-ok";
    ok.innerHTML = "\u2713";
    ok.title = "Save";
    var cancel = document.createElement("button");
    cancel.type = "button";
    cancel.className = "vtgms-edit-cancel";
    cancel.innerHTML = "\u2715";
    cancel.title = "Cancel";
    bar.appendChild(ok);
    bar.appendChild(cancel);
    var wrap = el.parentNode;
    if (!wrap || !wrap.classList.contains("vtgms-editable-wrap")) return;
    el.style.display = "none";
    wrap.insertBefore(ta, wrap.querySelector(".vtgms-edit-btn"));
    wrap.appendChild(bar);

    function cleanup() {
      ta.remove();
      bar.remove();
      el.style.display = "";
    }

    cancel.addEventListener("click", function () {
      cleanup();
      if (isTa) el.value = original;
      else el.innerHTML = original;
    });

    ok.addEventListener("click", function () {
      var val = ta.value;
      var payload = { fields: {} };
      payload.fields[key] = val;
      fetch("/api/content.php", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrf
        },
        body: JSON.stringify(payload)
      })
        .then(function (r) {
          return r.json();
        })
        .then(function (d) {
          if (d && d.ok) {
            if (isTa) el.value = val;
            else el.innerHTML = val;
            cleanup();
          }
        })
        .catch(function () {});
    });
  }
})();

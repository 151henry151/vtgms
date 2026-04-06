(function () {
  "use strict";

  var FORM_INTENT_KEY = "vtgmsFormIntent";

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var navOverlay = document.querySelector(".nav-overlay");

  var HEADER_FADE_DISTANCE = 220;
  var mqWideNav = window.matchMedia("(min-width: 1024px)");

  function updateHeaderScroll() {
    var y = window.scrollY || window.pageYOffset;

    if (mqWideNav.matches) {
      /* Desktop: fade entire header; reinstate at top */
      if (header) {
        var td = Math.min(y / HEADER_FADE_DISTANCE, 1);
        var ho = 1 - td;
        header.style.opacity = ho.toFixed(3);
        header.classList.toggle("site-header--scroll-hidden", ho < 0.04);
        header.setAttribute("aria-hidden", ho < 0.04 ? "true" : "false");
        header.style.pointerEvents = ho < 0.04 ? "none" : "";
      }
    } else {
      /* Mobile: keep header + hamburger fully visible */
      if (header) {
        header.style.opacity = "";
        header.classList.remove("site-header--scroll-hidden");
        header.removeAttribute("aria-hidden");
        header.style.pointerEvents = "";
      }
    }

  }

  window.addEventListener("scroll", updateHeaderScroll, { passive: true });
  window.addEventListener("resize", updateHeaderScroll, { passive: true });
  if (mqWideNav.addEventListener) {
    mqWideNav.addEventListener("change", updateHeaderScroll);
  } else if (mqWideNav.addListener) {
    mqWideNav.addListener(updateHeaderScroll);
  }
  updateHeaderScroll();

  function closeNav() {
    if (!navOverlay || !toggle) return;
    navOverlay.classList.remove("is-open");
    navOverlay.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }

  function openNav() {
    if (!navOverlay || !toggle) return;
    navOverlay.classList.add("is-open");
    navOverlay.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-open");
  }

  if (toggle && navOverlay) {
    toggle.addEventListener("click", function () {
      if (navOverlay.classList.contains("is-open")) {
        closeNav();
      } else {
        openNav();
      }
    });
    navOverlay.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
  }

  document.querySelectorAll(".reveal").forEach(function (el) {
    el.classList.add("reveal--pending");
  });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            entry.target.classList.remove("reveal--pending");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("reveal--visible");
      el.classList.remove("reveal--pending");
    });
  }

  function applyFormIntent() {
    var intent = sessionStorage.getItem(FORM_INTENT_KEY);
    if (!intent) return;
    sessionStorage.removeItem(FORM_INTENT_KEY);
    var guildForm = document.getElementById("guild-form");
    if (!guildForm) return;
    if (intent === "land") {
      var landCb = document.getElementById("f-role-land");
      if (landCb) landCb.checked = true;
    } else if (intent === "materials") {
      var matCb = document.getElementById("f-role-materials");
      if (matCb) matCb.checked = true;
    }
    guildForm.scrollIntoView({ behavior: "smooth", block: "start" });
    var nameField = document.getElementById("f-name");
    if (nameField && document.activeElement !== nameField) {
      setTimeout(function () {
        nameField.focus({ preventScroll: true });
      }, 350);
    }
  }

  document.querySelectorAll("a[data-form-intent]").forEach(function (a) {
    a.addEventListener("click", function () {
      var intent = a.getAttribute("data-form-intent");
      if (intent) sessionStorage.setItem(FORM_INTENT_KEY, intent);
      setTimeout(function () {
        if (window.location.hash === "#involved") {
          applyFormIntent();
        }
      }, 0);
    });
  });

  window.addEventListener("hashchange", function () {
    if (window.location.hash === "#involved") {
      applyFormIntent();
    }
  });

  if (window.location.hash === "#involved") {
    applyFormIntent();
  }

  var form = document.getElementById("guild-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (form.querySelector('[name="name"]') || {}).value || "";
      var email = (form.querySelector('[name="email"]') || {}).value || "";
      var msg = (form.querySelector('[name="message"]') || {}).value || "";
      var roles = [];
      form.querySelectorAll('input[name="role"]:checked').forEach(function (cb) {
        roles.push(cb.value);
      });
      var body =
        "Name: " + name.trim() + "\n" +
        "Email: " + email.trim() + "\n" +
        "How I want to get involved: " + (roles.length ? roles.join(", ") : "(none selected)") + "\n\n" +
        "Message:\n" + msg.trim();
      var subject = "Join the Guild — Vermont Green Mountain Sanctuary";
      window.location.href =
        "mailto:JY_Blair@hotmail.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
    });
  }
})();

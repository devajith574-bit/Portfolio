/* ============================================ */
/*  MOBILE NAV TOGGLE                          */
/* ============================================ */
(function () {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
    document.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
      });
    });
    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('open');
      }
    });
  }
})();

/* ============================================ */
/*  ACTIVE NAV LINK ON SCROLL                  */
/* ============================================ */
(function () {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', function () {
    var current = '';
    sections.forEach(function (section) {
      var top = section.offsetTop - 150;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
})();

/* ============================================ */
/*  FADE-IN ON SCROLL (Intersection Observer)   */
/* ============================================ */
(function () {
  var els = document.querySelectorAll('.fade-in');
  if (els.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(function (el) { observer.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('visible'); });
  }
})();

/* ============================================ */
/*  BACK TO TOP BUTTON                         */
/* ============================================ */
(function () {
  var btn = document.querySelector('.footer-top');
  if (btn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 500) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });
  }
})();

/* ============================================ */
/*  BUTTON RIPPLE EFFECT                       */
/* ============================================ */
(function () {
  document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var rect = btn.getBoundingClientRect();
      var ripple = document.createElement('span');
      ripple.className = 'ripple';
      var size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      btn.appendChild(ripple);
      setTimeout(function () { ripple.remove(); }, 600);
    });
  });
})();

/* ============================================ */
/*  CONTACT FORM (UI feedback only)             */
/* ============================================ */
(function () {
  var form = document.getElementById('contactForm');
  var submitBtn = document.getElementById('formSubmit');
  if (form && submitBtn) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var original = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Sending...';
      submitBtn.disabled = true;
      setTimeout(function () {
        submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)';
        setTimeout(function () {
          form.reset();
          submitBtn.innerHTML = original;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }, 2500);
      }, 1500);
    });
  }
})();

/* ============================================ */
/*  SMOOTH SCROLL FOR ANCHOR LINKS             */
/* ============================================ */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = anchor.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var offset = 80;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });
})();

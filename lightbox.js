/* Click-to-zoom for case-study figure images. No dependencies. */
(function () {
  var overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-label', 'Image viewer');
  var full = document.createElement('img');
  overlay.appendChild(full);

  function close() {
    overlay.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
  }

  overlay.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  function init() {
    document.body.appendChild(overlay);
    document.querySelectorAll('.cs-image img').forEach(function (img) {
      img.classList.add('is-zoomable');
      img.addEventListener('click', function () {
        full.src = img.currentSrc || img.src;
        full.alt = img.alt || '';
        overlay.classList.add('is-open');
        document.body.classList.add('lightbox-open');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

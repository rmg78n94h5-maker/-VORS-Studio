(() => {
  'use strict';
  const BRAND_VERSION = '1.2.0';

  function applyBrandVersion() {
    const version = document.querySelector('.sidebar-footer .version b');
    if (version) version.textContent = BRAND_VERSION;
  }

  const previousRender = window.render;
  if (typeof previousRender === 'function') {
    window.render = function renderWithBrand() {
      const result = previousRender.apply(this, arguments);
      applyBrandVersion();
      return result;
    };
  }

  applyBrandVersion();
})();
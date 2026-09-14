(() => {
  'use strict';
  const baseMore = renderMore;
  renderMore = function renderMoreWithMaintenance() {
    const html = baseMore();
    const maintenance = `<section class="v1-more-list v1-maintenance-list">
      <button class="v1-more-row v1-danger-row" data-action="clear-data"><span class="v1-more-icon">×</span><div><b>Очистить рабочие данные</b><small>Каталог материалов останется</small></div><span class="v1-more-arrow">→</span></button>
    </section>`;
    return html.replace('<div class="v1-version">', `${maintenance}<div class="v1-version">`);
  };
  render();
})();

(() => {
  'use strict';

  const UI_VERSION = '1.0.0';
  const baseMore = renderMore;

  renderMore = function renderMoreWithMaintenance() {
    const html = baseMore();
    const maintenance = `<section class="v1-more-list v1-maintenance-list">
      <button class="v1-more-row v1-danger-row" data-action="clear-data"><span class="v1-more-icon">×</span><div><b>Очистить рабочие данные</b><small>Каталог материалов останется</small></div><span class="v1-more-arrow">→</span></button>
    </section>`;
    return html.replace('<div class="v1-version">', `${maintenance}<div class="v1-version">`);
  };

  exportBackup = function exportBackupV1() {
    const payload = { vorsStudioBackup: 1, version: UI_VERSION, exportedAt: new Date().toISOString(), state };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type:'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `VORS-backup-${todayISO()}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast('Резервная копия VORS 1.0 подготовлена');
  };

  render();
})();

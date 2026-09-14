(() => {
  'use strict';

  const baseRenderMaterials = renderMaterials;
  const baseBindViewEvents = bindViewEvents;
  const baseRenderMore = typeof renderMore === 'function' ? renderMore : null;
  const FIT_OPTIONS = ['Все', 'Основная', 'Premium', 'На тест', 'Резерв'];

  function normalizedFit(item) {
    const value = String(item?.fitGroup || '').trim();
    if (value === 'Рекомендовано') return 'Основная';
    if (FIT_OPTIONS.includes(value)) return value;
    return item?.type === 'Пряжа' ? 'На тест' : 'Расходники';
  }

  function fitBadgeClass(item) {
    const fit = normalizedFit(item);
    if (fit === 'Основная') return 'success';
    if (fit === 'Premium') return 'clay';
    if (fit === 'Резерв') return 'blue';
    return '';
  }

  function hexToHue(hex = '#b8a58f') {
    const clean = String(hex).replace('#', '').trim();
    if (!/^[0-9a-f]{6}$/i.test(clean)) return 999;
    const r = parseInt(clean.slice(0, 2), 16) / 255;
    const g = parseInt(clean.slice(2, 4), 16) / 255;
    const b = parseInt(clean.slice(4, 6), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const delta = max - min;
    if (delta === 0) return 0;
    let h = max === r ? ((g - b) / delta) % 6 : max === g ? (b - r) / delta + 2 : (r - g) / delta + 4;
    h = Math.round(h * 60);
    return h < 0 ? h + 360 : h;
  }

  function paletteSort(a, b) {
    const ha = hexToHue(a.swatch), hb = hexToHue(b.swatch);
    const la = String(a.colorName || '').toLowerCase(), lb = String(b.colorName || '').toLowerCase();
    const neutral = value => /бел|сер|черн|беж|суров|натурал|маренго/.test(value) ? 0 : 1;
    return neutral(la) - neutral(lb) || ha - hb || String(a.line).localeCompare(String(b.line), 'ru') || String(a.colorCode).localeCompare(String(b.colorCode), 'ru');
  }

  function paletteCard(item) {
    const inventory = state.materials.find(m => m.catalogId === item.id);
    const fit = normalizedFit(item);
    const available = item.availability === 'В наличии';
    const search = materialSearchText(item);
    return `<article class="palette-card" data-catalog="${item.id}" data-type="Пряжа" data-fit="${esc(fit)}" data-name="${search}">
      <div class="palette-swatch" style="--swatch:${item.swatch || '#e5d8c3'}"><span>${esc(item.colorCode || '—')}</span></div>
      <div class="palette-card-body">
        <div class="palette-title">${esc(item.colorName || 'Без названия')}</div>
        <div class="palette-line">${esc(item.line)}</div>
        <div class="palette-meta"><span class="badge ${fitBadgeClass(item)}">${esc(fit)}</span><span class="availability-dot ${available ? 'ready' : ''}">${esc(item.availability || 'Не проверено')}</span></div>
        <div class="palette-codes">Кудель ${esc(item.supplierSku || '—')} · ${item.nominalWeight || 0} г / ${item.lengthM || 0} м</div>
        <div class="palette-footer"><span>${inventory ? `На складе ${num(inventory.stock, 0)} ${esc(inventory.unit)}` : 'На складе 0 г'}</span><button class="secondary-btn" data-action="catalog-receipt" data-id="${item.id}">Поступление</button></div>
      </div>
    </article>`;
  }

  function renderPalette(items) {
    const yarn = items.filter(item => item.type === 'Пряжа').sort(paletteSort);
    return `<section class="palette-grid" id="materialTable">${yarn.map(paletteCard).join('')}</section>`;
  }

  function renderCatalogLibrary() {
    const yarnCatalog = state.materialCatalog.filter(item => item.type === 'Пряжа');
    const consumableCatalog = state.materialCatalog.filter(item => item.type !== 'Пряжа');
    const lineCount = new Set(yarnCatalog.filter(item => item.system).map(item => item.line)).size;
    const variantCount = yarnCatalog.filter(item => item.system).length;
    const consumableCount = consumableCatalog.filter(item => item.system).length;
    const layout = state.materialCatalogLayout === 'palette' ? 'palette' : 'list';
    const fitCounts = FIT_OPTIONS.slice(1).reduce((acc, fit) => {
      acc[fit] = yarnCatalog.filter(item => normalizedFit(item) === fit).length;
      return acc;
    }, {});
    const headerActions = `<button class="secondary-btn" data-material-mode="stock">Мой склад</button><button class="primary-btn" data-action="new-catalog-item">＋ Позиция</button>`;
    const layoutButtons = `<div class="catalog-layout-switch" id="catalogLayoutSwitch"><button class="chip ${layout === 'list' ? 'active' : ''}" data-layout="list">☷ Список</button><button class="chip ${layout === 'palette' ? 'active' : ''}" data-layout="palette">◉ Палитра цветов</button></div>`;
    const fitButtons = `<div class="chips catalog-fit-chips" id="materialFitChips">${FIT_OPTIONS.map(fit => `<button class="chip ${fit === 'Все' ? 'active' : ''}" data-fit-filter="${fit}">${fit}${fitCounts[fit] != null ? ` · ${fitCounts[fit]}` : ''}</button>`).join('')}</div>`;
    const typeButtons = layout === 'list'
      ? `<div class="chips" id="materialChips"><button class="chip active" data-filter="Все">Все материалы</button>${['Пряжа','Основа','Подложка','Клей','Кромка','Производство','Упаковка'].map(c => `<button class="chip" data-filter="${c}">${c}</button>`).join('')}</div>`
      : '';
    const content = layout === 'palette' ? renderPalette(state.materialCatalog) : `<div class="catalog-groups" id="materialTable">${renderCatalogGroups(state.materialCatalog)}</div>`;

    return `${viewHeader('Материалы и закупки', layout === 'palette' ? 'Выбирайте оттенок глазами, затем смотрите линейку, наличие и SKU Куделя.' : 'Единая библиотека пряжи и всех основных расходников мастерской.', headerActions)}
      <article class="card card-pad catalog-intro"><div><h2>Библиотека материалов VORS Studio</h2><p>${lineCount} отобранные линейки Пехорки, рабочая палитра оттенков и системный набор расходников.</p></div><div class="supplier-badge"><b>${lineCount} линеек пряжи</b><span>${variantCount} оттенков · ${consumableCount} расходников</span></div></article>
      <section class="kpi-grid catalog-kpis">
        ${kpi('Основная', `${fitCounts['Основная'] || 0}`, 'Рабочие цвета рекомендованных линеек')}
        ${kpi('Premium', `${fitCounts['Premium'] || 0}`, 'Шерсть и премиальные смеси')}
        ${kpi('На тест', `${fitCounts['На тест'] || 0}`, 'Нужен физический пробник')}
        ${kpi('Резерв', `${fitCounts['Резерв'] || 0}`, 'Спецзаказы и редкие цвета')}
      </section>
      <div class="catalog-control-card card card-pad">
        <div class="catalog-control-top">${layoutButtons}<label class="availability-toggle"><input id="availableOnly" type="checkbox"><span>Только в наличии</span></label></div>
        ${fitButtons}
        <div class="toolbar catalog-searchbar"><div class="search"><input id="materialSearch" placeholder="Цвет, линейка, код, состав или SKU Куделя" /></div>${typeButtons}</div>
      </div>
      ${content}`;
  }

  renderMaterials = function enhancedRenderMaterials() {
    const mode = state.materialView || 'stock';
    if (mode !== 'catalog') return baseRenderMaterials();
    return renderCatalogLibrary();
  };

  function updateGroupVisibility() {
    document.querySelectorAll('#materialTable [data-catalog-group]').forEach(group => {
      const visible = [...group.querySelectorAll('[data-catalog]')].some(item => item.style.display !== 'none' && !item.classList.contains('fit-hidden') && !item.classList.contains('availability-hidden'));
      group.style.display = visible ? '' : 'none';
    });
  }

  function applyCatalogExtraFilters() {
    const fit = state.materialFitFilter || 'Все';
    const availableOnly = Boolean(state.materialAvailableOnly);
    document.querySelectorAll('#materialTable [data-catalog]').forEach(item => {
      const itemFit = item.dataset.fit || (() => {
        const source = state.materialCatalog.find(entry => entry.id === item.dataset.catalog);
        return source ? normalizedFit(source) : 'Расходники';
      })();
      const source = state.materialCatalog.find(entry => entry.id === item.dataset.catalog);
      item.classList.toggle('fit-hidden', fit !== 'Все' && itemFit !== fit);
      item.classList.toggle('availability-hidden', availableOnly && source?.type === 'Пряжа' && source?.availability !== 'В наличии');
    });
    updateGroupVisibility();
  }

  bindViewEvents = function enhancedBindViewEvents() {
    baseBindViewEvents();
    if ((state.materialView || 'stock') !== 'catalog') return;

    document.querySelectorAll('[data-layout]').forEach(button => button.addEventListener('click', () => {
      state.materialCatalogLayout = button.dataset.layout === 'palette' ? 'palette' : 'list';
      markSaving();
      render();
    }));

    const fitChips = document.getElementById('materialFitChips');
    fitChips?.querySelectorAll('[data-fit-filter]').forEach(button => button.addEventListener('click', () => {
      state.materialFitFilter = button.dataset.fitFilter || 'Все';
      fitChips.querySelectorAll('.chip').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      applyCatalogExtraFilters();
    }));

    const available = document.getElementById('availableOnly');
    if (available) {
      available.checked = Boolean(state.materialAvailableOnly);
      available.addEventListener('change', () => {
        state.materialAvailableOnly = available.checked;
        applyCatalogExtraFilters();
      });
    }

    const search = document.getElementById('materialSearch');
    search?.addEventListener('input', () => setTimeout(updateGroupVisibility, 0));
    document.getElementById('materialChips')?.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => setTimeout(updateGroupVisibility, 0)));

    const activeFit = state.materialFitFilter || 'Все';
    fitChips?.querySelectorAll('[data-fit-filter]').forEach(button => button.classList.toggle('active', button.dataset.fitFilter === activeFit));
    applyCatalogExtraFilters();
  };

  if (baseRenderMore) {
    renderMore = function enhancedRenderMore() {
      return baseRenderMore().replace(/Версия\s+0\.9\.0/g, 'Версия 0.9.1');
    };
  }

  if (state.view === 'materials') render();
})();

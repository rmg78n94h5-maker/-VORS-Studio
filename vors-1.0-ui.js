(() => {
  'use strict';

  const UI_VERSION = '1.0.0';
  const baseRender = render;
  const baseRenderMaterials = renderMaterials;

  const icons = {
    today: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11.5 12 4l8 7.5v7a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5z"/><path d="M9 20v-6h6v6"/></svg>',
    projects: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4" width="17" height="16" rx="2.5"/><path d="M7.5 8h9M7.5 12h9M7.5 16h5"/></svg>',
    production: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v4.5l3 2"/></svg>',
    materials: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7.5 12 4l7 3.5v9L12 20l-7-3.5z"/><path d="m5 7.5 7 3.5 7-3.5M12 11v9"/></svg>',
    orders: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5.5h14v15H5z"/><path d="M8 3.5v4M16 3.5v4M8 11h8M8 15h5"/></svg>',
    products: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 8.5 12 4l7.5 4.5V18L12 22l-7.5-4z"/><path d="M4.5 8.5 12 13l7.5-4.5M12 13v9"/></svg>',
    finance: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19.5h16M6 17V9M12 17V5M18 17v-6"/></svg>',
    family: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.3"/><path d="M3.5 19c.7-3.2 2.6-5 5.5-5s4.8 1.8 5.5 5M14 15.2c2.7-.6 5 .7 6 3.8"/></svg>',
    more: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/></svg>',
    user: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.4"/><path d="M5.5 20c.7-4.1 2.9-6.2 6.5-6.2s5.8 2.1 6.5 6.2"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M14 8l4 4-4 4"/></svg>'
  };

  function icon(name) { return icons[name] || icons.more; }
  function activeProduction() { return state.productions.find(p => Number(p.progress) < 100) || state.productions[0] || null; }
  function activeOrders() { return state.orders.filter(o => !['Отправлен','Завершён'].includes(o.status)); }
  function ruDate() { return new Date().toLocaleDateString('ru-RU', { weekday:'long', day:'numeric', month:'long' }); }
  function stageName(p) { return p?.stages?.find(s => s.status === 'active')?.name || (Number(p?.progress) >= 100 ? 'Готово' : 'В работе'); }
  function actionableLowStock() { return state.materials.filter(m => Number(m.stock) < Number(m.min)); }
  function moneyAwaiting() { return activeOrders().reduce((sum,o) => sum + Math.max(0, (Number(o.amount)||0) - orderPaid(o)), 0); }

  viewHeader = function modernViewHeader(title, subtitle, actions = '') {
    return `<header class="view-header v1-view-header"><div class="v1-title-block"><span class="v1-eyebrow">VORS STUDIO</span><h1 class="view-title">${esc(title)}</h1>${subtitle ? `<p class="view-subtitle">${esc(subtitle)}</p>` : ''}</div><div class="header-actions">${actions}</div></header>`;
  };

  kpi = function modernKpi(label, value, change) {
    return `<article class="kpi v1-stat"><span class="kpi-label">${label}</span><strong class="kpi-value">${value}</strong>${change ? `<span class="kpi-change">${change}</span>` : ''}</article>`;
  };

  projectCard = function modernProjectCard(p) {
    return `<article class="project-card v1-project-card" data-project="${p.id}" data-category="${esc(p.category)}" data-name="${esc(String(p.name || '').toLowerCase())}">
      <div class="project-cover v1-project-cover">${visual(p, `Проект ${p.name}`)}<div class="v1-project-overlay"><span>${esc(p.status || 'Идея')}</span><span>${Number(p.progress)||0}%</span></div></div>
      <div class="project-body v1-project-body">
        <div><div class="project-name">${esc(p.name)}</div><div class="project-meta">${esc(p.size)} · ${esc(p.category)}</div></div>
        <div class="v1-project-price">${rub(p.price)}</div>
      </div>
    </article>`;
  };

  renderToday = function renderTodayV1() {
    const p = activeProduction();
    const lows = actionableLowStock();
    const orders = activeOrders();
    const finances = financeSummary();
    const remaining = moneyAwaiting();
    const nearest = orders.slice().sort((a,b) => String(a.deadline || '').localeCompare(String(b.deadline || '')))[0];
    return `
      <section class="v1-home-head">
        <div><span class="v1-eyebrow">${ruDate()}</span><h1>Сегодня</h1></div>
        <button class="v1-round-action" data-action="new-order" aria-label="Новый заказ">＋</button>
      </section>

      ${p ? `<section class="v1-current-work">
        <div class="v1-current-media">${visualForProduction(p)}<div class="v1-current-gradient"></div><div class="v1-current-badge">${esc(stageName(p))}</div></div>
        <div class="v1-current-body">
          <div class="v1-current-title"><div><span>Сейчас в работе</span><h2>${esc(p.name)}</h2><small>${esc(p.id)} · ${p.sourceType === 'order' ? 'заказ клиента' : 'для склада'}</small></div><strong>${Number(p.progress)||0}%</strong></div>
          <div class="v1-progress-track"><i style="width:${Math.max(0,Math.min(100,Number(p.progress)||0))}%"></i></div>
          <div class="v1-current-actions"><button class="primary-btn v1-primary" data-go="production">Продолжить работу ${icon('arrow')}</button><span>${p.elapsedDays || 0}/${p.planDays || 0} дней · ${fmtTime(p.timerSeconds || 0)}</span></div>
        </div>
      </section>` : `<section class="v1-current-work v1-empty-work"><div><span class="v1-eyebrow">МАСТЕРСКАЯ СВОБОДНА</span><h2>Запустите первый ковёр</h2><p>Создайте проект или заказ — рабочий процесс появится здесь.</p></div><button class="primary-btn v1-primary" data-action="start-production">Запустить ковёр ${icon('arrow')}</button></section>`}

      <section class="v1-home-stats">
        <div><span>Заказы</span><strong>${orders.length}</strong><small>сейчас активны</small></div>
        <div><span>Ожидается</span><strong>${rub(remaining)}</strong><small>остаток оплат</small></div>
        <div><span>Денежный поток</span><strong>${rub(finances.cashFlow)}</strong><small>получено минус расходы</small></div>
        <div class="${lows.length ? 'attention' : ''}"><span>Запасы</span><strong>${lows.length ? `${lows.length} ↓` : 'OK'}</strong><small>${lows.length ? 'нужно пополнить' : 'критичных нет'}</small></div>
      </section>

      <section class="v1-home-columns">
        <div class="v1-open-section">
          <div class="v1-section-title"><div><span class="v1-eyebrow">БЛИЖАЙШЕЕ</span><h2>Заказы</h2></div><button class="v1-text-link" data-go="orders">Все ${icon('arrow')}</button></div>
          ${nearest ? `<button class="v1-order-line" data-go="orders"><div><b>${esc(nearest.client)}</b><span>${esc(nearest.project)} · ${esc(nearest.size || '')}</span></div><div><b>${rub(nearest.amount)}</b><span>${esc(nearest.deadline || 'Без срока')}</span></div></button>` : '<div class="v1-empty-line">Активных заказов пока нет.</div>'}
          ${orders.slice(1,4).map(o => `<button class="v1-order-line" data-go="orders"><div><b>${esc(o.client)}</b><span>${esc(o.project)}</span></div><div><b>${rub(o.amount)}</b><span>${esc(o.status)}</span></div></button>`).join('')}
        </div>
        <div class="v1-open-section">
          <div class="v1-section-title"><div><span class="v1-eyebrow">СКЛАД</span><h2>Требует внимания</h2></div><button class="v1-text-link" data-go="materials">Материалы ${icon('arrow')}</button></div>
          ${lows.length ? lows.slice(0,5).map(m => `<button class="v1-stock-line" data-go="materials"><span class="v1-alert-dot"></span><div><b>${esc(m.name)}</b><span>минимум ${num(m.min,1)} ${esc(m.unit)}</span></div><strong>${num(m.stock,1)} ${esc(m.unit)}</strong></button>`).join('') : '<div class="v1-empty-line">Все основные остатки выше минимума.</div>'}
        </div>
      </section>`;
  };

  renderProjects = function renderProjectsV1() {
    return `
      ${viewHeader('Проекты', 'Коллекция дизайнов и будущих ковров.', `<button class="secondary-btn" data-action="rug-calculator">Калькулятор</button><button class="primary-btn" data-action="new-project">＋ Новый проект</button>`)}
      <div class="v1-project-toolbar"><div class="search"><input id="projectSearch" placeholder="Поиск по проектам" /></div><div class="chips" id="projectChips"><button class="chip active" data-filter="Все">Все</button>${[...new Set(state.projects.map(p=>p.category).filter(Boolean))].map(c=>`<button class="chip" data-filter="${esc(c)}">${esc(c)}</button>`).join('')}</div></div>
      <section class="project-grid v1-project-grid" id="projectGrid">${state.projects.length ? state.projects.map(projectCard).join('') : '<div class="v1-empty-canvas"><span>01</span><h2>Коллекция пока пустая</h2><p>Создайте первый дизайн VORS — он появится здесь как визуальный объект, а не строка в таблице.</p><button class="primary-btn" data-action="new-project">Создать проект</button></div>'}</section>`;
  };

  renderProduction = function renderProductionV1() {
    const active = state.productions.filter(p => Number(p.progress) < 100);
    const completed = state.productions.filter(p => Number(p.progress) >= 100);
    const renderWork = p => {
      const stage = currentProductionStage(p);
      return `<article class="v1-workbench">
        <div class="v1-workbench-visual">${visualForProduction(p)}<div class="v1-workbench-overlay"><span>${esc(p.id)}</span><strong>${Number(p.progress)||0}%</strong></div></div>
        <div class="v1-workbench-main">
          <header class="v1-workbench-head"><div><span class="v1-eyebrow">${p.sourceType === 'order' ? 'КЛИЕНТСКИЙ ЗАКАЗ' : 'VORS COLLECTION'}</span><h2>${esc(p.name)}</h2><p>${esc(stage)} · ${fmtTime(p.timerSeconds || 0)} активной работы</p></div><div class="v1-workbench-cost"><span>Себестоимость</span><b>${rub(p.cost || 0)}</b></div></header>
          <div class="v1-stage-timeline">${(p.stages||[]).map((s,i)=>`<div class="v1-stage ${esc(s.status)}"><span class="v1-stage-no">${String(i+1).padStart(2,'0')}</span><i></i><div><b>${esc(s.name)}</b>${s.status==='active'?'<small>Сейчас</small>':s.status==='done'?'<small>Готово</small>':''}</div></div>`).join('')}</div>
          <footer class="v1-workbench-actions">
            <button class="secondary-btn" data-action="stage-guide" data-id="${p.id}">Инструкция</button>
            <button class="secondary-btn" data-action="production-materials" data-id="${p.id}">Материалы</button>
            ${Number(p.progress)<100 ? `<button class="secondary-btn" data-action="timer" data-id="${p.id}">${p.timerRunning?'Пауза':'Таймер'}</button><button class="primary-btn" data-action="next-stage" data-id="${p.id}">Завершить этап</button>` : `<button class="primary-btn" data-action="prepare-shipment" data-id="${p.id}">Передать дальше</button>`}
          </footer>
        </div>
      </article>`;
    };
    return `
      ${viewHeader('Производство', 'Один понятный маршрут от эскиза до упаковки.', `<button class="primary-btn" data-action="start-production">＋ Запустить ковёр</button>`)}
      ${active.length ? `<section class="v1-work-list">${active.map(renderWork).join('')}</section>` : '<div class="v1-empty-canvas"><span>WORK</span><h2>Сейчас ничего не производится</h2><p>Запустите проект или клиентский заказ.</p><button class="primary-btn" data-action="start-production">Запустить ковёр</button></div>'}
      ${completed.length ? `<section class="v1-completed-strip"><div class="v1-section-title"><div><span class="v1-eyebrow">ЗАВЕРШЕНО</span><h2>Недавние работы</h2></div></div><div class="v1-completed-grid">${completed.slice(0,6).map(p=>`<div class="v1-completed-item"><div>${visualForProduction(p)}</div><b>${esc(p.name)}</b><span>${esc(p.id)}</span></div>`).join('')}</div></section>` : ''}`;
  };

  renderMore = function renderMoreV1() {
    const items = [
      ['orders','orders','Клиенты и заказы','Оплаты, сроки и переписка'],
      ['products','products','Готовые изделия','Склад и архив работ'],
      ['finance','finance','Финансы','Деньги, маржа и расходы'],
      ['family','family','Семейный режим','Упаковка и отправка']
    ];
    return `${viewHeader('Ещё', 'Дополнительные разделы и управление приложением.', '')}
      <section class="v1-more-list">${items.map(([go,ic,title,desc])=>`<button class="v1-more-row" data-go="${go}"><span class="v1-more-icon">${icon(ic)}</span><div><b>${title}</b><small>${desc}</small></div><span class="v1-more-arrow">${icon('arrow')}</span></button>`).join('')}</section>
      <section class="v1-more-list v1-settings-list">
        <button class="v1-more-row" data-action="rug-calculator"><span class="v1-more-icon">∑</span><div><b>Калькулятор ковра</b><small>Себестоимость и цена</small></div><span class="v1-more-arrow">${icon('arrow')}</span></button>
        <button class="v1-more-row" data-action="export-backup"><span class="v1-more-icon">↓</span><div><b>Резервная копия</b><small>Экспорт рабочих данных</small></div><span class="v1-more-arrow">${icon('arrow')}</span></button>
        <button class="v1-more-row" data-action="import-backup"><span class="v1-more-icon">↑</span><div><b>Восстановить данные</b><small>Импорт резервной копии</small></div><span class="v1-more-arrow">${icon('arrow')}</span></button>
        <button class="v1-more-row" data-action="role"><span class="v1-more-icon">${icon('user')}</span><div><b>Режим работы</b><small>Владелец, менеджер, семья</small></div><span class="v1-more-arrow">${icon('arrow')}</span></button>
      </section>
      <div class="v1-version"><span>VORS Studio</span><b>${UI_VERSION}</b><small>Local-first · каталог Кудель ${state.meta?.catalogCheckedAt || '14.09.2026'}</small></div>`;
  };

  // Сохраняем все функции палитры 0.9.1, но даём ей новый визуальный слой.
  renderMaterials = function renderMaterialsV1() { return baseRenderMaterials(); };

  function decorateShell() {
    document.body.classList.add('vors-v1');
    document.querySelectorAll('.side-nav [data-view], .bottom-nav [data-view]').forEach(btn => {
      const key = btn.dataset.view;
      const slot = btn.querySelector('span');
      if (slot && icons[key]) slot.innerHTML = icon(key);
    });
    const role = document.getElementById('roleButton');
    if (role) role.innerHTML = icon('user');
    const version = document.querySelector('.sidebar-footer .version b');
    if (version) version.textContent = UI_VERSION;
  }

  render = function renderV1() {
    baseRender();
    decorateShell();
  };

  decorateShell();
  render();
})();

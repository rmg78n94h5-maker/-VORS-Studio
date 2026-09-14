(() => {
  'use strict';

  const FLOW_VERSION = '1.1.0';
  const baseRender = render;
  const baseRenderToday = renderToday;
  const baseOpenNewOrder = openNewOrder;
  const baseNextStage = nextStage;
  const basePrepareForStockOrShipment = prepareForStockOrShipment;

  function productionPurpose(production) {
    return production?.orderId || production?.sourceType === 'order' ? 'client' : 'sale';
  }

  function purposeLabel(production) {
    return productionPurpose(production) === 'client' ? 'Для клиента' : 'На продажу';
  }

  function decorateTerminology() {
    document.querySelectorAll('[data-view="projects"] b, [data-view="projects"] small').forEach(el => { el.textContent = 'Дизайны'; });
    document.querySelectorAll('[data-view="production"] b').forEach(el => { el.textContent = 'Производство'; });
    document.querySelectorAll('[data-view="production"] small').forEach(el => { el.textContent = 'Работа'; });
    const version = document.querySelector('.sidebar-footer .version b');
    if (version) version.textContent = FLOW_VERSION;
  }

  function designCard(p) {
    return `<article class="project-card v1-project-card flow-design-card" data-project="${p.id}" data-category="${esc(p.category || '')}" data-name="${esc(String(p.name || '').toLowerCase())}">
      <div class="project-cover v1-project-cover">${visual(p, `Дизайн ${p.name}`)}<div class="flow-design-label">ДИЗАЙН</div></div>
      <div class="project-body v1-project-body">
        <div><div class="project-name">${esc(p.name)}</div><div class="project-meta">${esc(p.size || 'Размер не указан')} · ${esc(p.category || 'Без категории')}</div></div>
        <div class="v1-project-price">${rub(p.price || 0)}</div>
      </div>
    </article>`;
  }

  renderProjects = function renderDesigns() {
    return `
      ${viewHeader('Дизайны', 'Библиотека моделей VORS. Дизайн — это шаблон, а не конкретный ковёр в работе.', `<button class="secondary-btn" data-action="rug-calculator">Калькулятор</button><button class="primary-btn" data-action="new-project">＋ Новый дизайн</button>`)}
      <div class="flow-explainer"><span>Дизайн</span><i>→</i><span>Для клиента / На продажу</span><i>→</i><span>Производство</span><i>→</i><span>Готовый ковёр</span></div>
      <div class="v1-project-toolbar"><div class="search"><input id="projectSearch" placeholder="Поиск по дизайнам" /></div><div class="chips" id="projectChips"><button class="chip active" data-filter="Все">Все</button>${[...new Set(state.projects.map(p => p.category).filter(Boolean))].map(c=>`<button class="chip" data-filter="${esc(c)}">${esc(c)}</button>`).join('')}</div></div>
      <section class="project-grid v1-project-grid" id="projectGrid">${state.projects.length ? state.projects.map(designCard).join('') : '<div class="v1-empty-canvas"><span>DESIGN</span><h2>Библиотека пока пустая</h2><p>Создайте повторяемый дизайн. Конкретный ковёр появится только когда вы запустите его для клиента или на продажу.</p><button class="primary-btn" data-action="new-project">Создать дизайн</button></div>'}</section>`;
  };

  function openOrderFromDesign(projectId) {
    const project = state.projects.find(item => item.id === projectId);
    if (!project) return;
    baseOpenNewOrder();
    const select = document.getElementById('orderProjectSelect');
    if (!select) return;
    select.value = project.id;
    select.dispatchEvent(new Event('change', { bubbles: true }));
  }

  openProject = function openDesign(id) {
    const p = state.projects.find(x => x.id === id); if (!p) return;
    openModal(`Дизайн · ${esc(p.name)}`, `
      <div class="status-hero flow-design-modal"><div class="status-cover">${visual(p, `Дизайн ${p.name}`)}</div><div><span class="v1-eyebrow">БИБЛИОТЕКА ДИЗАЙНОВ</span><h3>${esc(p.name)}</h3><div class="item-meta">${esc(p.category || 'Без категории')} · ${esc(p.size || 'Размер не указан')}</div><div class="price">${rub(p.price || 0)}</div></div></div>
      <div class="detail-grid flow-design-details"><div class="detail-tile"><small>Материал</small><b>${esc(p.material || 'Не указан')}</b></div><div class="detail-tile"><small>Срок изготовления</small><b>${Number(p.planDays)||7} дней</b></div></div>
      ${p.colors?.length ? `<div class="detail-tile"><small>Палитра</small><div class="flow-color-row">${p.colors.map(c=>`<i style="background:${esc(c)}"></i>`).join('')}</div></div>` : ''}
      <div class="detail-tile"><small>Заметки</small><div>${esc(p.notes || 'Нет заметок')}</div></div>
      <div class="flow-design-help">Этот экран ничего не «производит». Он хранит модель ковра. Ниже выберите, зачем делать физический экземпляр.</div>`,
      `${p.isTest ? '<button class="danger-btn" data-delete-test>Удалить тест целиком</button>' : '<button class="secondary-btn" data-mark-test>Пометить как тест</button>'}<button class="danger-btn" data-delete>Удалить дизайн</button><button class="secondary-btn" data-estimate>Смета</button><button class="secondary-btn" data-order>Заказ по дизайну</button><button class="primary-btn" data-sale>Сделать на продажу</button><button class="secondary-btn" data-edit>Изменить дизайн</button>`);
    modalRoot.querySelector('[data-delete-test]')?.addEventListener('click', () => { closeModal(); deleteTestChain(id, 'project'); });
    modalRoot.querySelector('[data-mark-test]')?.addEventListener('click', () => { closeModal(); markTestChain(id, 'project'); });
    modalRoot.querySelector('[data-delete]').onclick = () => { closeModal(); deleteProject(id); };
    modalRoot.querySelector('[data-estimate]').onclick = () => { closeModal(); openRugCalculator(id); };
    modalRoot.querySelector('[data-order]').onclick = () => { closeModal(); openOrderFromDesign(id); };
    modalRoot.querySelector('[data-sale]').onclick = () => { closeModal(); launchProject(id); };
    modalRoot.querySelector('[data-edit]').onclick = () => { closeModal(); openProjectEditor(p); };
  };

  function clientProductionPicker() {
    const orders = state.orders.filter(order => !productionForOrder(order) && !['К отправке','Отправлен'].includes(order.status));
    openModal('Для клиента', `<div class="flow-picker-head"><span class="v1-eyebrow">ПРОИЗВОДСТВО</span><h3>Какой заказ запускаем?</h3><p>Здесь только реальные клиентские заказы. Дизайн можно выбрать при создании заказа, но производство привязывается к самому заказу.</p></div>
      <div class="flow-picker-list">${orders.length ? orders.map(order => `<button class="flow-pick-row" data-flow-order="${order.id}"><div class="thumb">${visualForOrder(order)}</div><div><b>${esc(order.project)}</b><span>${esc(order.client)} · ${esc(order.size || 'Размер не указан')} · ${rub(order.amount || 0)}</span></div><strong>→</strong></button>`).join('') : '<div class="v1-empty-line">Нет заказов, которые ждут запуска в производство.</div>'}</div>`,
      `<button class="secondary-btn" data-flow-new-order>＋ Новый заказ</button>`);
    modalRoot.querySelectorAll('[data-flow-order]').forEach(btn => btn.addEventListener('click', () => { const id = btn.dataset.flowOrder; closeModal(); launchOrder(id); }));
    modalRoot.querySelector('[data-flow-new-order]').onclick = () => { closeModal(); baseOpenNewOrder(); };
  }

  function saleProductionPicker() {
    const designs = state.projects.filter(project => !state.productions.some(item => item.projectId === project.id && productionPurpose(item) === 'sale' && Number(item.progress) < 100));
    openModal('На продажу', `<div class="flow-picker-head"><span class="v1-eyebrow">ПРОИЗВОДСТВО</span><h3>Какой дизайн делаем на продажу?</h3><p>Клиента нет. После завершения этот экземпляр попадёт в «Готовые изделия» как свободный товар.</p></div>
      <div class="flow-picker-grid">${designs.length ? designs.map(p => `<button class="flow-pick-design" data-flow-design="${p.id}"><div>${visual(p, `Дизайн ${p.name}`)}</div><span>${esc(p.name)}</span><small>${esc(p.size || 'Размер не указан')} · ${rub(p.price || 0)}</small></button>`).join('') : '<div class="v1-empty-line">Нет свободных дизайнов. Если дизайн уже производится на продажу, сначала закончите текущий экземпляр.</div>'}</div>`,
      `<button class="secondary-btn" data-flow-new-design>＋ Новый дизайн</button>`);
    modalRoot.querySelectorAll('[data-flow-design]').forEach(btn => btn.addEventListener('click', () => { const id = btn.dataset.flowDesign; closeModal(); launchProject(id); }));
    modalRoot.querySelector('[data-flow-new-design]').onclick = () => { closeModal(); openNewProject(); };
  }

  openStartProduction = function openSimpleProductionStart() {
    openModal('Новый ковёр', `<div class="flow-start-copy"><span class="v1-eyebrow">ОДИН ВОПРОС</span><h3>Куда пойдёт готовый ковёр?</h3><p>Технология изготовления одинаковая. Разница только в том, есть ли уже конкретный клиент.</p></div>
      <div class="flow-choice-grid">
        <button class="flow-choice flow-client" data-flow-choice="client"><span class="flow-choice-no">01</span><div><b>Для клиента</b><small>Есть заказ, цена, оплата, срок и получатель.</small></div><strong>→</strong></button>
        <button class="flow-choice flow-sale" data-flow-choice="sale"><span class="flow-choice-no">02</span><div><b>На продажу</b><small>Делаем экземпляр без клиента. После готовности он попадёт в свободный склад.</small></div><strong>→</strong></button>
      </div>`);
    modalRoot.querySelector('[data-flow-choice="client"]').onclick = clientProductionPicker;
    modalRoot.querySelector('[data-flow-choice="sale"]').onclick = saleProductionPicker;
  };

  launchProject = function launchDesignForSale(projectId) {
    const project = state.projects.find(item => item.id === projectId); if (!project) return;
    const activeSale = state.productions.find(item => item.projectId === projectId && productionPurpose(item) === 'sale' && Number(item.progress) < 100);
    if (activeSale) return toast('Этот дизайн уже производится на продажу');
    const production = createProductionCard({ name: project.name, project, coverImage: project.coverImage, pattern: project.pattern, planDays: project.planDays, isTest: project.isTest });
    production.sourceType = 'stock';
    production.orderId = '';
    production.destination = 'sale';
    state.productions.unshift(production);
    markSaving(); state.view='production'; render(); toast('Ковёр запущен на продажу');
  };

  renderProduction = function renderSimpleProduction() {
    const active = state.productions.filter(p => Number(p.progress) < 100);
    const completed = state.productions.filter(p => Number(p.progress) >= 100);
    const renderWork = p => {
      const order = orderForProduction(p);
      const stage = currentProductionStage(p);
      const isClient = productionPurpose(p) === 'client';
      return `<article class="v1-workbench flow-workbench ${isClient ? 'is-client' : 'is-sale'}">
        <div class="v1-workbench-visual">${visualForProduction(p)}<div class="flow-purpose-badge">${isClient ? 'ДЛЯ КЛИЕНТА' : 'НА ПРОДАЖУ'}</div><div class="v1-workbench-overlay"><span>${esc(p.id)}</span><strong>${Number(p.progress)||0}%</strong></div></div>
        <div class="v1-workbench-main">
          <header class="v1-workbench-head"><div><span class="v1-eyebrow">${isClient && order ? `${esc(order.client)} · ${esc(order.id)}` : 'СВОБОДНЫЙ ТОВАР'}</span><h2>${esc(p.name)}</h2><p>${esc(stage)} · ${fmtTime(p.timerSeconds || 0)} активной работы</p></div><div class="v1-workbench-cost"><span>Себестоимость</span><b>${rub(p.cost || 0)}</b></div></header>
          <div class="v1-stage-timeline">${(p.stages||[]).map((s,i)=>`<div class="v1-stage ${esc(s.status)}"><span class="v1-stage-no">${String(i+1).padStart(2,'0')}</span><i></i><div><b>${esc(s.name)}</b>${s.status==='active'?'<small>Сейчас</small>':s.status==='done'?'<small>Готово</small>':''}</div></div>`).join('')}</div>
          <footer class="v1-workbench-actions"><button class="secondary-btn" data-action="stage-guide" data-id="${p.id}">Инструкция</button><button class="secondary-btn" data-action="production-materials" data-id="${p.id}">Материалы</button>${Number(p.progress)<100 ? `<button class="secondary-btn" data-action="timer" data-id="${p.id}">${p.timerRunning?'Пауза':'Таймер'}</button><button class="primary-btn" data-action="next-stage" data-id="${p.id}">Завершить этап</button>` : `<button class="primary-btn" data-action="prepare-shipment" data-id="${p.id}">${isClient ? 'Готов к отправке' : 'Передать в продажу'}</button>`}</footer>
        </div>
      </article>`;
    };
    return `${viewHeader('Производство', 'Здесь только физические ковры, которые реально делаются сейчас.', `<button class="primary-btn" data-action="start-production">＋ Новый ковёр</button>`)}
      <div class="flow-explainer flow-explainer-production"><span>Для клиента</span><span class="flow-or">или</span><span>На продажу</span><i>→</i><span>Одинаковое производство</span></div>
      ${active.length ? `<section class="v1-work-list">${active.map(renderWork).join('')}</section>` : '<div class="v1-empty-canvas"><span>WORK</span><h2>Сейчас ничего не производится</h2><p>Нажмите «Новый ковёр» и выберите всего одно: для клиента или на продажу.</p><button class="primary-btn" data-action="start-production">Новый ковёр</button></div>'}
      ${completed.length ? `<div class="v1-completed-note">Завершено производств: ${completed.length}. Готовые экземпляры смотрите в разделе «Готовые изделия».</div>` : ''}`;
  };

  renderToday = function renderTodayFlow() {
    return baseRenderToday()
      .replaceAll('для склада', 'на продажу')
      .replaceAll('VORS COLLECTION', 'НА ПРОДАЖУ');
  };

  openNewOrder = function openNewOrderFlow() {
    baseOpenNewOrder();
    const select = document.getElementById('orderProjectSelect');
    if (select) {
      const field = select.closest('.field');
      const label = field?.querySelector('label');
      const small = field?.querySelector('small');
      if (label) label.textContent = 'Дизайн (необязательно)';
      if (small) small.textContent = 'Можно выбрать готовый дизайн VORS или оставить пустым и сделать индивидуальный заказ.';
    }
    const projectInput = modalRoot.querySelector('input[name="project"]');
    if (projectInput) {
      const label = projectInput.closest('.field')?.querySelector('label');
      if (label) label.textContent = 'Название ковра / что делаем';
    }
  };

  // Старое ядро иногда пишет прогресс экземпляра обратно в проект. Для пользователя проект теперь является дизайном,
  // поэтому эти поля больше не несут смысла и не показываются в интерфейсе. Существующие связи и данные не ломаем.
  nextStage = function nextStageFlow(id) {
    baseNextStage(id);
  };
  prepareForStockOrShipment = function prepareFlow(id) {
    basePrepareForStockOrShipment(id);
  };

  renderMore = (() => {
    const previous = renderMore;
    return function renderMoreFlow() {
      return previous().replace('VORS Studio</span><b>1.0.0', `VORS Studio</span><b>${FLOW_VERSION}`);
    };
  })();

  render = function renderFlow() {
    baseRender();
    decorateTerminology();
  };

  decorateTerminology();
  render();
})();

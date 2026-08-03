const STORAGE_KEY = 'vors-studio-0.1.0';

const DEFAULT_STATE = {
  role: 'owner',
  view: 'today',
  selectedOrderId: 'ORD-2026-058',
  tasks: [
    { id: 'T1', title: 'Подготовить пряжу для ковра «Скала»', time: '10:00', done: false },
    { id: 'T2', title: 'Проверить раму и натяжение основы', time: '11:30', done: true },
    { id: 'T3', title: 'Сделать фото этапа для клиента', time: '14:00', done: false },
    { id: 'T4', title: 'Упаковать готовый ковёр RUG-0047', time: '17:30', done: false }
  ],
  projects: [
    { id: 'PRJ-001', name: 'Скала', category: 'Интерьер', size: '180 × 120 см', status: 'В работе', progress: 75, price: 22500, pattern: 'a', colors: ['#14293e','#c65f3e','#e8dac7','#8d9aa1'], material: 'Акрил + шерсть', planDays: 8, notes: 'Контрастные зоны набивать плотнее. Синий контур выстричь глубже.' },
    { id: 'PRJ-002', name: 'Лесная тишина', category: 'Интерьер', size: '160 × 110 см', status: 'Готов к запуску', progress: 0, price: 19800, pattern: 'b', colors: ['#71806a','#e6dfcf','#b9ad96'], material: 'Акрил', planDays: 6, notes: 'Мягкая органическая форма, короткий плотный ворс.' },
    { id: 'PRJ-003', name: 'Линии', category: 'Панно', size: '200 × 140 см', status: 'Идея', progress: 0, price: 24900, pattern: 'c', colors: ['#efe4d2','#8b7762','#596674'], material: 'Шерсть', planDays: 10, notes: 'Проверить читаемость тонких линий на тестовом образце.' },
    { id: 'PRJ-004', name: 'Север', category: 'Интерьер', size: '140 × 100 см', status: 'В работе', progress: 42, price: 17400, pattern: 'd', colors: ['#344a4c','#9c4d32','#ded2bd'], material: 'Акрил', planDays: 7, notes: 'Финишная стрижка — мягкий переход без глубокой канавки.' }
  ],
  materials: [
    { id: 'MAT-001', name: 'Пряжа кремовая', type: 'Пряжа', code: 'WH-01', stock: 620, min: 1000, unit: 'г', pricePerUnit: 0.78, supplier: 'Yarn House', tone: 'cream' },
    { id: 'MAT-002', name: 'Пряжа тёмно-синяя', type: 'Пряжа', code: 'WH-12', stock: 2450, min: 1000, unit: 'г', pricePerUnit: 0.72, supplier: 'Wool&Co', tone: 'navy' },
    { id: 'MAT-003', name: 'Пряжа терракотовая', type: 'Пряжа', code: 'WH-18', stock: 840, min: 700, unit: 'г', pricePerUnit: 0.76, supplier: 'Yarn House', tone: 'clay' },
    { id: 'MAT-004', name: 'Пряжа оливковая', type: 'Пряжа', code: 'WH-23', stock: 1380, min: 800, unit: 'г', pricePerUnit: 0.81, supplier: 'Wool&Co', tone: 'moss' },
    { id: 'MAT-005', name: 'Основа первичная тафтинговая', type: 'Основа', code: 'B-01', stock: 18, min: 20, unit: 'м', pricePerUnit: 260, supplier: 'Tuft Base', tone: 'cream' },
    { id: 'MAT-006', name: 'Клей латексный', type: 'Клей', code: 'GL-01', stock: 1.2, min: 1.5, unit: 'л', pricePerUnit: 540, supplier: 'Adhesive Pro', tone: 'cream' },
    { id: 'MAT-007', name: 'Подложка антискользящая', type: 'Подложка', code: 'SB-01', stock: 35, min: 30, unit: 'м', pricePerUnit: 190, supplier: 'Textile Plus', tone: 'cream' },
    { id: 'MAT-008', name: 'Коробки 60 × 60', type: 'Упаковка', code: 'PK-60', stock: 6, min: 10, unit: 'шт', pricePerUnit: 145, supplier: 'Pack&Go', tone: 'cream' }
  ],
  productions: [
    {
      id: 'RUG-2026-0047', projectId: 'PRJ-001', name: 'Скала', pattern: 'a', progress: 58, planDays: 12, elapsedDays: 7, cost: 8420,
      timerSeconds: 9258, timerRunning: false,
      stages: [
        { name: 'Эскиз', status: 'done' }, { name: 'Перенос', status: 'done' }, { name: 'Набивка', status: 'active' },
        { name: 'Проклейка', status: 'wait' }, { name: 'Сушка', status: 'wait' }, { name: 'Подложка', status: 'wait' },
        { name: 'Стрижка', status: 'wait' }, { name: 'Контроль качества', status: 'wait' }, { name: 'Упаковка', status: 'wait' }
      ],
      notes: 'Дополнительно уплотнить контуры синего цвета.', photos: 3
    },
    {
      id: 'RUG-2026-0048', projectId: 'PRJ-004', name: 'Север', pattern: 'd', progress: 42, planDays: 9, elapsedDays: 4, cost: 5290,
      timerSeconds: 4870, timerRunning: false,
      stages: [
        { name: 'Эскиз', status: 'done' }, { name: 'Перенос', status: 'done' }, { name: 'Набивка', status: 'active' },
        { name: 'Проклейка', status: 'wait' }, { name: 'Сушка', status: 'wait' }, { name: 'Подложка', status: 'wait' },
        { name: 'Стрижка', status: 'wait' }, { name: 'Контроль качества', status: 'wait' }, { name: 'Упаковка', status: 'wait' }
      ],
      notes: 'В терракотовой зоне использовать три нити.', photos: 2
    }
  ],
  orders: [
    { id: 'ORD-2026-058', clientId: 'CL-001', client: 'Анна Смирнова', phone: '+7 912 345-67-89', email: 'anna.smirnova@mail.ru', city: 'Москва', project: 'Скала', pattern: 'a', size: '180 × 120 см', material: 'Акрил + шерсть', amount: 22500, prepaid: 11250, status: 'В работе', deadline: '15.09.2026', progress: 58, source: 'Авито', note: 'Приглушённые оттенки, без ярких акцентов.', history: [
      { who: 'Анна', text: 'Спасибо! Жду фото процесса.', date: '02.08.2026, 14:32' },
      { who: 'Вы', text: 'Отправил актуальный статус и фото набивки.', date: '03.08.2026, 09:10' }
    ]},
    { id: 'ORD-2026-057', clientId: 'CL-002', client: 'Дмитрий Волков', phone: '+7 928 100-44-81', email: '', city: 'Ростов-на-Дону', project: 'Линии', pattern: 'c', size: '140 × 100 см', material: 'Акрил', amount: 14800, prepaid: 0, status: 'Расчёт', deadline: '—', progress: 0, source: 'VK', note: 'Нужно панно над рабочим столом.', history: [] },
    { id: 'ORD-2026-056', clientId: 'CL-003', client: 'Екатерина Лебедева', phone: '+7 918 222-09-41', email: '', city: 'Краснодар', project: 'Лесная тишина', pattern: 'b', size: '160 × 110 см', material: 'Акрил', amount: 19800, prepaid: 9900, status: 'Предоплата', deadline: '22.09.2026', progress: 5, source: 'Telegram', note: 'Для спальни, спокойные цвета.', history: [] },
    { id: 'ORD-2026-055', clientId: 'CL-004', client: 'Иван Петров', phone: '+7 962 541-12-00', email: '', city: 'Ставрополь', project: 'Север', pattern: 'd', size: '140 × 100 см', material: 'Акрил', amount: 17400, prepaid: 8700, status: 'В работе', deadline: '18.09.2026', progress: 42, source: 'Авито', note: '', history: [] },
    { id: 'ORD-2026-054', clientId: 'CL-005', client: 'Мария Кузнецова', phone: '+7 918 555-33-11', email: '', city: 'Белая Глина', project: 'Камни', pattern: 'b', size: '90 × 70 см', material: 'Акрил', amount: 9900, prepaid: 9900, status: 'Готов', deadline: '10.08.2026', progress: 100, source: 'Рекомендация', note: 'Самовывоз.', history: [] },
    { id: 'ORD-2026-053', clientId: 'CL-006', client: 'Алексей Соколов', phone: '+7 918 700-90-20', email: '', city: 'Таганрог', project: 'Волна', pattern: 'c', size: '80 × 60 см', material: 'Акрил', amount: 7900, prepaid: 7900, status: 'Отправлен', deadline: '02.08.2026', progress: 100, source: 'VK', note: '', history: [] }
  ],
  products: [
    { id: 'RUG-2026-0044', name: 'Камни', pattern: 'b', size: '90 × 70 см', composition: '100% акрил', base: 'Хлопковая тафтинговая ткань', pile: '12 мм', care: 'Сухая чистка, не стирать в машине', retail: 9900, minimum: 7900, location: 'Стеллаж 2 · Полка Б · Ячейка 03', status: 'Опубликован', channels: ['Авито','VK'], days: 18 },
    { id: 'RUG-2026-0045', name: 'Волна', pattern: 'c', size: '80 × 60 см', composition: '100% акрил', base: 'Хлопковая основа', pile: '11 мм', care: 'Пылесос без щётки', retail: 7900, minimum: 6200, location: 'Стеллаж 1 · Полка А', status: 'Резерв', channels: ['Авито'], days: 9 },
    { id: 'RUG-2026-0046', name: 'Север', pattern: 'd', size: '140 × 100 см', composition: 'Акрил', base: 'Тафтинговая ткань', pile: '13 мм', care: 'Сухая чистка', retail: 17400, minimum: 14200, location: 'Стеллаж 3 · Полка В', status: 'Готов к фото', channels: [], days: 3 }
  ],
  finance: {
    months: [
      { m: 'Мар', revenue: 128000, profit: 52000 },
      { m: 'Апр', revenue: 164000, profit: 66000 },
      { m: 'Май', revenue: 181000, profit: 70200 },
      { m: 'Июн', revenue: 199000, profit: 79500 },
      { m: 'Июл', revenue: 214000, profit: 82400 },
      { m: 'Авг', revenue: 228400, profit: 86750 }
    ],
    hours: 35.4
  },
  shipments: [
    { orderId: 'ORD-2026-054', rugId: 'RUG-2026-0044', client: 'Мария Кузнецова', phone: '+7 918 555-33-11', address: 'Краснодарский край, с. Белая Глина', location: 'Стеллаж 2 · Полка Б', package: 'PK-10248-01', status: 'Оплачен', tracking: '' }
  ]
};

let state = loadState();
let timerInterval = null;

const main = document.getElementById('mainContent');
const modalRoot = document.getElementById('modalRoot');
const toastRoot = document.getElementById('toastRoot');

function clone(value) { return JSON.parse(JSON.stringify(value)); }
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...clone(DEFAULT_STATE), ...JSON.parse(saved) } : clone(DEFAULT_STATE);
  } catch (error) {
    console.warn('Не удалось загрузить данные', error);
    return clone(DEFAULT_STATE);
  }
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  const pill = document.getElementById('syncPill');
  if (pill) {
    pill.querySelector('.sync-text').textContent = 'Сохранено';
    pill.querySelector('.sync-dot').style.background = 'var(--success)';
  }
}
function markSaving() {
  const pill = document.getElementById('syncPill');
  if (pill) {
    pill.querySelector('.sync-text').textContent = 'Сохранение…';
    pill.querySelector('.sync-dot').style.background = 'var(--warning)';
  }
  clearTimeout(markSaving._t);
  markSaving._t = setTimeout(saveState, 220);
}

function rub(value) {
  return new Intl.NumberFormat('ru-RU').format(Math.round(value)) + ' ₽';
}
function num(value, digits = 0) {
  return new Intl.NumberFormat('ru-RU', { maximumFractionDigits: digits }).format(value);
}
function statusClass(status) {
  if (['Готов','Опубликован','Отправлен','Оплачен'].includes(status)) return 'success';
  if (['В работе','Предоплата'].includes(status)) return 'clay';
  if (['Расчёт','Идея','Готов к фото'].includes(status)) return 'warn';
  if (['Резерв'].includes(status)) return 'blue';
  return '';
}
function pattern(name) { return `<div class="pattern pattern-${name || 'a'}"></div>`; }
function progress(value) { return `<div class="progress"><span style="width:${Math.max(0, Math.min(100, value))}%"></span></div>`; }
function fmtTime(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}
function toast(text) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = text;
  toastRoot.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}
function viewHeader(title, subtitle, actions = '') {
  return `<header class="view-header"><div><h1 class="view-title">${title}</h1><p class="view-subtitle">${subtitle}</p></div><div class="header-actions">${actions}</div></header>`;
}
function kpi(label, value, change) {
  return `<article class="card kpi"><span class="kpi-label">${label}</span><strong class="kpi-value">${value}</strong><span class="kpi-change">${change}</span></article>`;
}

function render() {
  stopTimerLoop();
  const view = state.view;
  document.querySelectorAll('[data-view]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === view || (view === 'more' && btn.dataset.view === 'more'));
  });
  const roleButton = document.getElementById('roleButton');
  if (roleButton) roleButton.textContent = state.role === 'owner' ? '👤' : state.role === 'manager' ? '💬' : '📦';

  const renderers = {
    today: renderToday,
    projects: renderProjects,
    production: renderProduction,
    materials: renderMaterials,
    orders: renderOrders,
    products: renderProducts,
    finance: renderFinance,
    family: renderFamily,
    more: renderMore
  };
  main.innerHTML = (renderers[view] || renderToday)();
  main.focus({ preventScroll: true });
  bindViewEvents();
  if (view === 'production') startTimerLoop();
}

function renderToday() {
  const revenue = state.finance.months.at(-1).revenue;
  const profitValue = state.finance.months.at(-1).profit;
  const active = state.productions.length;
  const low = state.materials.filter(m => m.stock < m.min).length;
  return `
    ${viewHeader('Сегодня', 'Что происходит в мастерской прямо сейчас.', `<button class="primary-btn" data-action="new-order">＋ Новый заказ</button>`)}
    <section class="kpi-grid">
      ${kpi('Выручка за месяц', rub(revenue), '+7% к прошлому месяцу')}
      ${kpi('Прибыль', rub(profitValue), '+5% к прошлому месяцу')}
      ${kpi('В производстве', `${active} ковра`, 'В срок: 2 из 2')}
      ${kpi('Низкие остатки', `${low} позиции`, low ? 'Нужно пополнить запас' : 'Всё в норме')}
    </section>
    <section class="grid dashboard-grid">
      <div class="section-stack">
        <article class="card card-pad">
          <div class="card-head"><h2>Задачи на сегодня</h2><small>${state.tasks.filter(t => !t.done).length} осталось</small></div>
          <div class="task-list">
            ${state.tasks.map(t => `<div class="task ${t.done ? 'done' : ''}"><button class="task-check" data-task="${t.id}" aria-label="Отметить задачу"></button><div class="task-name">${t.title}</div><span class="task-time">${t.time}</span></div>`).join('')}
          </div>
        </article>
        <article class="card card-pad">
          <div class="card-head"><h2>Активные ковры</h2><button class="card-action" data-go="production">Все →</button></div>
          <div class="list">
            ${state.productions.map(p => `<div class="item-row"><div class="thumb">${pattern(p.pattern)}</div><div><div class="item-title">${p.name}</div><div class="item-meta">${p.id} · ${p.stages.find(s => s.status === 'active')?.name || 'В работе'}</div>${progress(p.progress)}</div><div class="item-side"><b>${p.progress}%</b><div class="item-meta">${p.elapsedDays}/${p.planDays} дней</div></div></div>`).join('')}
          </div>
        </article>
      </div>
      <div class="section-stack">
        <article class="card card-pad">
          <div class="card-head"><h3>Материалы на исходе</h3><button class="card-action" data-go="materials">Склад →</button></div>
          <div class="list">
            ${state.materials.filter(m => m.stock < m.min).map(m => `<div class="task"><span class="badge danger">!</span><div><div class="item-title">${m.name}</div><div class="item-meta">Минимум ${num(m.min, 1)} ${m.unit}</div></div><b>${num(m.stock, 1)} ${m.unit}</b></div>`).join('')}
          </div>
        </article>
        <article class="card card-pad">
          <div class="card-head"><h3>Быстрые действия</h3></div>
          <div class="quick-grid">
            <button class="quick-action" data-action="new-project"><span>＋</span><b>Проект</b></button>
            <button class="quick-action" data-go="materials"><span>◒</span><b>Материалы</b></button>
            <button class="quick-action" data-action="new-order"><span>▣</span><b>Заказ</b></button>
            <button class="quick-action" data-go="finance"><span>▥</span><b>Финансы</b></button>
          </div>
        </article>
        <article class="card card-pad">
          <div class="card-head"><h3>Ближайший заказ</h3><span class="badge clay">${state.orders[0].status}</span></div>
          <div class="item-row"><div class="thumb">${pattern(state.orders[0].pattern)}</div><div><div class="item-title">${state.orders[0].project}</div><div class="item-meta">${state.orders[0].client}</div></div><div class="item-side"><b>${state.orders[0].progress}%</b></div></div>
          <button class="secondary-btn" style="width:100%;margin-top:12px" data-action="client-status" data-id="${state.orders[0].id}">Показать статус клиенту</button>
        </article>
      </div>
    </section>`;
}

function renderProjects() {
  return `
    ${viewHeader('Проекты и коллекции', 'Идеи, расчёты и готовые проекты — в одном месте.', `<button class="primary-btn" data-action="new-project">＋ Новый проект</button>`)}
    <div class="toolbar"><div class="search"><input id="projectSearch" placeholder="Поиск проектов" /></div><div class="chips" id="projectChips"><button class="chip active" data-filter="Все">Все</button>${[...new Set(state.projects.map(p => p.category))].map(c => `<button class="chip" data-filter="${c}">${c}</button>`).join('')}</div></div>
    <section class="project-grid" id="projectGrid">
      ${state.projects.map(projectCard).join('')}
    </section>`;
}
function projectCard(p) {
  return `<article class="card project-card" data-project="${p.id}" data-category="${p.category}" data-name="${p.name.toLowerCase()}">
    <div class="project-cover">${pattern(p.pattern)}</div>
    <div class="project-body"><div class="project-top"><div><div class="project-name">${p.name}</div><div class="project-meta">${p.size} · ${p.category}</div></div><span class="badge ${statusClass(p.status)}">${p.status}</span></div>
    <div style="margin-top:14px">${progress(p.progress)}</div>
    <div class="project-footer"><span class="price">${rub(p.price)}</span><span class="project-meta">План: ${p.planDays} дней</span></div></div>
  </article>`;
}

function renderProduction() {
  return `
    ${viewHeader('Производство', 'Каждый этап, время, расход и качество — под контролем.', `<button class="primary-btn" data-action="start-production">＋ Запустить ковёр</button>`)}
    <section class="production-list">
      ${state.productions.map(p => `
        <article class="card production-card">
          <div class="production-card-head"><div class="thumb">${pattern(p.pattern)}</div><div style="flex:1"><div class="project-top"><div><div class="project-name">${p.name}</div><div class="project-meta">${p.id}</div></div><span class="badge clay">В работе</span></div><div style="margin-top:10px">${progress(p.progress)}</div></div><div class="item-side"><div class="timer" data-timer="${p.id}">${fmtTime(p.timerSeconds)}</div><div class="item-meta">активное время</div></div></div>
          <div class="grid cols-3" style="margin-top:14px"><div class="detail-tile"><small>План</small><b>${p.planDays} дней</b></div><div class="detail-tile"><small>Факт</small><b>${p.elapsedDays} дней</b></div><div class="detail-tile"><small>Себестоимость</small><b>${rub(p.cost)}</b></div></div>
          <div class="stages">${p.stages.map((s, i) => `<div class="stage ${s.status}"><span class="stage-index">${s.status === 'done' ? '✓' : i + 1}</span><b>${s.name}</b><span class="badge ${s.status === 'active' ? 'clay' : s.status === 'done' ? 'success' : ''}">${s.status === 'done' ? 'Готово' : s.status === 'active' ? 'В процессе' : 'Ожидает'}</span></div>`).join('')}</div>
          <div class="production-actions"><button class="primary-btn" data-action="timer" data-id="${p.id}">${p.timerRunning ? 'Пауза' : 'Старт таймера'}</button><button class="secondary-btn" data-action="next-stage" data-id="${p.id}">Завершить этап</button><button class="secondary-btn" data-action="production-note" data-id="${p.id}">Заметка</button><button class="secondary-btn" data-action="client-status-by-rug" data-id="${p.id}">Статус клиенту</button></div>
        </article>`).join('')}
    </section>`;
}

function renderMaterials() {
  const low = state.materials.filter(m => m.stock < m.min).length;
  const total = state.materials.reduce((sum, m) => sum + m.stock * m.pricePerUnit, 0);
  return `
    ${viewHeader('Материалы и закупки', 'Остатки, минимумы, цены и поставщики без хаоса.', `<button class="primary-btn" data-action="new-material">＋ Материал</button>`)}
    <section class="kpi-grid">
      ${kpi('Стоимость запасов', rub(total), `${state.materials.length} позиций`)}
      ${kpi('Ниже минимума', `${low} позиции`, 'Добавлены в план закупок')}
      ${kpi('Пряжа на складе', `${num(state.materials.filter(m=>m.type==='Пряжа').reduce((s,m)=>s+m.stock,0)/1000,1)} кг`, 'Доступно для проектов')}
      ${kpi('Поставщики', '5 активных', '2 резервных')}
    </section>
    <div class="toolbar"><div class="search"><input id="materialSearch" placeholder="Поиск материалов" /></div><div class="chips" id="materialChips"><button class="chip active" data-filter="Все">Все</button>${[...new Set(state.materials.map(m => m.type))].map(c => `<button class="chip" data-filter="${c}">${c}</button>`).join('')}</div></div>
    <article class="card card-pad"><div class="material-table" id="materialTable">${state.materials.map(materialRow).join('')}</div></article>`;
}
function materialRow(m) {
  return `<div class="material-row" data-material="${m.id}" data-type="${m.type}" data-name="${m.name.toLowerCase()}">
    <div class="material-thumb ${m.tone}"></div>
    <div><div class="item-title">${m.name}</div><div class="item-meta">${m.code} · ${m.supplier}</div></div>
    <div><div class="material-label">Остаток</div><div class="material-number ${m.stock < m.min ? 'low' : ''}">${num(m.stock,1)} ${m.unit}</div></div>
    <div><div class="material-label">Минимум</div><div class="material-number">${num(m.min,1)} ${m.unit}</div></div>
    <button class="secondary-btn" data-action="adjust-material" data-id="${m.id}">Изменить</button>
  </div>`;
}

function renderOrders() {
  const selected = state.orders.find(o => o.id === state.selectedOrderId) || state.orders[0];
  return `
    ${viewHeader('Клиенты и заказы', 'Покупатели, оплаты, сроки и история общения.', `<button class="primary-btn" data-action="new-order">＋ Новый заказ</button>`)}
    <div class="toolbar"><div class="search"><input id="orderSearch" placeholder="Поиск по клиентам и заказам" /></div><div class="chips"><button class="chip active">Все</button><button class="chip">Новые</button><button class="chip">В работе</button><button class="chip">Готовые</button></div></div>
    <section class="order-layout">
      <article class="card card-pad order-list" id="orderList">
        ${state.orders.map(o => `<div class="order-card ${o.id === selected.id ? 'active' : ''}" data-order="${o.id}" data-name="${(o.client+' '+o.project+' '+o.id).toLowerCase()}"><div class="thumb">${pattern(o.pattern)}</div><div><div class="item-title">${o.id}</div><div class="item-meta">${o.client} · ${o.project}</div></div><span class="badge ${statusClass(o.status)}">${o.status}</span></div>`).join('')}
      </article>
      ${renderOrderDetail(selected)}
    </section>`;
}
function renderOrderDetail(o) {
  return `<article class="card card-pad" id="orderDetail">
    <div class="card-head"><div><h2>${o.id}</h2><small>${o.client} · ${o.city}</small></div><span class="badge ${statusClass(o.status)}">${o.status}</span></div>
    <div class="item-row"><div class="thumb">${pattern(o.pattern)}</div><div><div class="item-title">Ковёр «${o.project}»</div><div class="item-meta">${o.size} · ${o.material}</div></div><div class="item-side"><b>${rub(o.amount)}</b></div></div>
    <div class="detail-grid" style="margin-top:14px"><div class="detail-tile"><small>Контакт</small><b>${o.phone}</b></div><div class="detail-tile"><small>Источник</small><b>${o.source}</b></div><div class="detail-tile"><small>Предоплата</small><b>${rub(o.prepaid)}</b></div><div class="detail-tile"><small>Срок</small><b>${o.deadline}</b></div></div>
    <div style="margin-top:16px"><div class="card-head"><h3>Готовность</h3><b>${o.progress}%</b></div>${progress(o.progress)}</div>
    <div class="detail-tile" style="margin-top:16px"><small>Пожелания клиента</small><div>${o.note || 'Нет дополнительных пожеланий'}</div></div>
    <div class="card-head" style="margin-top:18px"><h3>История общения</h3><small>${o.history.length} сообщений</small></div>
    <div class="timeline">${o.history.length ? o.history.map(h => `<div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-text"><b>${h.who}</b> · ${h.date}<br>${h.text}</div></div>`).join('') : '<div class="empty"><strong>Переписка пока не добавлена</strong>Сохраняйте важные договорённости и сообщения.</div>'}</div>
    <div class="production-actions"><button class="primary-btn" data-action="client-status" data-id="${o.id}">Статус для клиента</button><button class="secondary-btn" data-action="order-status" data-id="${o.id}">Изменить статус</button><button class="secondary-btn" data-action="message-template" data-id="${o.id}">Шаблон сообщения</button></div>
  </article>`;
}

function renderProducts() {
  return `
    ${viewHeader('Готовые изделия', 'Товарный склад, цены, хранение и публикации.', `<button class="primary-btn" data-action="new-product">＋ Добавить изделие</button>`)}
    <section class="product-grid">
      ${state.products.map(p => `<article class="card product-card" data-product="${p.id}"><div class="product-cover">${pattern(p.pattern)}</div><div class="product-body"><div class="product-top"><div><div class="product-name">${p.name}</div><div class="product-meta">${p.id} · ${p.size}</div></div><span class="badge ${statusClass(p.status)}">${p.status}</span></div><div class="project-footer"><span class="price">${rub(p.retail)}</span><span class="product-meta">${p.location}</span></div><div class="production-actions"><button class="secondary-btn" data-action="product-card" data-id="${p.id}">Карточка</button><button class="secondary-btn" data-action="publish-product" data-id="${p.id}">Публикации</button></div></div></article>`).join('')}
    </section>`;
}

function renderFinance() {
  const last = state.finance.months.at(-1);
  const avg = state.orders.reduce((s,o)=>s+o.amount,0)/state.orders.length;
  const perHour = last.profit/state.finance.hours;
  const max = Math.max(...state.finance.months.map(m => m.revenue));
  return `
    ${viewHeader('Финансы и аналитика', 'Выручка, прибыль, эффективность и точки роста.', `<button class="secondary-btn" data-action="new-expense">＋ Расход</button>`)}
    <section class="kpi-grid">${kpi('Выручка', rub(last.revenue), '+7% к июлю')}${kpi('Прибыль', rub(last.profit), '+5% к июлю')}${kpi('Средний чек', rub(avg), `${state.orders.length} заказов в базе`)}${kpi('Прибыль за час', rub(perHour), `${num(state.finance.hours,1)} ч учтено`)}</section>
    <section class="grid cols-2">
      <article class="card card-pad"><div class="card-head"><h2>Динамика за 6 месяцев</h2><small>Выручка / прибыль</small></div><div class="chart">${state.finance.months.map(m => `<div class="bar-wrap"><div class="bar" style="height:${m.revenue/max*100}%"></div><div class="bar profit" style="height:${m.profit/max*100}%"></div><span class="bar-label">${m.m}</span></div>`).join('')}</div><div class="legend"><span><i></i>Выручка</span><span><i class="sand"></i>Прибыль</span></div></article>
      <article class="card card-pad"><div class="card-head"><h2>Что приносит деньги</h2><small>по проектам</small></div><div class="list">${state.projects.map((p,i)=>`<div class="task"><div class="thumb">${pattern(p.pattern)}</div><div><div class="item-title">${p.name}</div><div class="item-meta">Маржа ${52-i*4}%</div>${progress(80-i*12)}</div><b>${rub(p.price*(.52-i*.04))}</b></div>`).join('')}</div></article>
      <article class="card card-pad"><div class="card-head"><h2>Залежавшиеся изделия</h2><small>нужны действия</small></div><div class="list">${state.products.map(p=>`<div class="task"><span class="badge ${p.days>14?'danger':'warn'}">${p.days}</span><div><div class="item-title">${p.name}</div><div class="item-meta">дней без продажи</div></div><b>${rub(p.retail)}</b></div>`).join('')}</div></article>
      <article class="card card-pad"><div class="card-head"><h2>Каналы продаж</h2></div><div class="list"><div class="task"><span class="badge blue">A</span><div><div class="item-title">Авито</div><div class="item-meta">48% обращений</div></div><b>9 продаж</b></div><div class="task"><span class="badge blue">VK</span><div><div class="item-title">ВКонтакте</div><div class="item-meta">31% обращений</div></div><b>5 продаж</b></div><div class="task"><span class="badge blue">TG</span><div><div class="item-title">Telegram</div><div class="item-meta">12% обращений</div></div><b>2 продажи</b></div></div></article>
    </section>`;
}

function renderFamily() {
  const shipment = state.shipments[0];
  if (!shipment) return `${viewHeader('Семейный режим', 'Простой экран для упаковки и отправки.', '')}<article class="card empty"><strong>Нет заказов к отправке</strong>Оплаченные заказы появятся здесь автоматически.</article>`;
  const order = state.orders.find(o => o.id === shipment.orderId);
  return `
    ${viewHeader('Семейный режим', 'Только оплаченные заказы и понятные шаги отправки.', '')}
    <article class="card card-pad family-card"><div class="card-head"><div><h2>Отправка заказа ${shipment.orderId}</h2><small>${shipment.status}</small></div><span class="badge success">Оплачен</span></div>
      <div class="family-order"><div class="item-row"><div class="thumb">${pattern(order?.pattern || 'a')}</div><div><div class="item-title">Ковёр «${order?.project || 'Ковёр'}»</div><div class="item-meta">${order?.size || ''}</div></div><div class="item-side"><b>${shipment.package}</b><div class="item-meta">номер упаковки</div></div></div>
      <div class="detail-grid"><div class="detail-tile"><small>Где лежит</small><b>${shipment.location}</b></div><div class="detail-tile"><small>Получатель</small><b>${shipment.client}</b></div><div class="detail-tile"><small>Адрес</small><b>${shipment.address}</b></div><div class="detail-tile"><small>Телефон</small><b>${shipment.phone}</b></div></div>
      <div class="family-steps"><div class="family-step"><span>1</span><div><b>Найти коробку</b><div class="item-meta">По номеру ${shipment.package}</div></div></div><div class="family-step"><span>2</span><div><b>Проверить ковёр</b><div class="item-meta">Чистый, сухой, без дефектов</div></div></div><div class="family-step"><span>3</span><div><b>Упаковать</b><div class="item-meta">По памятке внутри коробки</div></div></div><div class="family-step"><span>4</span><div><b>Внести трек-номер</b><div class="item-meta">После передачи службе доставки</div></div></div></div>
      <button class="primary-btn" style="width:100%;min-height:54px" data-action="ship-order" data-id="${shipment.orderId}">Отметить как отправленный</button></div>
    </article>`;
}

function renderMore() {
  return `${viewHeader('Ещё', 'Все дополнительные разделы VORS Studio.', '')}<div class="mobile-more"><button class="nav-item" data-go="orders"><span>▣</span><b>Клиенты и заказы</b></button><button class="nav-item" data-go="products"><span>◇</span><b>Готовые изделия</b></button><button class="nav-item" data-go="finance"><span>▥</span><b>Финансы и аналитика</b></button><button class="nav-item" data-go="family"><span>♧</span><b>Семейный режим</b></button><button class="nav-item" data-action="role"><span>👤</span><b>Сменить роль</b></button></div>`;
}

function bindViewEvents() {
  main.querySelectorAll('[data-go]').forEach(btn => btn.addEventListener('click', () => navigate(btn.dataset.go)));
  main.querySelectorAll('[data-action]').forEach(btn => btn.addEventListener('click', () => handleAction(btn.dataset.action, btn.dataset.id)));
  main.querySelectorAll('[data-task]').forEach(btn => btn.addEventListener('click', () => {
    const t = state.tasks.find(x => x.id === btn.dataset.task); if (t) { t.done = !t.done; markSaving(); render(); }
  }));
  main.querySelectorAll('[data-project]').forEach(card => card.addEventListener('click', () => openProject(card.dataset.project)));
  main.querySelectorAll('[data-product]').forEach(card => card.addEventListener('click', e => { if (!e.target.closest('button')) openProduct(card.dataset.product); }));
  main.querySelectorAll('[data-order]').forEach(card => card.addEventListener('click', () => { state.selectedOrderId = card.dataset.order; markSaving(); render(); }));
  bindSearch('projectSearch', '#projectGrid [data-project]', 'projectChips');
  bindSearch('materialSearch', '#materialTable [data-material]', 'materialChips');
  bindSimpleSearch('orderSearch', '#orderList [data-order]');
}
function bindSearch(inputId, itemSelector, chipsId) {
  const input = document.getElementById(inputId); const chips = document.getElementById(chipsId); if (!input) return;
  let filter = 'Все';
  const apply = () => document.querySelectorAll(itemSelector).forEach(item => {
    const hay = item.dataset.name || ''; const cat = item.dataset.category || item.dataset.type || '';
    item.style.display = hay.includes(input.value.toLowerCase()) && (filter === 'Все' || cat === filter) ? '' : 'none';
  });
  input.addEventListener('input', apply);
  chips?.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => { chips.querySelectorAll('.chip').forEach(c => c.classList.remove('active')); btn.classList.add('active'); filter = btn.dataset.filter; apply(); }));
}
function bindSimpleSearch(inputId, itemSelector) {
  const input = document.getElementById(inputId); if (!input) return;
  input.addEventListener('input', () => document.querySelectorAll(itemSelector).forEach(item => item.style.display = (item.dataset.name || '').includes(input.value.toLowerCase()) ? '' : 'none'));
}

function navigate(view) { state.view = view; markSaving(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

function handleAction(action, id) {
  const actions = {
    'new-project': openNewProject,
    'new-order': openNewOrder,
    'new-material': openNewMaterial,
    'adjust-material': () => adjustMaterial(id),
    'start-production': openStartProduction,
    'timer': () => toggleTimer(id),
    'next-stage': () => nextStage(id),
    'production-note': () => editProductionNote(id),
    'client-status': () => openClientStatus(id),
    'client-status-by-rug': () => { const p = state.productions.find(x => x.id === id); const o = state.orders.find(x => x.project === p?.name); openClientStatus(o?.id || state.orders[0].id); },
    'order-status': () => changeOrderStatus(id),
    'message-template': () => openMessageTemplate(id),
    'product-card': () => openProduct(id),
    'publish-product': () => openPublish(id),
    'new-product': openNewProduct,
    'new-expense': openExpense,
    'ship-order': () => shipOrder(id),
    'role': openRoleModal
  };
  actions[action]?.();
}

function openModal(title, body, actions = '') {
  modalRoot.innerHTML = `<div class="modal-backdrop"><section class="modal"><header class="modal-head"><h2>${title}</h2><button class="close-btn" data-close>×</button></header><div class="modal-body">${body}${actions ? `<div class="modal-actions">${actions}</div>` : ''}</div></section></div>`;
  modalRoot.querySelector('[data-close]').addEventListener('click', closeModal);
  modalRoot.querySelector('.modal-backdrop').addEventListener('click', e => { if (e.target.classList.contains('modal-backdrop')) closeModal(); });
}
function closeModal() { modalRoot.innerHTML = ''; }

function openNewProject() {
  openModal('Новый проект', `<form id="projectForm" class="form-grid"><div class="field"><label>Название</label><input name="name" required placeholder="Например, Тихий берег"></div><div class="field"><label>Категория</label><select name="category"><option>Интерьер</option><option>Ванная</option><option>Панно</option><option>Питомцы</option><option>Забавные</option></select></div><div class="field"><label>Размер</label><input name="size" placeholder="100 × 70 см"></div><div class="field"><label>Плановая цена</label><input name="price" type="number" min="0" placeholder="12000"></div><div class="field"><label>Срок, дней</label><input name="days" type="number" min="1" value="7"></div><div class="field"><label>Материал</label><input name="material" placeholder="100% акрил"></div><div class="field full"><label>Технологические заметки</label><textarea name="notes"></textarea></div></form>`, `<button class="secondary-btn" data-close2>Отмена</button><button class="primary-btn" data-save>Создать проект</button>`);
  modalRoot.querySelector('[data-close2]').onclick = closeModal;
  modalRoot.querySelector('[data-save]').onclick = () => {
    const fd = new FormData(document.getElementById('projectForm')); if (!fd.get('name')) return toast('Введите название проекта');
    state.projects.unshift({ id: `PRJ-${String(state.projects.length+1).padStart(3,'0')}`, name: fd.get('name'), category: fd.get('category'), size: fd.get('size') || 'Не указан', status: 'Идея', progress: 0, price: Number(fd.get('price')) || 0, pattern: ['a','b','c','d'][state.projects.length%4], colors: ['#e8dac7','#71806a','#c65f3e'], material: fd.get('material') || 'Не указан', planDays: Number(fd.get('days')) || 7, notes: fd.get('notes') || '' });
    markSaving(); closeModal(); state.view='projects'; render(); toast('Проект создан');
  };
}
function openProject(id) {
  const p = state.projects.find(x => x.id === id); if (!p) return;
  openModal(p.name, `<div class="status-hero"><div class="status-cover">${pattern(p.pattern)}</div><div><span class="badge ${statusClass(p.status)}">${p.status}</span><h3 style="font-size:26px;margin:10px 0 5px">${p.name}</h3><div class="item-meta">${p.id} · ${p.category}</div><div class="price" style="margin-top:10px">${rub(p.price)}</div></div></div><div class="detail-grid" style="margin-top:18px"><div class="detail-tile"><small>Размер</small><b>${p.size}</b></div><div class="detail-tile"><small>Материал</small><b>${p.material}</b></div><div class="detail-tile"><small>Плановый срок</small><b>${p.planDays} дней</b></div><div class="detail-tile"><small>Готовность</small><b>${p.progress}%</b></div></div><div style="margin-top:16px">${progress(p.progress)}</div><div class="detail-tile" style="margin-top:16px"><small>Палитра</small><div style="display:flex;gap:8px">${p.colors.map(c=>`<i style="width:34px;height:34px;border-radius:50%;background:${c};border:3px solid #fff;box-shadow:0 2px 7px #0002"></i>`).join('')}</div></div><div class="detail-tile" style="margin-top:12px"><small>Заметки</small>${p.notes || 'Нет заметок'}</div>`, `<button class="secondary-btn" data-launch>Запустить в производство</button><button class="primary-btn" data-edit>Изменить</button>`);
  modalRoot.querySelector('[data-launch]').onclick = () => { closeModal(); launchProject(id); };
  modalRoot.querySelector('[data-edit]').onclick = () => { p.status = p.status === 'Идея' ? 'Готов к запуску' : p.status; markSaving(); closeModal(); render(); toast('Карточка проекта обновлена'); };
}
function launchProject(projectId) {
  const p = state.projects.find(x=>x.id===projectId); if (!p) return;
  if (state.productions.some(x=>x.projectId===projectId)) return toast('Этот проект уже в производстве');
  state.productions.unshift({ id:`RUG-2026-${String(49+state.productions.length).padStart(4,'0')}`, projectId:p.id, name:p.name, pattern:p.pattern, progress:5, planDays:p.planDays, elapsedDays:0, cost:0, timerSeconds:0, timerRunning:false, stages:['Эскиз','Перенос','Набивка','Проклейка','Сушка','Подложка','Стрижка','Контроль качества','Упаковка'].map((name,i)=>({name,status:i===0?'active':'wait'})), notes:'', photos:0 });
  p.status='В работе'; p.progress=5; markSaving(); state.view='production'; render(); toast('Проект запущен в производство');
}
function openStartProduction() {
  const available = state.projects.filter(p => !state.productions.some(r=>r.projectId===p.id));
  openModal('Запустить ковёр', available.length ? `<div class="list">${available.map(p=>`<button class="item-row" style="width:100%;text-align:left;border:1px solid var(--line)" data-launch-id="${p.id}"><div class="thumb">${pattern(p.pattern)}</div><div><div class="item-title">${p.name}</div><div class="item-meta">${p.size} · ${p.status}</div></div><span>→</span></button>`).join('')}</div>` : '<div class="empty"><strong>Нет свободных проектов</strong>Создайте новый проект или завершите текущие.</div>');
  modalRoot.querySelectorAll('[data-launch-id]').forEach(btn=>btn.onclick=()=>{closeModal();launchProject(btn.dataset.launchId);});
}
function toggleTimer(id) {
  const p = state.productions.find(x=>x.id===id); if (!p) return;
  state.productions.forEach(x=>{ if(x.id!==id) x.timerRunning=false; });
  p.timerRunning=!p.timerRunning; markSaving(); render();
}
function nextStage(id) {
  const p = state.productions.find(x=>x.id===id); if (!p) return;
  const active = p.stages.findIndex(s=>s.status==='active');
  if (active<0) return toast('Все этапы уже завершены');
  p.stages[active].status='done';
  if (active+1<p.stages.length) p.stages[active+1].status='active';
  p.progress=Math.round(((active+1)/p.stages.length)*100);
  if (active+1===p.stages.length) {
    p.progress=100; p.timerRunning=false;
    const project=state.projects.find(x=>x.id===p.projectId); if(project){project.progress=100;project.status='Готов';}
    if(!state.products.some(x=>x.id===p.id)) state.products.unshift({id:p.id,name:p.name,pattern:p.pattern,size:project?.size||'',composition:project?.material||'',base:'Тафтинговая ткань',pile:'12 мм',care:'Сухая чистка',retail:project?.price||0,minimum:Math.round((project?.price||0)*.78),location:'Не назначено',status:'Готов к фото',channels:[],days:0});
  }
  markSaving(); render(); toast(active+1===p.stages.length?'Ковёр готов':'Этап завершён');
}
function editProductionNote(id) {
  const p=state.productions.find(x=>x.id===id); if(!p)return;
  openModal('Заметка по производству',`<div class="field"><label>Комментарий</label><textarea id="prodNote">${p.notes}</textarea></div>`,`<button class="primary-btn" data-save>Сохранить</button>`);
  modalRoot.querySelector('[data-save]').onclick=()=>{p.notes=document.getElementById('prodNote').value;markSaving();closeModal();render();toast('Заметка сохранена');};
}
function startTimerLoop() {
  timerInterval=setInterval(()=>{
    const running=state.productions.find(p=>p.timerRunning); if(!running)return;
    running.timerSeconds++;
    const el=document.querySelector(`[data-timer="${running.id}"]`); if(el)el.textContent=fmtTime(running.timerSeconds);
    if(running.timerSeconds%10===0) saveState();
  },1000);
}
function stopTimerLoop(){if(timerInterval){clearInterval(timerInterval);timerInterval=null;}}

function openNewMaterial() {
  openModal('Новый материал', `<form id="materialForm" class="form-grid"><div class="field"><label>Название</label><input name="name" required></div><div class="field"><label>Категория</label><select name="type"><option>Пряжа</option><option>Основа</option><option>Клей</option><option>Подложка</option><option>Упаковка</option></select></div><div class="field"><label>Артикул</label><input name="code"></div><div class="field"><label>Поставщик</label><input name="supplier"></div><div class="field"><label>Остаток</label><input name="stock" type="number" step="0.1"></div><div class="field"><label>Минимум</label><input name="min" type="number" step="0.1"></div><div class="field"><label>Единица</label><select name="unit"><option>г</option><option>кг</option><option>м</option><option>л</option><option>шт</option></select></div><div class="field"><label>Цена за единицу</label><input name="price" type="number" step="0.01"></div></form>`, `<button class="primary-btn" data-save>Добавить</button>`);
  modalRoot.querySelector('[data-save]').onclick=()=>{const fd=new FormData(document.getElementById('materialForm'));if(!fd.get('name'))return toast('Введите название');state.materials.unshift({id:`MAT-${String(state.materials.length+1).padStart(3,'0')}`,name:fd.get('name'),type:fd.get('type'),code:fd.get('code')||'—',stock:Number(fd.get('stock'))||0,min:Number(fd.get('min'))||0,unit:fd.get('unit'),pricePerUnit:Number(fd.get('price'))||0,supplier:fd.get('supplier')||'Не указан',tone:'cream'});markSaving();closeModal();render();toast('Материал добавлен');};
}
function adjustMaterial(id) {
  const m=state.materials.find(x=>x.id===id);if(!m)return;
  openModal(m.name,`<div class="detail-grid"><div class="detail-tile"><small>Текущий остаток</small><b>${num(m.stock,1)} ${m.unit}</b></div><div class="detail-tile"><small>Минимум</small><b>${num(m.min,1)} ${m.unit}</b></div></div><div class="field" style="margin-top:15px"><label>Изменение (+ поступление, − расход)</label><input id="materialDelta" type="number" step="0.1" value="0"></div>`,`<button class="primary-btn" data-save>Применить</button>`);
  modalRoot.querySelector('[data-save]').onclick=()=>{m.stock=Math.max(0,m.stock+Number(document.getElementById('materialDelta').value||0));markSaving();closeModal();render();toast('Остаток обновлён');};
}

function openNewOrder() {
  openModal('Новый заказ', `<form id="orderForm" class="form-grid"><div class="field"><label>Клиент</label><input name="client" required></div><div class="field"><label>Телефон</label><input name="phone"></div><div class="field"><label>Город</label><input name="city"></div><div class="field"><label>Источник</label><select name="source"><option>Авито</option><option>VK</option><option>Telegram</option><option>Рекомендация</option></select></div><div class="field"><label>Проект / название</label><input name="project" required></div><div class="field"><label>Размер</label><input name="size"></div><div class="field"><label>Стоимость</label><input name="amount" type="number"></div><div class="field"><label>Предоплата</label><input name="prepaid" type="number"></div><div class="field full"><label>Пожелания</label><textarea name="note"></textarea></div></form>`, `<button class="primary-btn" data-save>Создать заказ</button>`);
  modalRoot.querySelector('[data-save]').onclick=()=>{const fd=new FormData(document.getElementById('orderForm'));if(!fd.get('client')||!fd.get('project'))return toast('Заполните клиента и проект');const number=59+state.orders.length;const id=`ORD-2026-${number}`;state.orders.unshift({id,clientId:`CL-${String(state.orders.length+1).padStart(3,'0')}`,client:fd.get('client'),phone:fd.get('phone')||'',email:'',city:fd.get('city')||'',project:fd.get('project'),pattern:['a','b','c','d'][state.orders.length%4],size:fd.get('size')||'Не указан',material:'Не указан',amount:Number(fd.get('amount'))||0,prepaid:Number(fd.get('prepaid'))||0,status:'Новый',deadline:'—',progress:0,source:fd.get('source'),note:fd.get('note')||'',history:[]});state.selectedOrderId=id;markSaving();closeModal();state.view='orders';render();toast('Заказ создан');};
}
function changeOrderStatus(id) {
  const o=state.orders.find(x=>x.id===id);if(!o)return;
  const statuses=['Новый','Расчёт','Предоплата','В работе','Готов','Отправлен'];
  openModal('Статус заказа',`<div class="chips">${statuses.map(s=>`<button class="chip ${s===o.status?'active':''}" data-status="${s}">${s}</button>`).join('')}</div>`);
  modalRoot.querySelectorAll('[data-status]').forEach(btn=>btn.onclick=()=>{o.status=btn.dataset.status;if(o.status==='Готов')o.progress=100;markSaving();closeModal();render();toast('Статус обновлён');});
}
function openMessageTemplate(id) {
  const o=state.orders.find(x=>x.id===id);if(!o)return;
  const text=`Здравствуйте, ${o.client.split(' ')[0]}! Ваш заказ ${o.id} сейчас на этапе «${o.status}». Готовность — ${o.progress}%. Ориентировочный срок: ${o.deadline}. Прикрепляю актуальный статус VORS Studio.`;
  openModal('Шаблон сообщения',`<div class="field"><label>Текст для клиента</label><textarea id="messageText">${text}</textarea></div>`,`<button class="secondary-btn" data-copy>Скопировать</button><button class="primary-btn" data-status>Открыть статус</button>`);
  modalRoot.querySelector('[data-copy]').onclick=async()=>{try{await navigator.clipboard.writeText(document.getElementById('messageText').value);toast('Текст скопирован');}catch{toast('Выделите текст и скопируйте вручную');}};
  modalRoot.querySelector('[data-status]').onclick=()=>{closeModal();openClientStatus(id);};
}
function openClientStatus(id) {
  const o=state.orders.find(x=>x.id===id);if(!o)return;
  const names=['Эскиз','Перенос','Набивка','Проклейка','Стрижка','Готово'];
  const activeIndex=Math.min(names.length-1,Math.floor(o.progress/20));
  openModal('Статус заказа',`<div class="client-status" id="clientStatusCard"><div class="client-status-head"><div class="brand-lockup"><div class="brand-mark"><span class="brand-v">V</span><span class="brand-thread"></span></div><div><strong>VORS</strong><span>Studio</span></div></div><span class="badge ${statusClass(o.status)}">${o.status}</span></div><div class="status-hero"><div class="status-cover">${pattern(o.pattern)}</div><div><div class="item-meta">Заказ ${o.id}</div><h3 style="margin:6px 0;font-size:24px">Ковёр «${o.project}»</h3><div>${o.client}</div><div class="item-meta" style="margin-top:6px">${o.size} · срок ${o.deadline}</div></div></div><div class="status-progress"><div class="card-head"><h3>Готовность заказа</h3><b>${o.progress}%</b></div>${progress(o.progress)}</div><div class="status-stages">${names.map((n,i)=>`<div class="status-stage ${i<activeIndex?'done':i===activeIndex?'active':''}"><b>${i<activeIndex?'✓':i+1}</b>${n}</div>`).join('')}</div><div class="detail-tile" style="margin-top:16px"><small>Последнее обновление</small><b>${o.status}</b><div class="item-meta" style="margin-top:5px">Работа идёт по плану. Следующее обновление появится после завершения текущего этапа.</div></div></div>`, `<button class="secondary-btn" data-print>Печать / скрин</button><button class="primary-btn" data-copy>Скопировать сообщение</button>`);
  modalRoot.querySelector('[data-print]').onclick=()=>window.print();
  modalRoot.querySelector('[data-copy]').onclick=async()=>{const text=`VORS Studio · ${o.id}\nКовёр «${o.project}»\nГотовность: ${o.progress}%\nСтатус: ${o.status}\nСрок: ${o.deadline}`;try{await navigator.clipboard.writeText(text);toast('Статус скопирован');}catch{toast('Скопируйте статус вручную');}};
}

function openProduct(id) {
  const p=state.products.find(x=>x.id===id);if(!p)return;
  openModal(`Ковёр «${p.name}»`,`<div class="status-hero"><div class="status-cover">${pattern(p.pattern)}</div><div><span class="badge ${statusClass(p.status)}">${p.status}</span><h3 style="font-size:24px;margin:8px 0">${p.name}</h3><div class="item-meta">${p.id} · ${p.size}</div></div></div><div class="detail-grid" style="margin-top:18px"><div class="detail-tile"><small>Состав</small><b>${p.composition}</b></div><div class="detail-tile"><small>Высота ворса</small><b>${p.pile}</b></div><div class="detail-tile"><small>Розничная цена</small><b>${rub(p.retail)}</b></div><div class="detail-tile"><small>Минимальная цена</small><b>${rub(p.minimum)}</b></div></div><div class="detail-tile" style="margin-top:12px"><small>Хранение</small><b>${p.location}</b></div><div class="detail-tile" style="margin-top:12px"><small>Уход</small>${p.care}</div><div class="detail-tile" style="margin-top:12px"><small>Площадки</small>${p.channels.length?p.channels.join(', '):'Пока не опубликован'}</div>`,`<button class="secondary-btn" data-publish>Публикации</button><button class="primary-btn" data-sold>Отметить проданным</button>`);
  modalRoot.querySelector('[data-publish]').onclick=()=>{closeModal();openPublish(id);};
  modalRoot.querySelector('[data-sold]').onclick=()=>{p.status='Продан';markSaving();closeModal();render();toast('Изделие отмечено проданным');};
}
function openPublish(id) {
  const p=state.products.find(x=>x.id===id);if(!p)return;
  openModal('Публикации',`<div class="field"><label>Название объявления</label><input id="pubTitle" value="Дизайнерский тафтинговый ковёр «${p.name}», ${p.size}"></div><div class="field" style="margin-top:12px"><label>Описание</label><textarea id="pubText">Авторский ковёр VORS Studio ручной работы. Размер ${p.size}, ${p.composition}, ворс ${p.pile}. Подойдёт для спальни, гостиной или как текстильное панно. Уход: ${p.care}. Цена ${rub(p.retail)}.</textarea></div><div class="chips" style="margin-top:14px">${['Авито','VK','Telegram'].map(c=>`<button class="chip ${p.channels.includes(c)?'active':''}" data-channel="${c}">${c}</button>`).join('')}</div>`,`<button class="secondary-btn" data-copy>Скопировать текст</button><button class="primary-btn" data-save>Сохранить площадки</button>`);
  modalRoot.querySelectorAll('[data-channel]').forEach(btn=>btn.onclick=()=>btn.classList.toggle('active'));
  modalRoot.querySelector('[data-copy]').onclick=async()=>{try{await navigator.clipboard.writeText(document.getElementById('pubTitle').value+'\n\n'+document.getElementById('pubText').value);toast('Объявление скопировано');}catch{toast('Скопируйте текст вручную');}};
  modalRoot.querySelector('[data-save]').onclick=()=>{p.channels=[...modalRoot.querySelectorAll('[data-channel].active')].map(b=>b.dataset.channel);p.status=p.channels.length?'Опубликован':p.status;markSaving();closeModal();render();toast('Площадки сохранены');};
}
function openNewProduct(){toast('Готовое изделие создаётся автоматически после завершения производства');}
function openExpense(){openModal('Новый расход',`<form id="expenseForm" class="form-grid"><div class="field"><label>Категория</label><select><option>Материалы</option><option>Реклама</option><option>Упаковка</option><option>Доставка</option><option>Прочее</option></select></div><div class="field"><label>Сумма</label><input id="expenseAmount" type="number"></div><div class="field full"><label>Комментарий</label><textarea></textarea></div></form>`,`<button class="primary-btn" data-save>Сохранить</button>`);modalRoot.querySelector('[data-save]').onclick=()=>{closeModal();toast('Расход сохранён в журнале демо-версии');};}
function shipOrder(id){const s=state.shipments.find(x=>x.orderId===id);if(!s)return;openModal('Подтвердить отправку',`<div class="field"><label>Трек-номер</label><input id="tracking" placeholder="Введите номер отправления"></div>`,`<button class="primary-btn" data-save>Подтвердить</button>`);modalRoot.querySelector('[data-save]').onclick=()=>{s.tracking=document.getElementById('tracking').value;s.status='Отправлен';const o=state.orders.find(x=>x.id===id);if(o)o.status='Отправлен';state.shipments=state.shipments.filter(x=>x.orderId!==id);markSaving();closeModal();render();toast('Заказ отмечен отправленным');};}
function openRoleModal(){const roles=[['owner','Владелец','Полный доступ'],['manager','Менеджер','Клиенты, заказы, публикации'],['family','Семейный режим','Только упаковка и отправка']];openModal('Режим работы',`<div class="list">${roles.map(([key,name,desc])=>`<button class="item-row" style="width:100%;text-align:left" data-role="${key}"><span style="font-size:25px">${key==='owner'?'👤':key==='manager'?'💬':'📦'}</span><div><div class="item-title">${name}</div><div class="item-meta">${desc}</div></div>${state.role===key?'<span class="badge success">Выбран</span>':'<span>→</span>'}</button>`).join('')}</div>`);modalRoot.querySelectorAll('[data-role]').forEach(btn=>btn.onclick=()=>{state.role=btn.dataset.role;state.view=state.role==='family'?'family':'today';markSaving();closeModal();render();toast('Режим изменён');});}

function setupGlobalEvents() {
  document.querySelectorAll('.nav-item[data-view], .mobile-nav[data-view]').forEach(btn=>btn.addEventListener('click',()=>navigate(btn.dataset.view)));
  document.getElementById('roleButton').addEventListener('click',openRoleModal);
  document.getElementById('resetDemo').addEventListener('click',()=>{if(confirm('Вернуть исходные демо-данные?')){state=clone(DEFAULT_STATE);saveState();render();toast('Демо-данные восстановлены');}});
  window.addEventListener('beforeunload',saveState);
  window.addEventListener('online',()=>toast('Соединение восстановлено'));
  window.addEventListener('offline',()=>toast('Офлайн-режим: данные сохраняются на устройстве'));
}

function registerServiceWorker(){if('serviceWorker'in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(console.warn));}}

setupGlobalEvents();
render();
registerServiceWorker();
setTimeout(()=>document.getElementById('splash')?.classList.add('hidden'),650);

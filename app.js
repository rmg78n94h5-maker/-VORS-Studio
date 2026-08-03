const STORAGE_KEY = 'vors-studio-0.1.1';

const MATERIAL_CATALOG_SEED = [
  { id: 'CAT-PEH-UDV-01', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '01', colorName: 'Белый', internalCode: 'PEH-UDV-01', supplier: 'Кудель', supplierSku: '87686', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#f3f0e7', availability: 'Не проверено', checkedAt: '03.08.2026' },
  { id: 'CAT-PEH-UDV-02', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '02', colorName: 'Чёрный', internalCode: 'PEH-UDV-02', supplier: 'Кудель', supplierSku: '87687', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#202226', availability: 'Не проверено', checkedAt: '03.08.2026' },
  { id: 'CAT-PEH-UDV-04', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '04', colorName: 'Тёмно-синий', internalCode: 'PEH-UDV-04', supplier: 'Кудель', supplierSku: '90239', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#1d2b49', availability: 'Не проверено', checkedAt: '03.08.2026' },
  { id: 'CAT-PEH-UDV-06', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '06', colorName: 'Красный', internalCode: 'PEH-UDV-06', supplier: 'Кудель', supplierSku: '', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#b52f35', availability: 'Не проверено', checkedAt: '03.08.2026' },
  { id: 'CAT-PEH-UDV-08', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '08', colorName: 'Светло-серый', internalCode: 'PEH-UDV-08', supplier: 'Кудель', supplierSku: '277435', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#d4d3d0', availability: 'Не проверено', checkedAt: '03.08.2026' },
  { id: 'CAT-PEH-UDV-22', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '22', colorName: 'Сирень', internalCode: 'PEH-UDV-22', supplier: 'Кудель', supplierSku: '', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#a58aaa', availability: 'Не проверено', checkedAt: '03.08.2026' },
  { id: 'CAT-PEH-UDV-45', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '45', colorName: 'Тёмная бирюза', internalCode: 'PEH-UDV-45', supplier: 'Кудель', supplierSku: '', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#176c72', availability: 'Не проверено', checkedAt: '03.08.2026' },
  { id: 'CAT-PEH-UDV-59', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '59', colorName: 'Мышонок', internalCode: 'PEH-UDV-59', supplier: 'Кудель', supplierSku: '', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#a7a39a', availability: 'Не проверено', checkedAt: '03.08.2026' },
  { id: 'CAT-PEH-UDV-97', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '97', colorName: 'Апельсин', internalCode: 'PEH-UDV-97', supplier: 'Кудель', supplierSku: '', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#e87925', availability: 'Не проверено', checkedAt: '03.08.2026' },
  { id: 'CAT-PEH-UDV-98', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '98', colorName: 'Лесной колокольчик', internalCode: 'PEH-UDV-98', supplier: 'Кудель', supplierSku: '', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#5f79a7', availability: 'Не проверено', checkedAt: '03.08.2026' },
  { id: 'CAT-PEH-UDV-99', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '99', colorName: 'Абрикос', internalCode: 'PEH-UDV-99', supplier: 'Кудель', supplierSku: '', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#e9a46f', availability: 'Не проверено', checkedAt: '03.08.2026' },
  { id: 'CAT-PEH-UDV-119', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '119', colorName: 'Горох', internalCode: 'PEH-UDV-119', supplier: 'Кудель', supplierSku: '', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#9aae4a', availability: 'Не проверено', checkedAt: '03.08.2026' },
  { id: 'CAT-PEH-UDV-165', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '165', colorName: 'Тёмно-бежевый', internalCode: 'PEH-UDV-165', supplier: 'Кудель', supplierSku: '', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#9a765e', availability: 'Не проверено', checkedAt: '03.08.2026' },
  { id: 'CAT-PEH-UDV-434', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '434', colorName: 'Зелёный', internalCode: 'PEH-UDV-434', supplier: 'Кудель', supplierSku: '', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#387447', availability: 'Не проверено', checkedAt: '03.08.2026' },
  { id: 'CAT-PEH-UDV-435', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '435', colorName: 'Антрацит', internalCode: 'PEH-UDV-435', supplier: 'Кудель', supplierSku: '', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#44474b', availability: 'Не проверено', checkedAt: '03.08.2026' },
  { id: 'CAT-PEH-UDV-480', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '480', colorName: 'Яркая зелень', internalCode: 'PEH-UDV-480', supplier: 'Кудель', supplierSku: '', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#58a847', availability: 'Не проверено', checkedAt: '03.08.2026' },
  { id: 'CAT-PEH-UDV-494', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '494', colorName: 'Светлый хаки', internalCode: 'PEH-UDV-494', supplier: 'Кудель', supplierSku: '', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#9a9a70', availability: 'Не проверено', checkedAt: '03.08.2026' },
  { id: 'CAT-PEH-UDV-573', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '573', colorName: 'Тёмный изумруд', internalCode: 'PEH-UDV-573', supplier: 'Кудель', supplierSku: '', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#1d6656', availability: 'Не проверено', checkedAt: '03.08.2026' },
  { id: 'CAT-PEH-UDV-1178', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '1178', colorName: 'Светлая морская волна', internalCode: 'PEH-UDV-1178', supplier: 'Кудель', supplierSku: '', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#79b4ae', availability: 'Не проверено', checkedAt: '03.08.2026' },
  { id: 'CAT-PEH-UDV-1409', type: 'Пряжа', brand: 'Пехорка', line: 'Удачный выбор', colorCode: '1409', colorName: 'Красный терракот', internalCode: 'PEH-UDV-1409', supplier: 'Кудель', supplierSku: '277437', composition: '100% объёмный акрил', nominalWeight: 100, lengthM: 200, unit: 'г', lastSkeinPrice: 147, supplierUrl: 'https://kudel.ru/product/udachnyij-vyibor-pehorka/', swatch: '#a94e37', availability: 'Не проверено', checkedAt: '03.08.2026' }
];

const EMPTY_STATE = {
  role: 'owner',
  view: 'today',
  selectedOrderId: null,
  tasks: [],
  projects: [],
  materialView: 'stock',
  materialCatalog: MATERIAL_CATALOG_SEED,
  materials: [],
  productions: [],
  orders: [],
  products: [],
  productView: 'stock',
  finance: { transactions: [], hours: 0 },
  shipments: [],
  meta: { lastSavedAt: null }
};

let state = loadState();
let timerInterval = null;

const main = document.getElementById('mainContent');
const modalRoot = document.getElementById('modalRoot');
const toastRoot = document.getElementById('toastRoot');

function clone(value) { return JSON.parse(JSON.stringify(value)); }
function mergeCatalog(savedCatalog = []) {
  const seedIds = new Set(MATERIAL_CATALOG_SEED.map(item => item.id));
  const map = new Map(MATERIAL_CATALOG_SEED.map(item => [item.id, clone(item)]));
  savedCatalog.forEach(item => {
    const isOfficialUdachnyVybor = String(item.id || '').startsWith('CAT-PEH-UDV-');
    if (isOfficialUdachnyVybor && !seedIds.has(item.id)) return;
    map.set(item.id, { ...(map.get(item.id) || {}), ...item });
  });
  return [...map.values()];
}
function normalizeMaterial(item) {
  return {
    lots: [], movements: [], catalogId: null, brand: '', line: '', colorCode: '', colorName: '',
    internalCode: item.code || '', supplierSku: '', composition: '', nominalWeight: 0, lengthM: 0,
    supplierUrl: '', swatch: '', location: '', ...item
  };
}

function todayISO() { return new Date().toISOString().slice(0, 10); }
function normalizeOrder(item) {
  const createdAt = item.createdAt || todayISO();
  let payments = Array.isArray(item.payments) ? item.payments.map(payment => ({
    id: payment.id || `PAY-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    type: payment.type || 'Оплата', amount: Number(payment.amount) || 0,
    date: payment.date || createdAt, note: payment.note || ''
  })) : [];
  if (!payments.length && Number(item.prepaid) > 0) {
    payments = [{ id: `PAY-${item.id || Date.now()}-PRE`, type: 'Предоплата', amount: Number(item.prepaid), date: createdAt, note: 'Перенесено из карточки заказа' }];
  }
  return { coverImage: '', projectId: '', history: [], payments, createdAt, completedAt: null, shippedAt: null, shipmentStatus: '', packageNumber: '', storageLocation: '', tracking: '', ...item, payments };
}
function normalizeProduct(item) {
  const archived = ['Продан', 'Отправлен', 'Завершён'].includes(item.status);
  return {
    coverImage: '', projectId: '', orderId: '', productionId: item.id || '', cost: 0, salePrice: 0,
    inventoryStatus: archived ? 'archive' : 'stock', createdAt: todayISO(), completedAt: null, shippedAt: null,
    channels: [], days: 0, ...item,
    inventoryStatus: item.inventoryStatus || (archived ? 'archive' : 'stock')
  };
}
function normalizeFinance(finance = {}) {
  return { transactions: Array.isArray(finance.transactions) ? finance.transactions : [], hours: Number(finance.hours) || 0 };
}
function reconcileLoadedState(merged) {
  merged.productView = merged.productView || 'stock';
  merged.finance = normalizeFinance(merged.finance);
  merged.orders = (merged.orders || []).map(normalizeOrder);
  merged.products = (merged.products || []).map(normalizeProduct);
  merged.productions = (merged.productions || []).map(item => ({ coverImage: '', materialCost: 0, extraCost: 0, completedAt: null, handoffStatus: '', ...item, cost: Number(item.cost) || 0 }));
  merged.shipments = (merged.shipments || []).map(item => ({ status: 'К отправке', package: '', location: '', tracking: '', createdAt: todayISO(), ...item }));

  merged.productions.filter(item => Number(item.progress) >= 100).forEach(production => {
    const project = merged.projects.find(entry => entry.id === production.projectId) || merged.projects.find(entry => entry.name === production.name);
    const order = merged.orders.find(entry => entry.projectId === production.projectId) || merged.orders.find(entry => entry.project === production.name);
    let product = merged.products.find(entry => entry.productionId === production.id || entry.id === production.id || (entry.projectId && entry.projectId === production.projectId));
    if (!product) {
      product = normalizeProduct({
        id: production.id, productionId: production.id, projectId: production.projectId || project?.id || '', orderId: order?.id || '',
        name: production.name, pattern: production.pattern, coverImage: production.coverImage || project?.coverImage || '',
        size: project?.size || order?.size || '', composition: project?.material || order?.material || '', base: 'Тафтинговая ткань', pile: '12 мм',
        care: 'Сухая чистка', retail: project?.price || order?.amount || 0, minimum: Math.round((project?.price || order?.amount || 0) * .78),
        location: 'Не назначено', status: 'Готов к фото', cost: Number(production.cost) || 0, createdAt: production.completedAt || todayISO()
      });
      merged.products.unshift(product);
    } else {
      product.productionId = production.id;
      product.projectId = product.projectId || production.projectId || project?.id || '';
      product.orderId = product.orderId || order?.id || '';
      product.cost = Math.max(Number(product.cost) || 0, Number(production.cost) || 0);
    }
  });

  merged.orders.filter(order => order.status === 'Отправлен').forEach(order => {
    const project = merged.projects.find(entry => entry.id === order.projectId) || merged.projects.find(entry => entry.name === order.project);
    const production = merged.productions.find(entry => entry.projectId === order.projectId) || merged.productions.find(entry => entry.name === order.project);
    let product = merged.products.find(entry => entry.orderId === order.id || (order.projectId && entry.projectId === order.projectId) || entry.productionId === production?.id);
    if (!product) {
      product = normalizeProduct({
        id: production?.id || `RUG-${order.id}`, productionId: production?.id || '', projectId: order.projectId || project?.id || '', orderId: order.id,
        name: order.project, coverImage: order.coverImage || project?.coverImage || '', pattern: order.pattern || project?.pattern || null,
        size: order.size || project?.size || '', composition: order.material || project?.material || '', base: 'Тафтинговая ткань', pile: '12 мм', care: 'Сухая чистка',
        retail: order.amount || project?.price || 0, minimum: Math.round((order.amount || project?.price || 0) * .78), location: 'Отправлено',
        status: 'Отправлен', inventoryStatus: 'archive', salePrice: order.amount || 0, cost: Number(production?.cost) || 0,
        completedAt: order.shippedAt || todayISO(), shippedAt: order.shippedAt || todayISO()
      });
      merged.products.unshift(product);
    }
    product.orderId = order.id;
    product.inventoryStatus = 'archive';
    product.status = 'Отправлен';
    product.location = 'Отправлено клиенту';
    product.salePrice = Number(order.amount) || Number(product.retail) || 0;
    product.cost = Math.max(Number(product.cost) || 0, Number(production?.cost) || 0);
    product.shippedAt = order.shippedAt || product.shippedAt || todayISO();
    product.completedAt = product.completedAt || product.shippedAt;
    order.shippedAt = order.shippedAt || product.shippedAt;
    order.completedAt = order.completedAt || product.shippedAt;
    if (project) { project.status = 'Завершён'; project.progress = 100; project.completedAt = project.completedAt || product.shippedAt; }
  });
  return merged;
}
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : {};
    const merged = { ...clone(EMPTY_STATE), ...parsed };
    merged.materialCatalog = mergeCatalog(parsed.materialCatalog || []);
    merged.materials = (parsed.materials || []).map(normalizeMaterial);
    merged.projects = (parsed.projects || []).map(project => ({ coverImage: '', pattern: null, completedAt: null, ...project }));
    merged.meta = { lastSavedAt: null, ...(parsed.meta || {}) };
    return reconcileLoadedState(merged);
  } catch (error) {
    console.warn('Не удалось загрузить данные', error);
    return clone(EMPTY_STATE);
  }
}
function setSyncStatus(status = 'saved') {
  const pill = document.getElementById('syncPill');
  if (!pill) return;
  const states = {
    saved: { text: 'Сохранено локально', className: 'is-saved', title: 'Все изменения сохранены на этом устройстве' },
    saving: { text: 'Сохранение…', className: 'is-saving', title: 'Изменения сохраняются на устройстве' },
    offline: { text: 'Офлайн · сохранено', className: 'is-offline', title: 'Интернета нет. Данные сохранены на этом устройстве' },
    error: { text: 'Ошибка хранения', className: 'is-error', title: 'Не удалось сохранить данные на устройстве' }
  };
  const config = states[status] || states.saved;
  pill.classList.remove('is-saved', 'is-saving', 'is-offline', 'is-error');
  pill.classList.add(config.className);
  pill.querySelector('.sync-text').textContent = config.text;
  pill.title = config.title;
  pill.setAttribute('aria-label', config.title);
}
function saveState() {
  try {
    state.meta = { ...(state.meta || {}), lastSavedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    setSyncStatus(navigator.onLine ? 'saved' : 'offline');
  } catch (error) {
    console.error('Не удалось сохранить данные', error);
    setSyncStatus('error');
    toast('Не удалось сохранить: возможно, память устройства заполнена');
  }
}
function markSaving() {
  setSyncStatus('saving');
  clearTimeout(markSaving._t);
  markSaving._t = setTimeout(saveState, 220);
}
function openSyncInfo() {
  const online = navigator.onLine;
  const savedAt = state.meta?.lastSavedAt ? new Date(state.meta.lastSavedAt).toLocaleString('ru-RU') : 'ещё не сохранялось';
  openModal('Хранение данных', `<div class="sync-info"><div class="sync-state-row"><span class="sync-big-dot ${online ? 'online' : 'offline'}"></span><div><b>${online ? 'Устройство в сети' : 'Офлайн-режим'}</b><div class="item-meta">Последнее сохранение: ${savedAt}</div></div></div><div class="detail-tile" style="margin-top:14px"><small>Как это работает сейчас</small><div>VORS Studio сохраняет данные <b>локально на этом устройстве</b>. Зелёный индикатор означает, что изменения записаны. Серый — интернет недоступен, но локальная работа продолжается. Оранжевый — идёт сохранение. Красный — возникла ошибка.</div></div><div class="detail-tile" style="margin-top:12px"><small>Важно</small><div>Это пока не облачная синхронизация между телефонами. Аккаунты и общую базу подключим отдельным этапом.</div></div></div>`);
}

function rub(value) {
  return new Intl.NumberFormat('ru-RU').format(Math.round(value)) + ' ₽';
}
function num(value, digits = 0) {
  return new Intl.NumberFormat('ru-RU', { maximumFractionDigits: digits }).format(value);
}
function esc(value = '') {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}
function statusClass(status) {
  if (['Готов','Опубликован','Отправлен','Оплачен'].includes(status)) return 'success';
  if (['К отправке','На складе'].includes(status)) return 'blue';
  if (['В работе','Предоплата'].includes(status)) return 'clay';
  if (['Расчёт','Идея','Готов к фото'].includes(status)) return 'warn';
  if (['Резерв'].includes(status)) return 'blue';
  return '';
}
function pattern(name) { return `<div class="pattern pattern-${name || 'a'}"></div>`; }
function visual(entity, alt = 'Изображение проекта') {
  if (entity?.coverImage && String(entity.coverImage).startsWith('data:image/')) return `<img class="visual-image" src="${entity.coverImage}" alt="${alt}">`;
  if (entity?.pattern) return pattern(entity.pattern);
  return `<div class="visual-placeholder"><span>＋</span><small>Изображение не загружено</small></div>`;
}
function projectForOrder(order) {
  return state.projects.find(project => project.id === order?.projectId) || state.projects.find(project => project.name === order?.project);
}
function visualForOrder(order) {
  const project = projectForOrder(order);
  return visual({ coverImage: order?.coverImage || project?.coverImage || '', pattern: order?.pattern || project?.pattern }, `Проект ${order?.project || ''}`);
}
function visualForProduction(item) {
  const project = state.projects.find(project => project.id === item?.projectId);
  return visual({ coverImage: item?.coverImage || project?.coverImage || '', pattern: item?.pattern || project?.pattern }, `Проект ${item?.name || ''}`);
}
async function compressImage(file, maxSide = 1100, quality = 0.76) {
  if (!file) return '';
  if (!file.type.startsWith('image/')) throw new Error('Выберите изображение');
  const source = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Не удалось прочитать файл'));
    reader.readAsDataURL(file);
  });
  const img = await new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Не удалось обработать изображение'));
    image.src = source;
  });
  const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(img.width * scale));
  canvas.height = Math.max(1, Math.round(img.height * scale));
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL('image/jpeg', quality);
}
function materialCatalogLabel(item) {
  const supplierCode = item.supplierSku ? ` · Кудель ${item.supplierSku}` : '';
  return `${item.brand} · ${item.line} · ${item.colorCode} ${item.colorName}${supplierCode}`;
}
function materialSearchText(item) {
  return [item.brand, item.line, item.colorCode, item.colorName, item.internalCode, item.supplier, item.supplierSku, item.composition].filter(Boolean).join(' ').toLowerCase();
}
function materialName(item) { return `${item.brand} «${item.line}» · ${item.colorCode} ${item.colorName}`; }
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

function orderPaid(order) { return (order?.payments || []).reduce((sum, payment) => sum + (Number(payment.amount) || 0), 0); }
function orderPrepaid(order) { return (order?.payments || []).filter(payment => payment.type === 'Предоплата').reduce((sum, payment) => sum + (Number(payment.amount) || 0), 0); }
function productForOrder(order) {
  const production = state.productions.find(item => item.projectId === order?.projectId) || state.productions.find(item => item.name === order?.project);
  return state.products.find(item => item.orderId === order?.id || (order?.projectId && item.projectId === order.projectId) || item.productionId === production?.id);
}
function productionForOrder(order) {
  return state.productions.find(item => item.projectId === order?.projectId) || state.productions.find(item => item.name === order?.project);
}
function transactionsLedger() {
  const entries = [];
  state.materials.forEach(material => (material.lots || []).forEach(lot => {
    const amount = Number(lot.purchasePrice) || 0;
    if (amount > 0) entries.push({ id: `PUR-${material.id}-${lot.id}`, kind: 'expense', category: 'Материалы', amount, date: lot.date || todayISO(), title: material.name || 'Покупка материала', note: lot.batch || '', source: 'Склад' });
  }));
  (state.finance?.transactions || []).forEach(item => entries.push({ kind: 'expense', category: 'Прочее', date: todayISO(), ...item, amount: Number(item.amount) || 0 }));
  state.orders.forEach(order => (order.payments || []).forEach(payment => {
    const amount = Number(payment.amount) || 0;
    if (amount) entries.push({ id: payment.id, kind: amount >= 0 ? 'income' : 'expense', category: payment.type || 'Оплата', amount: Math.abs(amount), date: payment.date || order.createdAt || todayISO(), title: `${order.id} · ${order.project}`, note: order.client, source: order.source || 'Заказ', orderId: order.id });
  }));
  return entries.sort((a, b) => `${b.date || ''}${b.id || ''}`.localeCompare(`${a.date || ''}${a.id || ''}`));
}
function financeSummary() {
  const ledger = transactionsLedger();
  const income = ledger.filter(item => item.kind === 'income').reduce((sum, item) => sum + item.amount, 0);
  const expenses = ledger.filter(item => item.kind === 'expense').reduce((sum, item) => sum + item.amount, 0);
  const prepayments = ledger.filter(item => item.kind === 'income' && item.category === 'Предоплата').reduce((sum, item) => sum + item.amount, 0);
  const completedOrders = state.orders.filter(order => order.status === 'Отправлен' || order.completedAt);
  const sales = completedOrders.map(order => {
    const product = productForOrder(order);
    const production = productionForOrder(order);
    const sale = Number(order.amount) || Number(product?.salePrice) || 0;
    const paid = orderPaid(order);
    const cost = Number(product?.cost) || Number(production?.cost) || 0;
    return { order, product, sale, paid, cost, margin: sale - cost, marginPct: sale ? ((sale - cost) / sale) * 100 : 0 };
  });
  const realizedRevenue = sales.reduce((sum, item) => sum + item.sale, 0);
  const cogs = sales.reduce((sum, item) => sum + item.cost, 0);
  const grossProfit = realizedRevenue - cogs;
  const materialStockCost = state.materials.reduce((sum, item) => sum + (Number(item.stock) || 0) * (Number(item.pricePerUnit) || 0), 0);
  const productStock = state.products.filter(item => item.inventoryStatus !== 'archive');
  const productStockCost = productStock.reduce((sum, item) => sum + (Number(item.cost) || 0), 0);
  const productStockRetail = productStock.reduce((sum, item) => sum + (Number(item.retail) || 0), 0);
  const hours = Math.max(Number(state.finance?.hours) || 0, state.productions.reduce((sum, item) => sum + (Number(item.timerSeconds) || 0) / 3600, 0));
  return { ledger, income, expenses, prepayments, cashFlow: income - expenses, sales, realizedRevenue, cogs, grossProfit, materialStockCost, productStockCost, productStockRetail, hours };
}
function groupLedgerByMonth(ledger) {
  const groups = new Map();
  ledger.forEach(item => {
    const date = new Date(`${item.date || todayISO()}T00:00:00`);
    const key = Number.isNaN(date.getTime()) ? 'Без даты' : date.toLocaleDateString('ru-RU', { month: 'short', year: '2-digit' });
    const group = groups.get(key) || { m: key, revenue: 0, expenses: 0, profit: 0 };
    if (item.kind === 'income') group.revenue += item.amount; else group.expenses += item.amount;
    group.profit = group.revenue - group.expenses;
    groups.set(key, group);
  });
  return [...groups.values()].reverse().slice(-6).length ? [...groups.values()].reverse().slice(-6) : [{ m: 'Старт', revenue: 0, expenses: 0, profit: 0 }];
}
function ensureProductForOrder(order) {
  const project = state.projects.find(item => item.id === order.projectId) || state.projects.find(item => item.name === order.project);
  const production = productionForOrder(order);
  let product = productForOrder(order);
  if (!product) {
    product = normalizeProduct({
      id: production?.id || `RUG-${order.id}`, productionId: production?.id || '', projectId: order.projectId || project?.id || '', orderId: order.id,
      name: order.project, pattern: order.pattern || project?.pattern || null, coverImage: order.coverImage || project?.coverImage || production?.coverImage || '',
      size: order.size || project?.size || '', composition: order.material || project?.material || '', base: 'Тафтинговая ткань', pile: '12 мм', care: 'Сухая чистка',
      retail: order.amount || project?.price || 0, minimum: Math.round((order.amount || project?.price || 0) * .78), location: 'Не назначено',
      status: order.progress >= 100 ? 'Готов к фото' : 'В работе', cost: Number(production?.cost) || 0, createdAt: production?.completedAt || todayISO()
    });
    state.products.unshift(product);
  }
  product.orderId = order.id;
  product.projectId = product.projectId || order.projectId || project?.id || '';
  product.productionId = product.productionId || production?.id || '';
  product.cost = Math.max(Number(product.cost) || 0, Number(production?.cost) || 0);
  return product;
}

function shipmentForOrder(orderId) { return state.shipments.find(item => item.orderId === orderId); }
function linkedRecordsForOrder(order) {
  const project = state.projects.find(item => item.id === order?.projectId) || state.projects.find(item => item.name === order?.project);
  const production = state.productions.find(item => item.projectId === order?.projectId) || state.productions.find(item => item.name === order?.project);
  const product = state.products.find(item => item.orderId === order?.id || (order?.projectId && item.projectId === order.projectId) || item.productionId === production?.id);
  return { project, production, product };
}
function removeLinkedTestData(order) {
  const { project, production, product } = linkedRecordsForOrder(order);
  const projectId = project?.id || order?.projectId || '';
  state.orders = state.orders.filter(item => item.id !== order.id);
  state.shipments = state.shipments.filter(item => item.orderId !== order.id);
  if (product) state.products = state.products.filter(item => item.id !== product.id);
  if (production) state.productions = state.productions.filter(item => item.id !== production.id);
  if (project) state.projects = state.projects.filter(item => item.id !== project.id);
  if (projectId) state.finance.transactions = (state.finance.transactions || []).filter(item => item.projectId !== projectId && item.orderId !== order.id);
  state.selectedOrderId = state.orders[0]?.id || null;
}
function openDeleteOrderDialog(id) {
  const order = state.orders.find(item => item.id === id); if (!order) return;
  const { project, production, product } = linkedRecordsForOrder(order);
  openModal('Удалить тестовые данные', `<div class="detail-tile"><small>Заказ</small><b>${esc(order.id)} · ${esc(order.client)}</b><div class="item-meta">${esc(order.project)}</div></div><div class="detail-tile" style="margin-top:12px"><small>Связанные записи</small><div>${project ? 'Проект · ' : ''}${production ? 'Производство · ' : ''}${product ? 'Готовое изделие' : ''}</div></div><div class="detail-tile" style="margin-top:12px"><small>Выберите действие</small><div>«Только заказ» оставит проект и производство. «Удалить весь тест» очистит всю связанную цепочку и финансовые операции по этому проекту.</div></div>`, `<button class="secondary-btn" data-only>Только заказ</button><button class="danger-btn" data-all>Удалить весь тест</button>`);
  modalRoot.querySelector('[data-only]').onclick = () => { state.orders = state.orders.filter(item => item.id !== id); state.shipments = state.shipments.filter(item => item.orderId !== id); state.selectedOrderId = state.orders[0]?.id || null; markSaving(); closeModal(); state.view='orders'; render(); toast('Заказ удалён'); };
  modalRoot.querySelector('[data-all]').onclick = () => { removeLinkedTestData(order); markSaving(); closeModal(); state.view='orders'; render(); toast('Тестовый заказ и все связанные записи удалены'); };
}
function prepareProductHandoff(productionId) {
  const production = state.productions.find(item => item.id === productionId); if (!production) return;
  const project = state.projects.find(item => item.id === production.projectId) || state.projects.find(item => item.name === production.name);
  let product = state.products.find(item => item.productionId === production.id || item.id === production.id);
  if (!product) {
    product = normalizeProduct({ id: production.id, productionId: production.id, projectId: production.projectId || '', name: production.name, pattern: production.pattern, coverImage: production.coverImage || project?.coverImage || '', size: project?.size || '', composition: project?.material || '', base: 'Тафтинговая ткань', pile: '12 мм', care: 'Сухая чистка', retail: project?.price || 0, minimum: Math.round((project?.price || 0) * .78), location: 'Не назначено', status: 'Готов', inventoryStatus: 'stock', cost: Number(production.cost)||0 });
    state.products.unshift(product);
  }
  openModal('Передать готовый ковёр на склад', `<form id="stockHandoffForm" class="form-grid"><div class="field"><label>Место хранения</label><input name="location" required value="${esc(product.location === 'Не назначено' ? '' : product.location)}" placeholder="Стеллаж 1 · Полка А"></div><div class="field"><label>Номер упаковки</label><input name="package" required value="${esc(product.packageNumber || '')}" placeholder="PK-${esc(product.id)}-01"></div><div class="field full"><div class="detail-tile"><small>Что произойдёт</small><div>Ковёр останется в разделе «Готовые изделия → На складе» и будет доступен для будущей продажи.</div></div></div></form>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-save>Передать на склад</button>`);
  modalRoot.querySelector('[data-cancel]').onclick = closeModal;
  modalRoot.querySelector('[data-save]').onclick = () => {
    const fd = new FormData(document.getElementById('stockHandoffForm'));
    if (!fd.get('location') || !fd.get('package')) return toast('Укажите место хранения и номер упаковки');
    product.location = fd.get('location'); product.packageNumber = fd.get('package'); product.status = 'Готов'; product.inventoryStatus = 'stock';
    production.handoffStatus = 'На складе';
    if (project) { project.status='Готов'; project.progress=100; }
    markSaving(); closeModal(); render(); toast('Готовый ковёр передан на склад');
  };
}
function prepareShipment(orderId) {
  const order = state.orders.find(item => item.id === orderId); if (!order) return toast('Заказ не найден');
  const { product, production } = linkedRecordsForOrder(order);
  const balance = Math.max(0, (Number(order.amount) || 0) - orderPaid(order));
  const existing = shipmentForOrder(order.id);
  openModal('Передать на склад / к отправке', `<form id="shipmentForm" class="form-grid">
    <div class="field full"><div class="detail-tile"><small>Проверка оплаты</small><b>${balance > 0 ? `Не оплачено ${rub(balance)}` : 'Заказ оплачен полностью'}</b><div class="item-meta">Получено ${rub(orderPaid(order))} из ${rub(order.amount)}</div></div></div>
    <div class="field"><label>Куда передать</label><select name="destination"><option value="shipping" ${existing?.status !== 'На складе' ? 'selected' : ''}>К отправке клиенту</option><option value="stock" ${existing?.status === 'На складе' ? 'selected' : ''}>На склад готовых изделий</option></select></div>
    <div class="field"><label>Место хранения</label><input name="location" required value="${esc(existing?.location || order.storageLocation || product?.location || '')}" placeholder="Стеллаж 2 · Полка Б"></div>
    <div class="field"><label>Номер упаковки</label><input name="package" required value="${esc(existing?.package || order.packageNumber || '')}" placeholder="PK-${esc(order.id)}-01"></div>
    <div class="field"><label>Получатель</label><input name="client" value="${esc(existing?.client || order.client || '')}"></div>
    <div class="field"><label>Телефон</label><input name="phone" value="${esc(existing?.phone || order.phone || '')}"></div>
    <div class="field full"><label>Адрес / пункт выдачи</label><textarea name="address">${esc(existing?.address || order.city || '')}</textarea></div>
    <div class="field full"><label><input type="checkbox" name="paymentChecked" ${balance <= 0 ? 'checked' : ''}> Оплата проверена${balance > 0 ? ' — понимаю, что остаётся долг' : ''}</label></div>
  </form>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-save>Передать</button>`);
  modalRoot.querySelector('[data-cancel]').onclick = closeModal;
  modalRoot.querySelector('[data-save]').onclick = () => {
    const fd = new FormData(document.getElementById('shipmentForm'));
    if (!fd.get('location') || !fd.get('package')) return toast('Укажите место хранения и номер упаковки');
    if (!fd.get('paymentChecked')) return toast('Подтвердите проверку оплаты');
    const destination = fd.get('destination');
    const shipment = existing || { id: `SHIP-${Date.now()}`, orderId: order.id, createdAt: todayISO() };
    Object.assign(shipment, { status: destination === 'stock' ? 'На складе' : 'К отправке', package: fd.get('package'), location: fd.get('location'), client: fd.get('client') || order.client, phone: fd.get('phone') || order.phone, address: fd.get('address') || order.city, tracking: shipment.tracking || '' });
    if (!existing) state.shipments.unshift(shipment);
    order.status = destination === 'stock' ? 'Готов' : 'К отправке';
    order.shipmentStatus = shipment.status; order.packageNumber = shipment.package; order.storageLocation = shipment.location;
    if (product) { product.location = shipment.location; product.packageNumber = shipment.package; product.status = destination === 'stock' ? 'Готов' : 'К отправке'; product.inventoryStatus = destination === 'stock' ? 'stock' : 'shipping'; }
    if (production) production.handoffStatus = shipment.status;
    markSaving(); closeModal(); render(); toast(destination === 'stock' ? 'Ковёр передан на склад' : 'Заказ передан к отправке');
  };
}
function finalizeOrder(order) {
  if (!order) return;
  order.status = 'Отправлен';
  order.progress = 100;
  order.shippedAt = order.shippedAt || todayISO();
  order.completedAt = order.completedAt || order.shippedAt;
  order.shipmentStatus = 'Отправлен';
  const product = ensureProductForOrder(order);
  product.inventoryStatus = 'archive';
  product.status = 'Отправлен';
  product.location = 'Отправлено клиенту';
  product.salePrice = Number(order.amount) || Number(product.retail) || 0;
  product.shippedAt = order.shippedAt;
  product.completedAt = product.completedAt || order.shippedAt;
  const project = state.projects.find(item => item.id === order.projectId) || state.projects.find(item => item.name === order.project);
  if (project) { project.status = 'Завершён'; project.progress = 100; project.completedAt = order.shippedAt; }
  const production = productionForOrder(order);
  if (production) { production.progress = 100; production.timerRunning = false; production.completedAt = production.completedAt || order.shippedAt; production.handoffStatus = 'Отправлен'; }
  state.shipments = state.shipments.filter(item => item.orderId !== order.id);
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
  const finances = financeSummary();
  const revenue = finances.income;
  const profitValue = finances.cashFlow;
  const activeProductions = state.productions.filter(item => Number(item.progress) < 100);
  const active = activeProductions.length;
  const lowItems = state.materials.filter(m => m.stock < m.min);
  const nearest = state.orders.find(order => order.status !== 'Отправлен');
  return `
    ${viewHeader('Сегодня', 'Что происходит в мастерской прямо сейчас.', `<button class="primary-btn" data-action="new-order">＋ Новый заказ</button>`)}
    <section class="kpi-grid">
      ${kpi('Выручка за месяц', rub(revenue), revenue ? 'Данные текущего периода' : 'Пока без продаж')}
      ${kpi('Прибыль', rub(profitValue), profitValue ? 'После учтённых расходов' : 'Начните с первого заказа')}
      ${kpi('В производстве', `${active} шт.`, active ? 'Откройте производство' : 'Производство пока пусто')}
      ${kpi('Низкие остатки', `${lowItems.length} поз.`, lowItems.length ? 'Нужно пополнить запас' : 'Критичных остатков нет')}
    </section>
    <section class="grid dashboard-grid">
      <div class="section-stack">
        <article class="card card-pad">
          <div class="card-head"><h2>Задачи на сегодня</h2><small>${state.tasks.filter(t => !t.done).length} осталось</small></div>
          <div class="task-list">${state.tasks.length ? state.tasks.map(t => `<div class="task ${t.done ? 'done' : ''}"><button class="task-check" data-task="${t.id}" aria-label="Отметить задачу"></button><div class="task-name">${t.title}</div><span class="task-time">${t.time}</span></div>`).join('') : '<div class="empty"><strong>Задач пока нет</strong>Добавим планирование задач в следующем обновлении.</div>'}</div>
        </article>
        <article class="card card-pad">
          <div class="card-head"><h2>Активные ковры</h2><button class="card-action" data-go="production">Все →</button></div>
          <div class="list">${activeProductions.length ? activeProductions.map(p => `<div class="item-row"><div class="thumb">${visualForProduction(p)}</div><div><div class="item-title">${p.name}</div><div class="item-meta">${p.id} · ${p.stages.find(s => s.status === 'active')?.name || 'В работе'}</div>${progress(p.progress)}</div><div class="item-side"><b>${p.progress}%</b><div class="item-meta">${p.elapsedDays}/${p.planDays} дней</div></div></div>`).join('') : '<div class="empty"><strong>Производство ещё не запущено</strong>Создайте проект и отправьте его в работу.</div>'}</div>
        </article>
      </div>
      <div class="section-stack">
        <article class="card card-pad">
          <div class="card-head"><h3>Материалы на исходе</h3><button class="card-action" data-go="materials">Склад →</button></div>
          <div class="list">${lowItems.length ? lowItems.map(m => `<div class="task"><span class="badge danger">!</span><div><div class="item-title">${m.name}</div><div class="item-meta">Минимум ${num(m.min, 1)} ${m.unit}</div></div><b>${num(m.stock, 1)} ${m.unit}</b></div>`).join('') : '<div class="empty"><strong>Критичных остатков нет</strong>Добавьте материалы и минимальные нормы.</div>'}</div>
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
          ${nearest ? `<div class="card-head"><h3>Ближайший заказ</h3><span class="badge clay">${nearest.status}</span></div><div class="item-row"><div class="thumb">${visualForOrder(nearest)}</div><div><div class="item-title">${nearest.project}</div><div class="item-meta">${nearest.client}</div></div><div class="item-side"><b>${nearest.progress}%</b></div></div><button class="secondary-btn" style="width:100%;margin-top:12px" data-action="client-status" data-id="${nearest.id}">Показать статус клиенту</button>` : '<div class="empty"><strong>Заказов пока нет</strong>Создайте первого клиента и заказ.</div>'}
        </article>
      </div>
    </section>`;
}
function renderProjects() {
  return `
    ${viewHeader('Проекты и коллекции', 'Идеи, расчёты и готовые проекты — в одном месте.', `<button class="primary-btn" data-action="new-project">＋ Новый проект</button>`)}
    <div class="toolbar"><div class="search"><input id="projectSearch" placeholder="Поиск проектов" /></div><div class="chips" id="projectChips"><button class="chip active" data-filter="Все">Все</button>${[...new Set(state.projects.map(p => p.category))].map(c => `<button class="chip" data-filter="${c}">${c}</button>`).join('')}</div></div>
    <section class="project-grid" id="projectGrid">
      ${state.projects.length ? state.projects.map(projectCard).join('') : '<article class="card empty"><strong>Проектов пока нет</strong>Создайте первый дизайн и рассчитайте его стоимость.</article>'}
    </section>`;
}
function projectCard(p) {
  return `<article class="card project-card" data-project="${p.id}" data-category="${p.category}" data-name="${p.name.toLowerCase()}">
    <div class="project-cover">${visual(p, `Проект ${p.name}`)}</div>
    <div class="project-body"><div class="project-top"><div><div class="project-name">${p.name}</div><div class="project-meta">${p.size} · ${p.category}</div></div><span class="badge ${statusClass(p.status)}">${p.status}</span></div>
    <div style="margin-top:14px">${progress(p.progress)}</div>
    <div class="project-footer"><span class="price">${rub(p.price)}</span><span class="project-meta">План: ${p.planDays} дней</span></div></div>
  </article>`;
}

function renderProduction() {
  return `
    ${viewHeader('Производство', 'Каждый этап, время, расход и качество — под контролем.', `<button class="primary-btn" data-action="start-production">＋ Запустить ковёр</button>`)}
    <section class="production-list">
      ${state.productions.length ? state.productions.map(p => `
        <article class="card production-card">
          <div class="production-card-head"><div class="thumb">${visualForProduction(p)}</div><div style="flex:1"><div class="project-top"><div><div class="project-name">${p.name}</div><div class="project-meta">${p.id}</div></div><span class="badge ${p.progress >= 100 ? statusClass(p.handoffStatus || 'Готов') : 'clay'}">${p.progress >= 100 ? (p.handoffStatus || 'Готов') : 'В работе'}</span></div><div style="margin-top:10px">${progress(p.progress)}</div></div><div class="item-side"><div class="timer" data-timer="${p.id}">${fmtTime(p.timerSeconds)}</div><div class="item-meta">активное время</div></div></div>
          <div class="grid cols-3" style="margin-top:14px"><div class="detail-tile"><small>План</small><b>${p.planDays} дней</b></div><div class="detail-tile"><small>Факт</small><b>${p.elapsedDays} дней</b></div><div class="detail-tile"><small>Себестоимость</small><b>${rub(p.cost)}</b></div></div>
          <div class="stages">${p.stages.map((s, i) => `<div class="stage ${s.status}"><span class="stage-index">${s.status === 'done' ? '✓' : i + 1}</span><b>${s.name}</b><span class="badge ${s.status === 'active' ? 'clay' : s.status === 'done' ? 'success' : ''}">${s.status === 'done' ? 'Готово' : s.status === 'active' ? 'В процессе' : 'Ожидает'}</span></div>`).join('')}</div>
          <div class="production-actions">${p.progress >= 100 ? `<button class="primary-btn" data-action="prepare-shipment-by-rug" data-id="${p.id}">${p.handoffStatus ? 'Изменить передачу' : 'Передать на склад / к отправке'}</button>` : `<button class="primary-btn" data-action="timer" data-id="${p.id}">${p.timerRunning ? 'Пауза' : 'Старт таймера'}</button><button class="secondary-btn" data-action="next-stage" data-id="${p.id}">Завершить этап</button>`}<button class="secondary-btn" data-action="production-note" data-id="${p.id}">Заметка</button><button class="secondary-btn" data-action="client-status-by-rug" data-id="${p.id}">Статус клиенту</button><button class="danger-btn" data-action="delete-production-test" data-id="${p.id}">Удалить тест</button></div>
        </article>`).join('') : '<article class="card empty"><strong>Производство пусто</strong>Сначала создайте проект, затем запустите его в работу.</article>'}
    </section>`;
}

function renderMaterials() {
  const mode = state.materialView || 'stock';
  const low = state.materials.filter(m => m.stock < m.min).length;
  const total = state.materials.reduce((sum, m) => sum + m.stock * (m.pricePerUnit || 0), 0);
  const yarnWeight = state.materials.filter(m => m.type === 'Пряжа').reduce((sum, m) => sum + m.stock, 0);
  const supplierCount = new Set(state.materialCatalog.map(item => item.supplier).filter(Boolean)).size;
  const headerActions = mode === 'stock'
    ? `<button class="secondary-btn" data-material-mode="catalog">Справочник</button><button class="primary-btn" data-action="new-material">＋ Поступление</button>`
    : `<button class="secondary-btn" data-material-mode="stock">Мой склад</button><button class="primary-btn" data-action="new-catalog-item">＋ Позиция</button>`;
  const content = mode === 'stock' ? `
    <section class="kpi-grid">
      ${kpi('Стоимость запасов', rub(total), `${state.materials.length} складских позиций`)}
      ${kpi('Ниже минимума', `${low} поз.`, low ? 'Нужно пополнить запас' : 'Критичных остатков нет')}
      ${kpi('Пряжа на складе', `${num(yarnWeight / 1000, 2)} кг`, 'Учёт ведётся по фактическому весу')}
      ${kpi('Основной поставщик', 'Кудель', `${supplierCount || 1} поставщик в справочнике`)}
    </section>
    <div class="toolbar"><div class="search"><input id="materialSearch" placeholder="Название, цвет, код или артикул Куделя" /></div><div class="chips" id="materialChips"><button class="chip active" data-filter="Все">Все</button>${[...new Set(state.materials.map(m => m.type))].map(c => `<button class="chip" data-filter="${c}">${c}</button>`).join('')}</div></div>
    <article class="card card-pad"><div class="material-table" id="materialTable">${state.materials.length ? state.materials.map(materialRow).join('') : '<div class="empty"><strong>Склад пока пуст</strong>Откройте «Поступление», выберите готовую позицию из справочника и внесите фактический вес.</div>'}</div></article>` : `
    <article class="card card-pad catalog-intro"><div><h2>Справочник материалов</h2><p>Позиции хранятся отдельно от остатков. Вы выбираете точную пряжу по бренду, линейке, цвету и коду Куделя, а затем добавляете реальные партии на склад.</p></div><div class="supplier-badge"><b>Кудель</b><span>основной поставщик</span></div></article>
    <div class="toolbar"><div class="search"><input id="materialSearch" placeholder="Пехорка, Удачный выбор, 01, 87686…" /></div><div class="chips" id="materialChips"><button class="chip active" data-filter="Все">Все</button>${[...new Set(state.materialCatalog.map(m => m.type))].map(c => `<button class="chip" data-filter="${c}">${c}</button>`).join('')}</div></div>
    <article class="card card-pad"><div class="material-table" id="materialTable">${state.materialCatalog.length ? state.materialCatalog.map(catalogRow).join('') : '<div class="empty"><strong>Справочник пуст</strong>Добавьте первую позицию поставщика.</div>'}</div></article>`;
  return `${viewHeader('Материалы и закупки', mode === 'stock' ? 'Фактические остатки, партии и движение по весу.' : 'Точная номенклатура производителя и поставщика.', headerActions)}${content}`;
}
function materialRow(m) {
  const catalog = state.materialCatalog.find(item => item.id === m.catalogId);
  const title = catalog ? materialName(catalog) : m.name;
  const details = catalog
    ? `${catalog.internalCode} · Кудель ${catalog.supplierSku || 'код не указан'}`
    : `${m.code || m.internalCode || 'Без кода'} · ${m.supplier || 'Поставщик не указан'}`;
  const search = catalog ? materialSearchText(catalog) : [m.name, m.code, m.supplier].join(' ').toLowerCase();
  const swatch = catalog?.swatch || m.swatch || '#e5d8c3';
  return `<div class="material-row" data-material="${m.id}" data-type="${m.type}" data-name="${search}">
    <div class="material-thumb" style="--swatch:${swatch}"></div>
    <div><div class="item-title">${title}</div><div class="item-meta">${details}</div><div class="item-meta">${m.lots?.filter(l => l.remainingWeight > 0).length || 0} активных партий${m.location ? ` · ${esc(m.location)}` : ''}</div></div>
    <div><div class="material-label">Остаток</div><div class="material-number ${m.stock < m.min ? 'low' : ''}">${num(m.stock,1)} ${m.unit}</div></div>
    <div><div class="material-label">Минимум</div><div class="material-number">${num(m.min,1)} ${m.unit}</div></div>
    <button class="secondary-btn" data-action="adjust-material" data-id="${m.id}">Открыть</button>
  </div>`;
}
function catalogRow(item) {
  const inventory = state.materials.find(m => m.catalogId === item.id);
  return `<div class="material-row catalog-row" data-catalog="${item.id}" data-type="${item.type}" data-name="${materialSearchText(item)}">
    <div class="material-thumb" style="--swatch:${item.swatch || '#e5d8c3'}"></div>
    <div><div class="item-title">${materialName(item)}</div><div class="item-meta">${item.composition} · ${item.nominalWeight} г / ${item.lengthM} м</div><div class="code-line"><span>${item.internalCode}</span><span>${item.supplierSku ? `Кудель ${item.supplierSku}` : 'Артикул Куделя не проверен'}</span></div></div>
    <div><div class="material-label">Цена мотка</div><div class="material-number">${item.lastSkeinPrice ? rub(item.lastSkeinPrice) : '—'}</div></div>
    <div><div class="material-label">На складе</div><div class="material-number">${inventory ? `${num(inventory.stock,1)} г` : '0 г'}</div></div>
    <div class="row-actions"><button class="secondary-btn" data-action="catalog-receipt" data-id="${item.id}">Поступление</button><button class="icon-mini" data-action="edit-catalog-item" data-id="${item.id}" aria-label="Изменить">⋯</button></div>
  </div>`;
}

function renderOrders() {
  const selected = state.orders.find(o => o.id === state.selectedOrderId) || state.orders[0];
  if (!selected) return `
    ${viewHeader('Клиенты и заказы', 'Покупатели, оплаты, сроки и история общения.', `<button class="primary-btn" data-action="new-order">＋ Новый заказ</button>`)}
    <article class="card empty"><strong>Клиентов и заказов пока нет</strong>Создайте первый заказ — карточка клиента появится автоматически.</article>`;
  return `
    ${viewHeader('Клиенты и заказы', 'Покупатели, оплаты, сроки и история общения.', `<button class="primary-btn" data-action="new-order">＋ Новый заказ</button>`)}
    <div class="toolbar"><div class="search"><input id="orderSearch" placeholder="Поиск по клиентам и заказам" /></div><div class="chips"><button class="chip active">Все</button><button class="chip">Новые</button><button class="chip">В работе</button><button class="chip">Готовые</button></div></div>
    <section class="order-layout">
      <article class="card card-pad order-list" id="orderList">
        ${state.orders.map(o => `<div class="order-card ${o.id === selected.id ? 'active' : ''}" data-order="${o.id}" data-name="${(o.client+' '+o.project+' '+o.id).toLowerCase()}"><div class="thumb">${visualForOrder(o)}</div><div><div class="item-title">${o.id}</div><div class="item-meta">${o.client} · ${o.project}</div></div><span class="badge ${statusClass(o.status)}">${o.status}</span></div>`).join('')}
      </article>
      ${renderOrderDetail(selected)}
    </section>`;
}
function renderOrderDetail(o) {
  if (!o) return '<article class="card empty"><strong>Заказ не выбран</strong></article>';
  return `<article class="card card-pad" id="orderDetail">
    <div class="card-head"><div><h2>${o.id}</h2><small>${o.client} · ${o.city}</small></div><span class="badge ${statusClass(o.status)}">${o.status}</span></div>
    <div class="item-row"><div class="thumb">${visualForOrder(o)}</div><div><div class="item-title">Ковёр «${o.project}»</div><div class="item-meta">${o.size} · ${o.material}</div></div><div class="item-side"><b>${rub(o.amount)}</b></div></div>
    <div class="detail-grid" style="margin-top:14px"><div class="detail-tile"><small>Контакт</small><b>${o.phone}</b></div><div class="detail-tile"><small>Источник</small><b>${o.source}</b></div><div class="detail-tile"><small>Предоплата</small><b>${rub(orderPrepaid(o))}</b></div><div class="detail-tile"><small>Всего получено</small><b>${rub(orderPaid(o))}</b></div><div class="detail-tile"><small>Остаток к оплате</small><b>${rub(Math.max(0,(Number(o.amount)||0)-orderPaid(o)))}</b></div><div class="detail-tile"><small>Срок</small><b>${o.deadline}</b></div></div>
    <div class="card-head" style="margin-top:18px"><h3>Оплаты</h3><small>${(o.payments||[]).length} операций</small></div><div class="lot-list">${(o.payments||[]).length ? o.payments.map(payment => `<div class="lot-row"><div><b>${esc(payment.type)}</b><div class="item-meta">${payment.date}${payment.note ? ` · ${esc(payment.note)}` : ''}</div></div><b class="positive">${rub(payment.amount)}</b></div>`).join('') : '<div class="empty compact"><strong>Оплат пока нет</strong></div>'}</div>
    <div style="margin-top:16px"><div class="card-head"><h3>Готовность</h3><b>${o.progress}%</b></div>${progress(o.progress)}</div>${shipmentForOrder(o.id) ? `<div class="detail-tile" style="margin-top:16px"><small>Передача / отправка</small><b>${esc(shipmentForOrder(o.id).status)}</b><div class="item-meta">${esc(shipmentForOrder(o.id).location)} · упаковка ${esc(shipmentForOrder(o.id).package)}${shipmentForOrder(o.id).tracking ? ` · трек ${esc(shipmentForOrder(o.id).tracking)}` : ''}</div></div>` : ''}
    <div class="detail-tile" style="margin-top:16px"><small>Пожелания клиента</small><div>${o.note || 'Нет дополнительных пожеланий'}</div></div>
    <div class="card-head" style="margin-top:18px"><h3>История общения</h3><small>${o.history.length} сообщений</small></div>
    <div class="timeline">${o.history.length ? o.history.map(h => `<div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-text"><b>${h.who}</b> · ${h.date}<br>${h.text}</div></div>`).join('') : '<div class="empty"><strong>Переписка пока не добавлена</strong>Сохраняйте важные договорённости и сообщения.</div>'}</div>
    <div class="production-actions"><button class="primary-btn" data-action="order-payment" data-id="${o.id}">＋ Оплата</button>${o.progress >= 100 && o.status !== 'Отправлен' ? `<button class="primary-btn" data-action="prepare-shipment" data-id="${o.id}">Передать / отправить</button>` : ''}<button class="secondary-btn" data-action="client-status" data-id="${o.id}">Статус для клиента</button><button class="secondary-btn" data-action="order-status" data-id="${o.id}">Изменить статус</button><button class="secondary-btn" data-action="message-template" data-id="${o.id}">Шаблон сообщения</button><button class="danger-btn" data-action="delete-order" data-id="${o.id}">Удалить тест / заказ</button></div>
  </article>`;
}
function renderProducts() {
  const mode = state.productView || 'stock';
  const stock = state.products.filter(item => item.inventoryStatus !== 'archive');
  const archive = state.products.filter(item => item.inventoryStatus === 'archive');
  const items = mode === 'stock' ? stock : archive;
  const costValue = stock.reduce((sum, item) => sum + (Number(item.cost) || 0), 0);
  const retailValue = stock.reduce((sum, item) => sum + (Number(item.retail) || 0), 0);
  const header = `<div class="chips product-tabs"><button class="chip ${mode === 'stock' ? 'active' : ''}" data-product-view="stock">На складе · ${stock.length}</button><button class="chip ${mode === 'archive' ? 'active' : ''}" data-product-view="archive">Завершённые · ${archive.length}</button></div>`;
  return `
    ${viewHeader('Готовые изделия', mode === 'stock' ? 'Товарный склад: готовые ковры, которые ещё находятся у вас.' : 'Завершённые и отправленные работы — история мастерской.', header)}
    ${mode === 'stock' ? `<section class="kpi-grid">${kpi('Ковров на складе', `${stock.length} шт.`, 'Готовы к продаже или отправке')}${kpi('Себестоимость склада', rub(costValue), 'Вложено в готовые изделия')}${kpi('Потенциальная выручка', rub(retailValue), 'По розничным ценам')}${kpi('Потенциальная маржа', rub(retailValue - costValue), 'До расходов на продажу')}</section>` : ''}
    <section class="product-grid">
      ${items.length ? items.map(p => { const margin = (Number(p.salePrice) || Number(p.retail) || 0) - (Number(p.cost) || 0); return `<article class="card product-card" data-product="${p.id}"><div class="product-cover">${visual(p, `Ковёр ${p.name}`)}</div><div class="product-body"><div class="product-top"><div><div class="product-name">${p.name}</div><div class="product-meta">${p.id} · ${p.size}</div></div><span class="badge ${statusClass(p.status)}">${p.status}</span></div><div class="project-footer"><span class="price">${rub(mode === 'archive' ? (p.salePrice || p.retail) : p.retail)}</span><span class="product-meta">${mode === 'archive' ? `Маржа ${rub(margin)}` : p.location}</span></div><div class="production-actions"><button class="secondary-btn" data-action="product-card" data-id="${p.id}">Карточка</button>${mode === 'stock' ? `<button class="secondary-btn" data-action="publish-product" data-id="${p.id}">Публикации</button>` : ''}</div></div></article>`; }).join('') : `<article class="card empty"><strong>${mode === 'stock' ? 'Товарный склад пуст' : 'Завершённых работ пока нет'}</strong>${mode === 'stock' ? 'Готовые ковры появятся здесь после завершения производства.' : 'После отправки ковёр уйдёт со склада, но останется в этой истории.'}</article>`}
    </section>`;
}

function renderFinance() {
  const summary = financeSummary();
  const months = groupLedgerByMonth(summary.ledger);
  const max = Math.max(1, ...months.flatMap(item => [item.revenue || 0, item.expenses || 0]));
  const avg = summary.sales.length ? summary.sales.reduce((sum, item) => sum + item.sale, 0) / summary.sales.length : 0;
  const perHour = summary.hours ? summary.grossProfit / summary.hours : 0;
  const channels = new Map();
  summary.sales.forEach(item => channels.set(item.order.source || 'Не указан', (channels.get(item.order.source || 'Не указан') || 0) + item.sale));
  return `
    ${viewHeader('Финансы и аналитика', 'Платежи, закупки, денежный поток и реальная маржа по коврам.', `<button class="secondary-btn" data-action="new-expense">＋ Расход</button>`)}
    <section class="kpi-grid">${kpi('Получено денег', rub(summary.income), 'Все предоплаты и расчёты')}${kpi('Предоплаты', rub(summary.prepayments), 'Отдельно по заказам')}${kpi('Денежные расходы', rub(summary.expenses), 'Материалы и прочие операции')}${kpi('Денежный остаток', rub(summary.cashFlow), 'Получено минус оплаченные расходы')}</section>
    <section class="grid cols-2">
      <article class="card card-pad"><div class="card-head"><h2>Движение денег</h2><small>поступления / расходы</small></div><div class="chart">${months.map(m => `<div class="bar-wrap"><div class="bar" style="height:${(m.revenue||0)/max*100}%"></div><div class="bar profit" style="height:${(m.expenses||0)/max*100}%"></div><span class="bar-label">${m.m}</span></div>`).join('')}</div><div class="legend"><span><i></i>Поступления</span><span><i class="sand"></i>Расходы</span></div></article>
      <article class="card card-pad"><div class="card-head"><h2>Итог завершённых продаж</h2><small>${summary.sales.length} заказов</small></div><div class="detail-grid"><div class="detail-tile"><small>Продано</small><b>${rub(summary.realizedRevenue)}</b></div><div class="detail-tile"><small>Себестоимость</small><b>${rub(summary.cogs)}</b></div><div class="detail-tile"><small>Валовая прибыль</small><b>${rub(summary.grossProfit)}</b></div><div class="detail-tile"><small>Средний чек</small><b>${rub(avg)}</b></div><div class="detail-tile"><small>Прибыль за час</small><b>${rub(perHour)}</b></div><div class="detail-tile"><small>Учтено времени</small><b>${num(summary.hours,1)} ч</b></div></div></article>
      <article class="card card-pad"><div class="card-head"><h2>Маржа по завершённым коврам</h2><small>от лучшей к меньшей</small></div><div class="list">${summary.sales.length ? [...summary.sales].sort((a,b)=>b.margin-a.margin).map(item => `<div class="task"><div class="thumb">${visualForOrder(item.order)}</div><div><div class="item-title">${item.order.project}</div><div class="item-meta">${item.order.id} · себестоимость ${rub(item.cost)}</div>${progress(Math.max(0, Math.min(100, item.marginPct)))}</div><div class="item-side"><b>${rub(item.margin)}</b><div class="item-meta">${num(item.marginPct,1)}%</div></div></div>`).join('') : '<div class="empty"><strong>Завершённых продаж пока нет</strong>Отправьте первый заказ — здесь появится его выручка, себестоимость и маржа.</div>'}</div></article>
      <article class="card card-pad"><div class="card-head"><h2>Последние операции</h2><small>${summary.ledger.length} всего</small></div><div class="finance-ledger">${summary.ledger.length ? summary.ledger.slice(0,10).map(item => `<div class="transaction-row"><span class="transaction-icon ${item.kind}">${item.kind === 'income' ? '＋' : '−'}</span><div><b>${esc(item.title || item.category)}</b><div class="item-meta">${item.date} · ${esc(item.category)}${item.note ? ` · ${esc(item.note)}` : ''}</div></div><b class="${item.kind === 'income' ? 'positive' : 'negative'}">${item.kind === 'income' ? '+' : '−'}${rub(item.amount)}</b></div>`).join('') : '<div class="empty compact"><strong>Операций пока нет</strong></div>'}</div></article>
      <article class="card card-pad"><div class="card-head"><h2>Стоимость запасов</h2></div><div class="detail-grid"><div class="detail-tile"><small>Материалы</small><b>${rub(summary.materialStockCost)}</b></div><div class="detail-tile"><small>Готовые ковры по себестоимости</small><b>${rub(summary.productStockCost)}</b></div><div class="detail-tile"><small>Готовые ковры по рознице</small><b>${rub(summary.productStockRetail)}</b></div><div class="detail-tile"><small>Потенциальная маржа склада</small><b>${rub(summary.productStockRetail-summary.productStockCost)}</b></div></div></article>
      <article class="card card-pad"><div class="card-head"><h2>Каналы продаж</h2></div><div class="list">${channels.size ? [...channels.entries()].sort((a,b)=>b[1]-a[1]).map(([name,value]) => `<div class="task"><span class="badge blue">${esc(name)}</span><div><div class="item-title">${rub(value)}</div><div class="item-meta">выручка завершённых заказов</div></div></div>`).join('') : '<div class="empty"><strong>Продаж пока нет</strong>После отправки заказов появится статистика по источникам клиентов.</div>'}</div></article>
    </section>`;
}
function renderFamily() {
  const shipments = state.shipments.filter(item => item.status === 'К отправке');
  if (!shipments.length) return `${viewHeader('Семейный режим', 'Простой экран для упаковки и отправки.', '')}<article class="card empty"><strong>Нет заказов к отправке</strong>После передачи готового ковра «К отправке» он появится здесь.</article>`;
  return `${viewHeader('Семейный режим', 'Только подготовленные заказы и понятные шаги отправки.', '')}<section class="section-stack">${shipments.map(shipment => {
    const order = state.orders.find(o => o.id === shipment.orderId);
    const balance = order ? Math.max(0, (Number(order.amount)||0)-orderPaid(order)) : 0;
    return `<article class="card card-pad family-card"><div class="card-head"><div><h2>Отправка заказа ${shipment.orderId}</h2><small>${shipment.status}</small></div><span class="badge ${balance > 0 ? 'danger' : 'success'}">${balance > 0 ? `Долг ${rub(balance)}` : 'Оплачен'}</span></div>
      <div class="family-order"><div class="item-row"><div class="thumb">${visualForOrder(order)}</div><div><div class="item-title">Ковёр «${order?.project || 'Ковёр'}»</div><div class="item-meta">${order?.size || ''}</div></div><div class="item-side"><b>${esc(shipment.package)}</b><div class="item-meta">номер упаковки</div></div></div>
      <div class="detail-grid"><div class="detail-tile"><small>Где лежит</small><b>${esc(shipment.location)}</b></div><div class="detail-tile"><small>Получатель</small><b>${esc(shipment.client)}</b></div><div class="detail-tile"><small>Адрес</small><b>${esc(shipment.address)}</b></div><div class="detail-tile"><small>Телефон</small><b>${esc(shipment.phone)}</b></div></div>
      <div class="family-steps"><div class="family-step"><span>1</span><div><b>Найти упаковку</b><div class="item-meta">${esc(shipment.package)} · ${esc(shipment.location)}</div></div></div><div class="family-step"><span>2</span><div><b>Проверить ковёр</b><div class="item-meta">Чистый, сухой, без дефектов</div></div></div><div class="family-step"><span>3</span><div><b>Передать службе доставки</b><div class="item-meta">Получить трек-номер</div></div></div><div class="family-step"><span>4</span><div><b>Внести трек и завершить</b><div class="item-meta">После подтверждения ковёр уйдёт в завершённые</div></div></div></div>
      <button class="primary-btn" style="width:100%;min-height:54px" data-action="ship-order" data-id="${shipment.orderId}">Внести трек и отметить отправленным</button></div>
    </article>`;
  }).join('')}</section>`;
}

function renderMore() {
  return `${viewHeader('Ещё', 'Все дополнительные разделы VORS Studio.', '')}<div class="mobile-more"><button class="nav-item" data-go="orders"><span>▣</span><b>Клиенты и заказы</b></button><button class="nav-item" data-go="products"><span>◇</span><b>Готовые изделия</b></button><button class="nav-item" data-go="finance"><span>▥</span><b>Финансы и аналитика</b></button><button class="nav-item" data-go="family"><span>♧</span><b>Семейный режим</b></button><button class="nav-item" data-action="role"><span>👤</span><b>Сменить роль</b></button><button class="nav-item danger-action" data-action="clear-data"><span>⌫</span><b>Очистить все данные</b></button></div>`;
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
  main.querySelectorAll('[data-material-mode]').forEach(btn => btn.addEventListener('click', () => { state.materialView = btn.dataset.materialMode; markSaving(); render(); }));
  main.querySelectorAll('[data-product-view]').forEach(btn => btn.addEventListener('click', () => { state.productView = btn.dataset.productView; markSaving(); render(); }));
  bindSearch('projectSearch', '#projectGrid [data-project]', 'projectChips');
  bindSearch('materialSearch', '#materialTable [data-material], #materialTable [data-catalog]', 'materialChips');
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
    'delete-project': () => openDeleteProjectDialog(id),
    'new-order': openNewOrder,
    'delete-order': () => openDeleteOrderDialog(id),
    'new-material': () => openMaterialReceipt(),
    'new-catalog-item': () => openCatalogEditor(),
    'catalog-receipt': () => openMaterialReceipt(id),
    'edit-catalog-item': () => openCatalogEditor(id),
    'adjust-material': () => adjustMaterial(id),
    'start-production': openStartProduction,
    'timer': () => toggleTimer(id),
    'next-stage': () => nextStage(id),
    'production-note': () => editProductionNote(id),
    'client-status': () => openClientStatus(id),
    'client-status-by-rug': () => { const p = state.productions.find(x => x.id === id); const o = state.orders.find(x => x.projectId === p?.projectId || x.project === p?.name); if (o) openClientStatus(o.id); else toast('К этому ковру не привязан заказ'); },
    'prepare-shipment': () => prepareShipment(id),
    'prepare-shipment-by-rug': () => { const p = state.productions.find(x => x.id === id); const o = state.orders.find(x => x.projectId === p?.projectId || x.project === p?.name); if (o) prepareShipment(o.id); else prepareProductHandoff(id); },
    'delete-production-test': () => { const p = state.productions.find(x => x.id === id); const o = state.orders.find(x => x.projectId === p?.projectId || x.project === p?.name); const project = state.projects.find(x => x.id === p?.projectId || x.name === p?.name); if (o) openDeleteOrderDialog(o.id); else if (project) openDeleteProjectDialog(project.id); else { if (confirm('Удалить эту производственную карточку?')) { state.productions = state.productions.filter(x => x.id !== id); markSaving(); render(); toast('Производственная карточка удалена'); } } },
    'order-status': () => changeOrderStatus(id),
    'order-payment': () => addOrderPayment(id),
    'message-template': () => openMessageTemplate(id),
    'product-card': () => openProduct(id),
    'publish-product': () => openPublish(id),
    'new-product': openNewProduct,
    'new-expense': openExpense,
    'ship-order': () => shipOrder(id),
    'role': openRoleModal,
    'clear-data': clearAllData
  };
  actions[action]?.();
}

function openModal(title, body, actions = '') {
  modalRoot.innerHTML = `<div class="modal-backdrop"><section class="modal"><header class="modal-head"><h2>${title}</h2><button class="close-btn" data-close>×</button></header><div class="modal-body">${body}${actions ? `<div class="modal-actions">${actions}</div>` : ''}</div></section></div>`;
  modalRoot.querySelector('[data-close]').addEventListener('click', closeModal);
  modalRoot.querySelector('.modal-backdrop').addEventListener('click', e => { if (e.target.classList.contains('modal-backdrop')) closeModal(); });
}
function closeModal() { modalRoot.innerHTML = ''; }

function openNewProject() { openProjectEditor(); }
function openProjectEditor(project = null) {
  const editing = Boolean(project);
  let coverImage = project?.coverImage || '';
  const categories = ['Интерьер','Ванная','Панно','Питомцы','Забавные'];
  openModal(editing ? 'Редактировать проект' : 'Новый проект', `<form id="projectForm" class="form-grid">
    <div class="field"><label>Название</label><input name="name" required placeholder="Например, Тихий берег" value="${esc(project?.name || '')}"></div>
    <div class="field"><label>Категория</label><select name="category">${categories.map(category => `<option ${project?.category === category ? 'selected' : ''}>${category}</option>`).join('')}</select></div>
    <div class="field"><label>Размер</label><input name="size" placeholder="100 × 70 см" value="${esc(project?.size || '')}"></div>
    <div class="field"><label>Плановая цена</label><input name="price" type="number" min="0" placeholder="12000" value="${project?.price || ''}"></div>
    <div class="field"><label>Срок, дней</label><input name="days" type="number" min="1" value="${project?.planDays || 7}"></div>
    <div class="field"><label>Материал</label><input name="material" placeholder="100% акрил" value="${esc(project?.material || '')}"></div>
    <div class="field full"><label>Утверждённое изображение проекта</label><div class="image-upload"><div class="image-preview" id="projectImagePreview">${coverImage ? `<img src="${coverImage}" alt="Изображение проекта">` : '<div class="visual-placeholder"><span>＋</span><small>Загрузите итоговый эскиз, согласованный с клиентом</small></div>'}</div><div class="image-upload-actions"><label class="secondary-btn file-button">Выбрать изображение<input id="projectImageInput" type="file" accept="image/*" hidden></label><button class="ghost-btn" type="button" id="removeProjectImage" ${coverImage ? '' : 'hidden'}>Удалить изображение</button></div><small>Фото автоматически уменьшается для хранения на телефоне. Лучше использовать готовый эскиз без лишнего фона.</small></div></div>
    <div class="field full"><label>Технологические заметки</label><textarea name="notes">${esc(project?.notes || '')}</textarea></div>
  </form>`, `<button class="secondary-btn" data-close2>Отмена</button><button class="primary-btn" data-save>${editing ? 'Сохранить' : 'Создать проект'}</button>`);
  const input = document.getElementById('projectImageInput');
  const preview = document.getElementById('projectImagePreview');
  const removeButton = document.getElementById('removeProjectImage');
  input.addEventListener('change', async () => {
    const file = input.files?.[0];
    if (!file) return;
    try {
      preview.innerHTML = '<div class="visual-placeholder"><span>…</span><small>Обрабатываем изображение</small></div>';
      coverImage = await compressImage(file);
      preview.innerHTML = `<img src="${coverImage}" alt="Изображение проекта">`;
      removeButton.hidden = false;
    } catch (error) {
      coverImage = project?.coverImage || '';
      preview.innerHTML = coverImage ? `<img src="${coverImage}" alt="Изображение проекта">` : '<div class="visual-placeholder"><span>＋</span><small>Изображение не загружено</small></div>';
      toast(error.message || 'Не удалось загрузить изображение');
    }
  });
  removeButton.onclick = () => {
    coverImage = '';
    input.value = '';
    preview.innerHTML = '<div class="visual-placeholder"><span>＋</span><small>Изображение не загружено</small></div>';
    removeButton.hidden = true;
  };
  modalRoot.querySelector('[data-close2]').onclick = closeModal;
  modalRoot.querySelector('[data-save]').onclick = () => {
    const fd = new FormData(document.getElementById('projectForm'));
    if (!fd.get('name')) return toast('Введите название проекта');
    const values = {
      name: fd.get('name').trim(), category: fd.get('category'), size: fd.get('size') || 'Не указан',
      price: Number(fd.get('price')) || 0, planDays: Number(fd.get('days')) || 7,
      material: fd.get('material') || 'Не указан', notes: fd.get('notes') || '', coverImage,
      pattern: project?.pattern || null
    };
    if (editing) Object.assign(project, values);
    else state.projects.unshift({ id: `PRJ-${String(state.projects.length + 1).padStart(3,'0')}`, status: 'Идея', progress: 0, colors: [], ...values });
    markSaving(); closeModal(); state.view = 'projects'; render(); toast(editing ? 'Проект обновлён' : 'Проект создан');
  };
}
function openProject(id) {
  const p = state.projects.find(x => x.id === id); if (!p) return;
  openModal(p.name, `<div class="status-hero"><div class="status-cover">${visual(p, `Проект ${p.name}`)}</div><div><span class="badge ${statusClass(p.status)}">${p.status}</span><h3 style="font-size:26px;margin:10px 0 5px">${esc(p.name)}</h3><div class="item-meta">${p.id} · ${esc(p.category)}</div><div class="price" style="margin-top:10px">${rub(p.price)}</div></div></div><div class="detail-grid" style="margin-top:18px"><div class="detail-tile"><small>Размер</small><b>${esc(p.size)}</b></div><div class="detail-tile"><small>Материал</small><b>${esc(p.material)}</b></div><div class="detail-tile"><small>Плановый срок</small><b>${p.planDays} дней</b></div><div class="detail-tile"><small>Готовность</small><b>${p.progress}%</b></div></div><div style="margin-top:16px">${progress(p.progress)}</div>${p.colors?.length ? `<div class="detail-tile" style="margin-top:16px"><small>Палитра</small><div style="display:flex;gap:8px">${p.colors.map(c=>`<i style="width:34px;height:34px;border-radius:50%;background:${c};border:3px solid #fff;box-shadow:0 2px 7px #0002"></i>`).join('')}</div></div>` : ''}<div class="detail-tile" style="margin-top:12px"><small>Заметки</small>${esc(p.notes || 'Нет заметок')}</div>`, `<button class="danger-btn" data-delete>Удалить проект</button><button class="secondary-btn" data-launch>Запустить в производство</button><button class="primary-btn" data-edit>Изменить</button>`);
  modalRoot.querySelector('[data-delete]').onclick = () => { closeModal(); openDeleteProjectDialog(id); };
  modalRoot.querySelector('[data-launch]').onclick = () => { closeModal(); launchProject(id); };
  modalRoot.querySelector('[data-edit]').onclick = () => { closeModal(); openProjectEditor(p); };
}
function openDeleteProjectDialog(id) {
  const project = state.projects.find(item => item.id === id); if (!project) return;
  const linkedOrder = state.orders.find(order => order.projectId === id || order.project === project.name);
  const linkedProduction = state.productions.find(item => item.projectId === id || item.name === project.name);
  const linkedProduct = state.products.find(item => item.projectId === id || item.productionId === linkedProduction?.id || item.orderId === linkedOrder?.id);
  openModal('Удалить проект', `<div class="detail-tile"><small>Проект</small><b>${esc(project.name)}</b><div class="item-meta">${esc(project.id)}</div></div><div class="detail-tile" style="margin-top:12px"><small>Связанные записи</small><div>${linkedOrder ? 'Заказ · ' : ''}${linkedProduction ? 'Производство · ' : ''}${linkedProduct ? 'Готовое изделие' : 'нет'}</div></div><div class="detail-tile" style="margin-top:12px"><small>Выберите действие</small><div>Можно удалить только карточку проекта или полностью очистить тест вместе с заказом, производством, готовым изделием и связанными финансовыми операциями.</div></div>`, `<button class="secondary-btn" data-only>Только проект</button><button class="danger-btn" data-all>Удалить весь тест</button>`);
  modalRoot.querySelector('[data-only]').onclick = () => { state.projects = state.projects.filter(item => item.id !== id); markSaving(); closeModal(); state.view='projects'; render(); toast('Проект удалён'); };
  modalRoot.querySelector('[data-all]').onclick = () => {
    if (linkedOrder) removeLinkedTestData(linkedOrder);
    else {
      state.projects = state.projects.filter(item => item.id !== id);
      if (linkedProduction) state.productions = state.productions.filter(item => item.id !== linkedProduction.id);
      if (linkedProduct) state.products = state.products.filter(item => item.id !== linkedProduct.id);
      state.finance.transactions = (state.finance.transactions || []).filter(item => item.projectId !== id);
    }
    markSaving(); closeModal(); state.view='projects'; render(); toast('Тестовый проект и связанные записи удалены');
  };
}
function deleteProject(id) {
  const project = state.projects.find(item => item.id === id);
  if (!project) return;
  const linkedOrders = state.orders.filter(order => order.projectId === id || order.project === project.name).length;
  const linkedProductions = state.productions.filter(item => item.projectId === id || item.name === project.name).length;
  const warning = [
    `Удалить проект «${project.name}»?`,
    linkedOrders ? `Связанные заказы: ${linkedOrders}. Они останутся в базе как самостоятельные записи.` : '',
    linkedProductions ? `Производство: ${linkedProductions}. Производственные карточки останутся, чтобы не потерять историю.` : '',
    'Это действие нельзя отменить.'
  ].filter(Boolean).join('\n\n');
  if (!confirm(warning)) return;
  state.projects = state.projects.filter(item => item.id !== id);
  markSaving();
  state.view = 'projects';
  render();
  toast('Проект удалён');
}

function deleteOrder(id) {
  const order = state.orders.find(item => item.id === id);
  if (!order) return;
  if (!confirm(`Удалить заказ ${order.id} клиента «${order.client}»?\n\nСвязанный проект и производственная карточка останутся. Это действие нельзя отменить.`)) return;
  state.orders = state.orders.filter(item => item.id !== id);
  state.shipments = state.shipments.filter(item => item.orderId !== id);
  state.selectedOrderId = state.orders[0]?.id || null;
  markSaving();
  state.view = 'orders';
  render();
  toast('Заказ удалён');
}

function launchProject(projectId) {
  const p = state.projects.find(x=>x.id===projectId); if (!p) return;
  if (state.productions.some(x=>x.projectId===projectId)) return toast('Этот проект уже в производстве');
  state.productions.unshift({ id:`RUG-2026-${String(49+state.productions.length).padStart(4,'0')}`, projectId:p.id, name:p.name, pattern:p.pattern, coverImage:p.coverImage || '', progress:5, planDays:p.planDays, elapsedDays:0, cost:0, timerSeconds:0, timerRunning:false, stages:['Эскиз','Перенос','Набивка','Проклейка','Сушка','Подложка','Стрижка','Контроль качества','Упаковка'].map((name,i)=>({name,status:i===0?'active':'wait'})), notes:'', photos:0 });
  p.status='В работе'; p.progress=5;
  state.orders.filter(order => order.projectId === p.id || order.project === p.name).forEach(order => { order.projectId = p.id; order.coverImage = p.coverImage || order.coverImage || ''; order.pattern = p.pattern || order.pattern; order.status = 'В работе'; order.progress = 5; });
  markSaving(); state.view='production'; render(); toast('Проект запущен в производство');
}
function openStartProduction() {
  const available = state.projects.filter(p => !state.productions.some(r=>r.projectId===p.id));
  openModal('Запустить ковёр', available.length ? `<div class="list">${available.map(p=>`<button class="item-row" style="width:100%;text-align:left;border:1px solid var(--line)" data-launch-id="${p.id}"><div class="thumb">${visual(p, `Проект ${p.name}`)}</div><div><div class="item-title">${p.name}</div><div class="item-meta">${p.size} · ${p.status}</div></div><span>→</span></button>`).join('')}</div>` : '<div class="empty"><strong>Нет свободных проектов</strong>Создайте новый проект или завершите текущие.</div>');
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
  const project=state.projects.find(x=>x.id===p.projectId);
  if (project) project.progress = p.progress;
  state.orders.filter(order => order.projectId === p.projectId || order.project === p.name).forEach(order => { order.projectId = p.projectId; order.coverImage = p.coverImage || project?.coverImage || order.coverImage || ''; order.progress = p.progress; order.status = p.progress >= 100 ? 'Готов' : 'В работе'; });
  if (active+1===p.stages.length) {
    p.progress=100; p.timerRunning=false;
    if(project){project.progress=100;project.status='Готов';}
    if(!state.products.some(x=>x.id===p.id)) {
      const linkedOrder = state.orders.find(order => order.projectId === p.projectId || order.project === p.name);
      state.products.unshift(normalizeProduct({id:p.id,productionId:p.id,projectId:p.projectId,orderId:linkedOrder?.id||'',name:p.name,pattern:p.pattern,coverImage:p.coverImage || project?.coverImage || '',size:project?.size||linkedOrder?.size||'',composition:project?.material||linkedOrder?.material||'',base:'Тафтинговая ткань',pile:'12 мм',care:'Сухая чистка',retail:project?.price||linkedOrder?.amount||0,minimum:Math.round((project?.price||linkedOrder?.amount||0)*.78),location:'Не назначено',status:'Готов к фото',inventoryStatus:'stock',cost:Number(p.cost)||0,channels:[],days:0,createdAt:todayISO()}));
    }
    p.completedAt = p.completedAt || todayISO();
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

function openCatalogEditor(id = null) {
  const item = state.materialCatalog.find(entry => entry.id === id);
  openModal(item ? 'Редактировать позицию' : 'Новая позиция справочника', `<form id="catalogForm" class="form-grid">
    <div class="field"><label>Категория</label><select name="type"><option ${item?.type === 'Пряжа' ? 'selected' : ''}>Пряжа</option><option ${item?.type === 'Основа' ? 'selected' : ''}>Основа</option><option ${item?.type === 'Клей' ? 'selected' : ''}>Клей</option><option ${item?.type === 'Подложка' ? 'selected' : ''}>Подложка</option><option ${item?.type === 'Упаковка' ? 'selected' : ''}>Упаковка</option></select></div>
    <div class="field"><label>Единица учёта</label><select name="unit">${['г','кг','м','л','шт'].map(unit => `<option ${item?.unit === unit || (!item && unit === 'г') ? 'selected' : ''}>${unit}</option>`).join('')}</select></div>
    <div class="field"><label>Производитель</label><input name="brand" required value="${esc(item?.brand || 'Пехорка')}"></div>
    <div class="field"><label>Линейка / название</label><input name="line" required value="${esc(item?.line || '')}" placeholder="Удачный выбор"></div>
    <div class="field"><label>Код цвета производителя</label><input name="colorCode" value="${esc(item?.colorCode || '')}" placeholder="01"></div>
    <div class="field"><label>Название цвета</label><input name="colorName" value="${esc(item?.colorName || '')}" placeholder="Белый"></div>
    <div class="field"><label>Внутренний код VORS</label><input name="internalCode" value="${esc(item?.internalCode || '')}" placeholder="PEH-UDV-01"></div>
    <div class="field"><label>Поставщик</label><input name="supplier" value="${esc(item?.supplier || 'Кудель')}"></div>
    <div class="field"><label>Артикул Куделя</label><input name="supplierSku" value="${esc(item?.supplierSku || '')}"></div>
    <div class="field"><label>Ссылка поставщика</label><input name="supplierUrl" type="url" value="${esc(item?.supplierUrl || 'https://kudel.ru/')}"></div>
    <div class="field"><label>Состав</label><input name="composition" value="${esc(item?.composition || '')}" placeholder="100% объёмный акрил"></div>
    <div class="field"><label>Вес мотка, г</label><input name="nominalWeight" type="number" min="0" step="0.1" value="${item?.nominalWeight || ''}"></div>
    <div class="field"><label>Метраж, м</label><input name="lengthM" type="number" min="0" step="0.1" value="${item?.lengthM || ''}"></div>
    <div class="field"><label>Последняя цена мотка</label><input name="lastSkeinPrice" type="number" min="0" step="0.01" value="${item?.lastSkeinPrice || ''}"></div>
    <div class="field"><label>Цвет образца</label><input name="swatch" type="color" value="${item?.swatch || '#d7d4cf'}"></div>
  </form>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-save>Сохранить</button>`);
  modalRoot.querySelector('[data-cancel]').onclick = closeModal;
  modalRoot.querySelector('[data-save]').onclick = () => {
    const fd = new FormData(document.getElementById('catalogForm'));
    if (!fd.get('brand') || !fd.get('line')) return toast('Укажите производителя и линейку');
    const values = {
      type: fd.get('type'), brand: fd.get('brand').trim(), line: fd.get('line').trim(),
      colorCode: fd.get('colorCode').trim(), colorName: fd.get('colorName').trim(),
      internalCode: fd.get('internalCode').trim() || `${fd.get('brand').slice(0,3).toUpperCase()}-${fd.get('line').slice(0,3).toUpperCase()}-${fd.get('colorCode') || 'BASE'}`,
      supplier: fd.get('supplier').trim() || 'Кудель', supplierSku: fd.get('supplierSku').trim(), supplierUrl: fd.get('supplierUrl').trim(),
      composition: fd.get('composition').trim(), nominalWeight: Number(fd.get('nominalWeight')) || 0,
      lengthM: Number(fd.get('lengthM')) || 0, unit: fd.get('unit') || (fd.get('type') === 'Пряжа' ? 'г' : 'шт'),
      lastSkeinPrice: Number(fd.get('lastSkeinPrice')) || 0, swatch: fd.get('swatch'), checkedAt: new Date().toLocaleDateString('ru-RU')
    };
    if (item) Object.assign(item, values);
    else state.materialCatalog.unshift({ id: `CAT-CUSTOM-${Date.now()}`, ...values });
    markSaving(); closeModal(); state.materialView = 'catalog'; render(); toast('Справочник обновлён');
  };
}
function openMaterialReceipt(catalogId = null) {
  let selected = state.materialCatalog.find(item => item.id === catalogId) || null;
  const options = state.materialCatalog.map(item => `<option value="${esc(materialCatalogLabel(item))}"></option>`).join('');
  openModal('Поступление материала', `<form id="receiptForm" class="form-grid">
    <div class="field full"><label>Материал из справочника</label><input id="catalogLookup" list="catalogOptions" autocomplete="off" placeholder="Начните вводить Пехорка, цвет или артикул" value="${selected ? esc(materialCatalogLabel(selected)) : ''}"><datalist id="catalogOptions">${options}</datalist></div>
    <div class="field full"><div class="catalog-preview" id="receiptPreview">${selected ? receiptPreview(selected) : '<div class="empty compact"><strong>Выберите точную позицию</strong>Поиск работает по бренду, линейке, цвету, внутреннему коду и артикулу Куделя.</div>'}</div></div>
    <div class="field"><label>Фактический вес поступления, г</label><input name="weight" type="number" min="0.1" step="0.1" required placeholder="500"></div>
    <div class="field"><label>Общая стоимость покупки, ₽</label><input name="price" type="number" min="0" step="0.01" placeholder="735"></div>
    <div class="field"><label>Минимальный остаток, г</label><input name="min" type="number" min="0" step="0.1" value="${selected ? selected.nominalWeight * 2 : 200}"></div>
    <div class="field"><label>Дата поступления</label><input name="date" type="date" value="${new Date().toISOString().slice(0,10)}"></div>
    <div class="field"><label>Партия с этикетки</label><input name="batch" placeholder="Необязательно"></div>
    <div class="field"><label>Количество мотков</label><input name="skeins" type="number" min="0" step="1" placeholder="5"></div>
    <div class="field"><label>Место хранения</label><input name="location" placeholder="Стеллаж А · ящик 2"></div>
    <div class="field full"><label>Комментарий</label><textarea name="note" placeholder="Например: взвешено без бумажных этикеток"></textarea></div>
  </form>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-save>Принять на склад</button>`);
  const lookup = document.getElementById('catalogLookup');
  const preview = document.getElementById('receiptPreview');
  const updateSelected = () => {
    const value = lookup.value.trim().toLowerCase();
    selected = state.materialCatalog.find(item => materialCatalogLabel(item).toLowerCase() === value)
      || state.materialCatalog.find(item => [item.internalCode, item.supplierSku, `${item.colorCode} ${item.colorName}`].filter(Boolean).some(token => String(token).toLowerCase() === value));
    preview.innerHTML = selected ? receiptPreview(selected) : '<div class="empty compact"><strong>Позиция не найдена</strong>Выберите вариант из подсказок или сначала добавьте его в справочник.</div>';
  };
  lookup.addEventListener('input', updateSelected);
  lookup.addEventListener('change', updateSelected);
  modalRoot.querySelector('[data-cancel]').onclick = closeModal;
  modalRoot.querySelector('[data-save]').onclick = () => {
    updateSelected();
    if (!selected) return toast('Выберите материал из справочника');
    const fd = new FormData(document.getElementById('receiptForm'));
    const weight = Number(fd.get('weight')) || 0;
    if (weight <= 0) return toast('Укажите фактический вес');
    const totalPrice = Number(fd.get('price')) || 0;
    let inventory = state.materials.find(item => item.catalogId === selected.id);
    if (!inventory) {
      inventory = normalizeMaterial({
        id: `MAT-${String(state.materials.length + 1).padStart(3,'0')}`, catalogId: selected.id,
        name: materialName(selected), type: selected.type, code: selected.internalCode, internalCode: selected.internalCode,
        brand: selected.brand, line: selected.line, colorCode: selected.colorCode, colorName: selected.colorName,
        supplier: selected.supplier, supplierSku: selected.supplierSku, supplierUrl: selected.supplierUrl,
        composition: selected.composition, nominalWeight: selected.nominalWeight, lengthM: selected.lengthM,
        swatch: selected.swatch, stock: 0, min: Number(fd.get('min')) || 0, unit: selected.unit || 'г', pricePerUnit: 0, location: fd.get('location')?.trim() || ''
      });
      state.materials.unshift(inventory);
    }
    const oldStock = inventory.stock || 0;
    const oldValue = oldStock * (inventory.pricePerUnit || 0);
    inventory.stock = oldStock + weight;
    inventory.min = Number(fd.get('min')) || inventory.min || 0;
    if (fd.get('location')?.trim()) inventory.location = fd.get('location').trim();
    inventory.pricePerUnit = inventory.stock ? (oldValue + totalPrice) / inventory.stock : 0;
    inventory.lots = inventory.lots || [];
    inventory.movements = inventory.movements || [];
    const date = fd.get('date') || new Date().toISOString().slice(0,10);
    inventory.lots.unshift({ id: `LOT-${Date.now()}`, date, batch: fd.get('batch') || 'Не указана', skeins: Number(fd.get('skeins')) || 0, initialWeight: weight, remainingWeight: weight, purchasePrice: totalPrice, note: fd.get('note') || '' });
    inventory.movements.unshift({ id: `MOV-${Date.now()}`, date, type: 'Поступление', delta: weight, reason: fd.get('note') || 'Закупка у поставщика' });
    selected.lastSkeinPrice = totalPrice && Number(fd.get('skeins')) ? totalPrice / Number(fd.get('skeins')) : selected.lastSkeinPrice;
    markSaving(); closeModal(); state.materialView = 'stock'; render(); toast(`Принято ${num(weight,1)} г`);
  };
}
function receiptPreview(item) {
  return `<div class="catalog-preview-card"><div class="material-thumb" style="--swatch:${item.swatch || '#e5d8c3'}"></div><div><b>${materialName(item)}</b><div class="item-meta">${item.composition} · ${item.nominalWeight} г / ${item.lengthM} м</div><div class="code-line"><span>${item.internalCode}</span><span>Кудель ${item.supplierSku || '—'}</span></div></div></div>`;
}
function consumeLots(material, amount) {
  let rest = amount;
  [...(material.lots || [])].reverse().forEach(lot => {
    if (rest <= 0 || lot.remainingWeight <= 0) return;
    const take = Math.min(rest, lot.remainingWeight);
    lot.remainingWeight -= take;
    rest -= take;
  });
}
function adjustMaterial(id) {
  const material = state.materials.find(item => item.id === id); if (!material) return;
  const catalog = state.materialCatalog.find(item => item.id === material.catalogId);
  const lots = (material.lots || []).filter(lot => lot.remainingWeight > 0);
  const movements = (material.movements || []).slice(0, 6);
  openModal(catalog ? materialName(catalog) : material.name, `<div class="material-detail-head"><div class="material-thumb large" style="--swatch:${catalog?.swatch || material.swatch || '#e5d8c3'}"></div><div><div class="item-meta">${catalog?.internalCode || material.internalCode || material.code || ''}</div><h3>${catalog ? `${catalog.colorCode} ${catalog.colorName}` : material.name}</h3><div class="item-meta">${catalog?.composition || material.composition || ''}</div></div></div>
    <div class="detail-grid" style="margin-top:16px"><div class="detail-tile"><small>Фактический остаток</small><b>${num(material.stock,1)} ${material.unit}</b></div><div class="detail-tile"><small>Минимум</small><b>${num(material.min,1)} ${material.unit}</b></div><div class="detail-tile"><small>Средняя цена</small><b>${num(material.pricePerUnit || 0, 2)} ₽ / г</b></div><div class="detail-tile"><small>Стоимость остатка</small><b>${rub(material.stock * (material.pricePerUnit || 0))}</b></div><div class="detail-tile"><small>Место хранения</small><b>${esc(material.location || 'Не назначено')}</b></div></div>
    ${catalog ? `<div class="detail-tile" style="margin-top:12px"><small>Закупка</small><div class="code-line"><span>Кудель ${catalog.supplierSku || '—'}</span><span>${catalog.checkedAt ? `проверено ${catalog.checkedAt}` : ''}</span></div></div>` : ''}
    <div class="card-head" style="margin-top:18px"><h3>Активные партии</h3><small>${lots.length}</small></div><div class="lot-list">${lots.length ? lots.map(lot => `<div class="lot-row"><div><b>${lot.batch}</b><div class="item-meta">${lot.date}${lot.skeins ? ` · ${lot.skeins} мот.` : ''}</div></div><div><b>${num(lot.remainingWeight,1)} г</b><div class="item-meta">из ${num(lot.initialWeight,1)} г</div></div></div>`).join('') : '<div class="empty compact"><strong>Активных партий нет</strong></div>'}</div>
    <div class="card-head" style="margin-top:18px"><h3>Последние движения</h3></div><div class="lot-list">${movements.length ? movements.map(move => `<div class="lot-row"><div><b>${move.type}</b><div class="item-meta">${move.date} · ${move.reason}</div></div><b class="${move.delta < 0 ? 'negative' : 'positive'}">${move.delta > 0 ? '+' : ''}${num(move.delta,1)} г</b></div>`).join('') : '<div class="empty compact"><strong>Движений пока нет</strong></div>'}</div>`, `<button class="secondary-btn" data-adjust>Корректировка</button>${catalog?.supplierUrl ? '<button class="secondary-btn" data-supplier>Открыть Кудель</button>' : ''}<button class="primary-btn" data-receipt>Поступление</button>`);
  modalRoot.querySelector('[data-receipt]').onclick = () => { closeModal(); openMaterialReceipt(material.catalogId); };
  modalRoot.querySelector('[data-adjust]').onclick = () => { closeModal(); openMaterialAdjustment(material.id); };
  modalRoot.querySelector('[data-supplier]')?.addEventListener('click', () => window.open(catalog.supplierUrl, '_blank', 'noopener'));
}
function openMaterialAdjustment(id) {
  const material = state.materials.find(item => item.id === id); if (!material) return;
  openModal('Корректировка остатка', `<div class="detail-tile"><small>Сейчас на складе</small><b>${num(material.stock,1)} ${material.unit}</b></div><form id="adjustForm" class="form-grid" style="margin-top:14px"><div class="field"><label>Изменение в граммах</label><input name="delta" type="number" step="0.1" required placeholder="-150 или 50"></div><div class="field"><label>Минимальный остаток</label><input name="min" type="number" min="0" step="0.1" value="${material.min || 0}"></div><div class="field"><label>Место хранения</label><input name="location" value="${esc(material.location || '')}" placeholder="Стеллаж А · ящик 2"></div><div class="field"><label>Отнести расход к ковру</label><select name="productionId"><option value="">Не связывать</option>${state.productions.map(item => `<option value="${item.id}">${esc(item.name)} · ${item.id}</option>`).join('')}</select></div><div class="field full"><label>Причина</label><input name="reason" placeholder="Расход на проект, инвентаризация, пересыпали остаток…"></div></form>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-save>Применить</button>`);
  modalRoot.querySelector('[data-cancel]').onclick = closeModal;
  modalRoot.querySelector('[data-save]').onclick = () => {
    const fd = new FormData(document.getElementById('adjustForm'));
    const delta = Number(fd.get('delta')) || 0;
    if (!delta) return toast('Укажите изменение');
    if (delta < 0 && Math.abs(delta) > material.stock) return toast('Расход больше текущего остатка');
    material.stock = Math.max(0, material.stock + delta);
    material.min = Number(fd.get('min')) || 0;
    material.location = fd.get('location')?.trim() || material.location || '';
    if (delta < 0) consumeLots(material, Math.abs(delta));
    if (delta > 0) {
      material.lots = material.lots || [];
      material.lots.unshift({ id: `LOT-${Date.now()}`, date: new Date().toISOString().slice(0,10), batch: 'Корректировка', skeins: 0, initialWeight: delta, remainingWeight: delta, purchasePrice: 0, note: fd.get('reason') || '' });
    }
    const productionId = fd.get('productionId') || '';
    const linkedProduction = state.productions.find(item => item.id === productionId);
    const consumptionCost = delta < 0 ? Math.abs(delta) * (Number(material.pricePerUnit) || 0) : 0;
    if (linkedProduction && consumptionCost > 0) {
      linkedProduction.materialCost = (Number(linkedProduction.materialCost) || 0) + consumptionCost;
      linkedProduction.cost = (Number(linkedProduction.cost) || 0) + consumptionCost;
      const linkedProduct = state.products.find(item => item.productionId === linkedProduction.id || item.id === linkedProduction.id);
      if (linkedProduct) linkedProduct.cost = linkedProduction.cost;
    }
    material.movements = material.movements || [];
    material.movements.unshift({ id: `MOV-${Date.now()}`, date: todayISO(), type: delta > 0 ? 'Корректировка +' : 'Расход', delta, reason: fd.get('reason') || 'Без комментария', productionId, projectName: linkedProduction?.name || '', cost: consumptionCost });
    markSaving(); closeModal(); render(); toast(linkedProduction && consumptionCost > 0 ? `Остаток обновлён · в себестоимость ${rub(consumptionCost)}` : 'Остаток обновлён');
  };
}

function openNewOrder() {
  const projectOptions = state.projects.map(project => `<option value="${project.id}">${esc(project.name)} · ${esc(project.size)}</option>`).join('');
  openModal('Новый заказ', `<form id="orderForm" class="form-grid">
    <div class="field"><label>Клиент</label><input name="client" required></div><div class="field"><label>Телефон</label><input name="phone"></div>
    <div class="field"><label>Город</label><input name="city"></div><div class="field"><label>Источник</label><select name="source"><option>Авито</option><option>VK</option><option>Telegram</option><option>Рекомендация</option></select></div>
    <div class="field full"><label>Связать с готовым проектом</label><select name="projectId" id="orderProjectSelect"><option value="">Без привязки — заполнить вручную</option>${projectOptions}</select></div>
    <div class="field"><label>Проект / название</label><input name="project" required></div><div class="field"><label>Размер</label><input name="size"></div>
    <div class="field"><label>Стоимость</label><input name="amount" type="number"></div><div class="field"><label>Предоплата</label><input name="prepaid" type="number"></div>
    <div class="field full"><label>Пожелания</label><textarea name="note"></textarea></div>
  </form>`, `<button class="primary-btn" data-save>Создать заказ</button>`);
  const form = document.getElementById('orderForm');
  document.getElementById('orderProjectSelect').addEventListener('change', event => {
    const project = state.projects.find(item => item.id === event.target.value);
    if (!project) return;
    form.elements.project.value = project.name;
    form.elements.size.value = project.size === 'Не указан' ? '' : project.size;
    form.elements.amount.value = project.price || '';
  });
  modalRoot.querySelector('[data-save]').onclick = () => {
    const fd = new FormData(form);
    if (!fd.get('client') || !fd.get('project')) return toast('Заполните клиента и проект');
    const project = state.projects.find(item => item.id === fd.get('projectId'));
    const maxNumber = Math.max(58, ...state.orders.map(order => Number(String(order.id).split('-').at(-1)) || 0));
    const id = `ORD-${new Date().getFullYear()}-${maxNumber + 1}`;
    state.orders.unshift({
      id, clientId: `CL-${String(state.orders.length + 1).padStart(3,'0')}`, client: fd.get('client'), phone: fd.get('phone') || '', email: '', city: fd.get('city') || '',
      projectId: project?.id || '', project: fd.get('project'), pattern: project?.pattern || null, coverImage: project?.coverImage || '',
      size: fd.get('size') || project?.size || 'Не указан', material: project?.material || 'Не указан', amount: Number(fd.get('amount')) || project?.price || 0,
      prepaid: Number(fd.get('prepaid')) || 0, status: Number(fd.get('prepaid')) > 0 ? 'Предоплата' : 'Новый', deadline: '—', progress: 0, source: fd.get('source'), note: fd.get('note') || '', history: [], createdAt: todayISO(),
      payments: Number(fd.get('prepaid')) > 0 ? [{ id: `PAY-${id}-PRE-${Date.now()}`, type: 'Предоплата', amount: Number(fd.get('prepaid')), date: todayISO(), note: 'При создании заказа' }] : []
    });
    state.selectedOrderId = id; markSaving(); closeModal(); state.view = 'orders'; render(); toast('Заказ создан');
  };
}
function addOrderPayment(id) {
  const order = state.orders.find(item => item.id === id); if (!order) return;
  const balance = Math.max(0, (Number(order.amount) || 0) - orderPaid(order));
  openModal('Добавить оплату', `<div class="detail-grid"><div class="detail-tile"><small>Стоимость заказа</small><b>${rub(order.amount)}</b></div><div class="detail-tile"><small>Уже получено</small><b>${rub(orderPaid(order))}</b></div><div class="detail-tile"><small>Остаток</small><b>${rub(balance)}</b></div></div><form id="paymentForm" class="form-grid" style="margin-top:14px"><div class="field"><label>Тип оплаты</label><select name="type"><option>Предоплата</option><option ${orderPrepaid(order) ? 'selected' : ''}>Окончательный расчёт</option><option>Доплата</option></select></div><div class="field"><label>Сумма</label><input name="amount" type="number" min="0.01" step="0.01" value="${balance || ''}" required></div><div class="field"><label>Дата</label><input name="date" type="date" value="${todayISO()}"></div><div class="field full"><label>Комментарий</label><input name="note" placeholder="Перевод, наличные, номер операции…"></div></form>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-save>Сохранить оплату</button>`);
  modalRoot.querySelector('[data-cancel]').onclick = closeModal;
  modalRoot.querySelector('[data-save]').onclick = () => {
    const fd = new FormData(document.getElementById('paymentForm'));
    const amount = Number(fd.get('amount')) || 0;
    if (amount <= 0) return toast('Укажите сумму оплаты');
    order.payments = order.payments || [];
    order.payments.push({ id: `PAY-${order.id}-${Date.now()}`, type: fd.get('type') || 'Оплата', amount, date: fd.get('date') || todayISO(), note: fd.get('note') || '' });
    order.prepaid = orderPrepaid(order);
    const paid = orderPaid(order);
    if (paid >= Number(order.amount || 0) && ['Новый','Расчёт','Предоплата'].includes(order.status)) order.status = 'Оплачен';
    else if (paid > 0 && ['Новый','Расчёт'].includes(order.status)) order.status = 'Предоплата';
    markSaving(); closeModal(); render(); toast('Оплата учтена в финансах');
  };
}
function changeOrderStatus(id) {
  const order = state.orders.find(item => item.id === id); if (!order) return;
  const statuses = ['Новый','Расчёт','Предоплата','Оплачен','В работе','Готов','К отправке'];
  openModal('Статус заказа', `<div class="chips">${statuses.map(status => `<button class="chip ${status === order.status ? 'active' : ''}" data-status="${status}">${status}</button>`).join('')}</div>${order.status === 'Отправлен' ? '<div class="detail-tile" style="margin-top:14px"><small>Завершённый заказ</small><div>Ковёр убран с товарного склада и сохранён в разделе «Завершённые».</div></div>' : ''}`);
  modalRoot.querySelectorAll('[data-status]').forEach(button => button.onclick = () => {
    const status = button.dataset.status;
    if (status === 'К отправке') { closeModal(); prepareShipment(order.id); return; }
    order.status = status;
    if (status === 'Готов') { order.progress = 100; const product = ensureProductForOrder(order); product.inventoryStatus = 'stock'; if (product.status === 'В работе') product.status = 'Готов к фото'; }
    if (status !== 'К отправке') {
      const product = productForOrder(order);
      if (product && product.status === 'Отправлен') { product.inventoryStatus = 'stock'; product.status = status === 'Готов' ? 'Готов к фото' : product.status; product.location = 'Не назначено'; }
    }
    markSaving(); closeModal(); render();
    const unpaid = Math.max(0, (Number(order.amount) || 0) - orderPaid(order));
    toast('Статус обновлён');
  });
}
function openMessageTemplate(id) {
  const o=state.orders.find(x=>x.id===id);if(!o)return;
  const text=`Здравствуйте, ${o.client.split(' ')[0]}! Ваш заказ ${o.id} сейчас на этапе «${o.status}». Готовность — ${o.progress}%. Ориентировочный срок: ${o.deadline}. Прикрепляю актуальный статус VORS Studio.`;
  openModal('Шаблон сообщения',`<div class="field"><label>Текст для клиента</label><textarea id="messageText">${text}</textarea></div>`,`<button class="secondary-btn" data-copy>Скопировать</button><button class="primary-btn" data-status>Открыть статус</button>`);
  modalRoot.querySelector('[data-copy]').onclick=async()=>{try{await navigator.clipboard.writeText(document.getElementById('messageText').value);toast('Текст скопирован');}catch{toast('Выделите текст и скопируйте вручную');}};
  modalRoot.querySelector('[data-status]').onclick=()=>{closeModal();openClientStatus(id);};
}
function openClientStatus(id) {
  const o = state.orders.find(x => x.id === id); if (!o) return;
  const production = state.productions.find(item => item.projectId === o.projectId) || state.productions.find(item => item.name === o.project);
  const fallbackNames = ['Эскиз','Перенос','Набивка','Проклейка','Стрижка','Готово'];
  const stages = production?.stages?.length ? production.stages : fallbackNames.map((name, index) => ({ name, status: index < Math.floor(o.progress / (100 / fallbackNames.length)) ? 'done' : index === Math.floor(o.progress / (100 / fallbackNames.length)) ? 'active' : 'wait' }));
  const currentStage = stages.find(stage => stage.status === 'active')?.name || (o.progress >= 100 ? 'Готово' : o.status);
  openModal('Статус заказа', `<div class="client-status" id="clientStatusCard"><div class="client-status-head"><div class="brand-lockup"><div class="brand-mark"><span class="brand-v">V</span><span class="brand-thread"></span></div><div><strong>VORS</strong><span>Studio</span></div></div><span class="badge ${statusClass(o.status)}">${o.status}</span></div><div class="status-hero"><div class="status-cover">${visualForOrder(o)}</div><div><div class="item-meta">Заказ ${o.id}</div><h3 style="margin:6px 0;font-size:24px">Ковёр «${esc(o.project)}»</h3><div>${esc(o.client)}</div><div class="item-meta" style="margin-top:6px">${esc(o.size)} · срок ${esc(o.deadline)}</div></div></div><div class="status-progress"><div class="card-head"><h3>Готовность заказа</h3><b>${o.progress}%</b></div>${progress(o.progress)}</div><div class="status-stages">${stages.map((stage, index) => `<div class="status-stage ${stage.status === 'done' ? 'done' : stage.status === 'active' ? 'active' : ''}"><b>${stage.status === 'done' ? '✓' : index + 1}</b>${stage.name}</div>`).join('')}</div><div class="detail-tile" style="margin-top:16px"><small>Текущий этап</small><b>${currentStage}</b><div class="item-meta" style="margin-top:5px">Данные обновляются из производственной карточки VORS Studio.</div></div></div>`, `<button class="secondary-btn" data-print>Печать / скрин</button><button class="primary-btn" data-copy>Скопировать сообщение</button>`);
  modalRoot.querySelector('[data-print]').onclick = () => window.print();
  modalRoot.querySelector('[data-copy]').onclick = async () => {
    const text = `VORS Studio · ${o.id}\nКовёр «${o.project}»\nГотовность: ${o.progress}%\nТекущий этап: ${currentStage}\nСрок: ${o.deadline}`;
    try { await navigator.clipboard.writeText(text); toast('Статус скопирован'); } catch { toast('Скопируйте статус вручную'); }
  };
}

function openProduct(id) {
  const product = state.products.find(item => item.id === id); if (!product) return;
  const archived = product.inventoryStatus === 'archive';
  const margin = (Number(product.salePrice) || Number(product.retail) || 0) - (Number(product.cost) || 0);
  openModal(`Ковёр «${product.name}»`, `<div class="status-hero"><div class="status-cover">${visual(product, `Ковёр ${product.name}`)}</div><div><span class="badge ${statusClass(product.status)}">${product.status}</span><h3 style="font-size:24px;margin:8px 0">${product.name}</h3><div class="item-meta">${product.id} · ${product.size}</div></div></div><div class="detail-grid" style="margin-top:18px"><div class="detail-tile"><small>Состав</small><b>${product.composition}</b></div><div class="detail-tile"><small>Высота ворса</small><b>${product.pile}</b></div><div class="detail-tile"><small>Себестоимость</small><b>${rub(product.cost)}</b></div><div class="detail-tile"><small>${archived ? 'Цена продажи' : 'Розничная цена'}</small><b>${rub(archived ? (product.salePrice || product.retail) : product.retail)}</b></div>${archived ? `<div class="detail-tile"><small>Маржа</small><b>${rub(margin)}</b></div><div class="detail-tile"><small>Дата завершения</small><b>${product.shippedAt || product.completedAt || '—'}</b></div>` : `<div class="detail-tile"><small>Минимальная цена</small><b>${rub(product.minimum)}</b></div>`}</div><div class="detail-tile" style="margin-top:12px"><small>Хранение</small><b>${product.location}</b></div><div class="detail-tile" style="margin-top:12px"><small>Уход</small>${product.care}</div><div class="detail-tile" style="margin-top:12px"><small>Площадки</small>${product.channels.length ? product.channels.join(', ') : 'Пока не опубликован'}</div>`, archived ? `<button class="secondary-btn" data-close2>Закрыть</button>` : `<button class="secondary-btn" data-publish>Публикации</button><button class="primary-btn" data-sold>Продать / отправить</button>`);
  modalRoot.querySelector('[data-close2]')?.addEventListener('click', closeModal);
  modalRoot.querySelector('[data-publish]')?.addEventListener('click', () => { closeModal(); openPublish(id); });
  modalRoot.querySelector('[data-sold]')?.addEventListener('click', () => { closeModal(); openProductSale(id); });
}
function openProductSale(id) {
  const product = state.products.find(item => item.id === id); if (!product) return;
  const linkedOrder = state.orders.find(order => order.id === product.orderId) || state.orders.find(order => order.projectId && order.projectId === product.projectId);
  if (linkedOrder) {
    const balance = Math.max(0, (Number(linkedOrder.amount) || 0) - orderPaid(linkedOrder));
    openModal('Подготовить передачу', `<div class="detail-tile"><small>Связанный заказ</small><b>${linkedOrder.id} · ${esc(linkedOrder.client)}</b><div class="item-meta">Остаток к оплате: ${rub(balance)}</div></div><div class="detail-tile" style="margin-top:12px"><small>Следующий шаг</small><div>Проверим оплату, укажем место хранения и номер упаковки. После передачи службе доставки отдельно внесём трек-номер и завершим заказ.</div></div>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-send>Подготовить передачу</button>`);
    modalRoot.querySelector('[data-cancel]').onclick = closeModal;
    modalRoot.querySelector('[data-send]').onclick = () => { closeModal(); prepareShipment(linkedOrder.id); };
    return;
  }
  openModal('Продажа готового ковра', `<form id="saleForm" class="form-grid"><div class="field"><label>Покупатель</label><input name="client" required></div><div class="field"><label>Источник</label><select name="source"><option>Авито</option><option>VK</option><option>Telegram</option><option>Рекомендация</option><option>Другое</option></select></div><div class="field"><label>Цена продажи</label><input name="amount" type="number" min="0" value="${product.retail || ''}" required></div><div class="field"><label>Получено сейчас</label><input name="paid" type="number" min="0" value="${product.retail || ''}"></div></form>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-save>Завершить продажу</button>`);
  modalRoot.querySelector('[data-cancel]').onclick = closeModal;
  modalRoot.querySelector('[data-save]').onclick = () => {
    const fd = new FormData(document.getElementById('saleForm'));
    if (!fd.get('client')) return toast('Укажите покупателя');
    const maxNumber = Math.max(58, ...state.orders.map(order => Number(String(order.id).split('-').at(-1)) || 0));
    const orderId = `ORD-${new Date().getFullYear()}-${maxNumber + 1}`;
    const amount = Number(fd.get('amount')) || 0;
    const paid = Number(fd.get('paid')) || 0;
    const order = normalizeOrder({ id: orderId, clientId: `CL-${Date.now()}`, client: fd.get('client'), phone: '', email: '', city: '', projectId: product.projectId || '', project: product.name, pattern: product.pattern, coverImage: product.coverImage || '', size: product.size, material: product.composition, amount, prepaid: 0, status: 'Готов', deadline: '—', progress: 100, source: fd.get('source'), note: 'Продажа готового изделия', history: [], createdAt: todayISO(), payments: paid > 0 ? [{ id: `PAY-${orderId}-${Date.now()}`, type: 'Окончательный расчёт', amount: paid, date: todayISO(), note: 'Продажа готового изделия' }] : [] });
    state.orders.unshift(order); product.orderId = order.id; order.progress = 100; product.inventoryStatus = 'stock'; product.status = 'Готов'; markSaving(); closeModal(); render(); prepareShipment(order.id);
  };
}
function openPublish(id) {
  const p=state.products.find(x=>x.id===id);if(!p)return;
  openModal('Публикации',`<div class="field"><label>Название объявления</label><input id="pubTitle" value="Дизайнерский тафтинговый ковёр «${p.name}», ${p.size}"></div><div class="field" style="margin-top:12px"><label>Описание</label><textarea id="pubText">Авторский ковёр VORS Studio ручной работы. Размер ${p.size}, ${p.composition}, ворс ${p.pile}. Подойдёт для спальни, гостиной или как текстильное панно. Уход: ${p.care}. Цена ${rub(p.retail)}.</textarea></div><div class="chips" style="margin-top:14px">${['Авито','VK','Telegram'].map(c=>`<button class="chip ${p.channels.includes(c)?'active':''}" data-channel="${c}">${c}</button>`).join('')}</div>`,`<button class="secondary-btn" data-copy>Скопировать текст</button><button class="primary-btn" data-save>Сохранить площадки</button>`);
  modalRoot.querySelectorAll('[data-channel]').forEach(btn=>btn.onclick=()=>btn.classList.toggle('active'));
  modalRoot.querySelector('[data-copy]').onclick=async()=>{try{await navigator.clipboard.writeText(document.getElementById('pubTitle').value+'\n\n'+document.getElementById('pubText').value);toast('Объявление скопировано');}catch{toast('Скопируйте текст вручную');}};
  modalRoot.querySelector('[data-save]').onclick=()=>{p.channels=[...modalRoot.querySelectorAll('[data-channel].active')].map(b=>b.dataset.channel);p.status=p.channels.length?'Опубликован':p.status;markSaving();closeModal();render();toast('Площадки сохранены');};
}
function openNewProduct(){toast('Готовое изделие создаётся автоматически после завершения производства');}
function openExpense() {
  const projectOptions = state.projects.map(project => `<option value="${project.id}">${esc(project.name)}</option>`).join('');
  openModal('Новый расход', `<form id="expenseForm" class="form-grid"><div class="field"><label>Категория</label><select name="category"><option>Материалы</option><option>Реклама</option><option>Упаковка</option><option>Доставка</option><option>Оборудование</option><option>Прочее</option></select></div><div class="field"><label>Сумма</label><input name="amount" type="number" min="0.01" step="0.01" required></div><div class="field"><label>Дата</label><input name="date" type="date" value="${todayISO()}"></div><div class="field"><label>Отнести к себестоимости проекта</label><select name="projectId"><option value="">Не связывать</option>${projectOptions}</select></div><div class="field full"><label>Комментарий</label><textarea name="note"></textarea></div></form>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-save>Сохранить</button>`);
  modalRoot.querySelector('[data-cancel]').onclick = closeModal;
  modalRoot.querySelector('[data-save]').onclick = () => {
    const fd = new FormData(document.getElementById('expenseForm'));
    const amount = Number(fd.get('amount')) || 0;
    if (amount <= 0) return toast('Укажите сумму расхода');
    state.finance.transactions = state.finance.transactions || [];
    const project = state.projects.find(item => item.id === fd.get('projectId'));
    state.finance.transactions.unshift({ id: `EXP-${Date.now()}`, kind: 'expense', category: fd.get('category'), amount, date: fd.get('date') || todayISO(), title: fd.get('category'), note: fd.get('note') || '', projectId: project?.id || '', source: 'Ручной расход' });
    if (project) {
      const production = state.productions.find(item => item.projectId === project.id);
      if (production) { production.extraCost = (Number(production.extraCost) || 0) + amount; production.cost = (Number(production.cost) || 0) + amount; const product = state.products.find(item => item.productionId === production.id || item.projectId === project.id); if (product) product.cost = production.cost; }
    }
    markSaving(); closeModal(); render(); toast(project ? 'Расход сохранён и добавлен в себестоимость' : 'Расход сохранён');
  };
}
function shipOrder(id) {
  const shipment = state.shipments.find(item => item.orderId === id); if (!shipment) return toast('Карточка отправки не найдена');
  const order = state.orders.find(item => item.id === id);
  const balance = order ? Math.max(0, (Number(order.amount)||0)-orderPaid(order)) : 0;
  openModal('Подтвердить отправку', `<div class="detail-tile"><small>Заказ и упаковка</small><b>${esc(id)} · ${esc(shipment.package)}</b><div class="item-meta">${esc(shipment.location)}</div></div><div class="detail-tile" style="margin-top:12px"><small>Оплата</small><b>${balance > 0 ? `Остаток ${rub(balance)}` : 'Оплачено полностью'}</b></div><div class="field" style="margin-top:14px"><label>Трек-номер</label><input id="tracking" value="${esc(shipment.tracking || '')}" placeholder="Введите номер отправления"></div>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-save>Отправлено</button>`);
  modalRoot.querySelector('[data-cancel]').onclick = closeModal;
  modalRoot.querySelector('[data-save]').onclick = () => {
    const tracking = document.getElementById('tracking').value.trim();
    if (!tracking) return toast('Введите трек-номер');
    shipment.tracking = tracking; shipment.status = 'Отправлен'; shipment.shippedAt = todayISO();
    if (order) { order.tracking = tracking; finalizeOrder(order); }
    markSaving(); closeModal(); state.view = state.role === 'family' ? 'family' : 'orders'; render(); toast('Заказ отправлен и перенесён в завершённые');
  };
}

function openRoleModal(){const roles=[['owner','Владелец','Полный доступ'],['manager','Менеджер','Клиенты, заказы, публикации'],['family','Семейный режим','Только упаковка и отправка']];openModal('Режим работы',`<div class="list">${roles.map(([key,name,desc])=>`<button class="item-row" style="width:100%;text-align:left" data-role="${key}"><span style="font-size:25px">${key==='owner'?'👤':key==='manager'?'💬':'📦'}</span><div><div class="item-title">${name}</div><div class="item-meta">${desc}</div></div>${state.role===key?'<span class="badge success">Выбран</span>':'<span>→</span>'}</button>`).join('')}</div>`);modalRoot.querySelectorAll('[data-role]').forEach(btn=>btn.onclick=()=>{state.role=btn.dataset.role;state.view=state.role==='family'?'family':'today';markSaving();closeModal();render();toast('Режим изменён');});}

function clearAllData() {
  if (!confirm('Удалить все проекты, материалы, заказы, клиентов, изделия и финансовые данные на этом устройстве?')) return;
  state = clone(EMPTY_STATE);
  saveState();
  render();
  toast('Мастерская очищена');
}

function setupGlobalEvents() {
  document.querySelectorAll('.nav-item[data-view], .mobile-nav[data-view]').forEach(btn=>btn.addEventListener('click',()=>navigate(btn.dataset.view)));
  document.getElementById('roleButton').addEventListener('click',openRoleModal);
  document.getElementById('syncPill').addEventListener('click', openSyncInfo);
  document.getElementById('resetDemo').addEventListener('click', clearAllData);
  window.addEventListener('beforeunload',saveState);
  window.addEventListener('online',()=>{ setSyncStatus('saved'); toast('Соединение восстановлено'); });
  window.addEventListener('offline',()=>{ setSyncStatus('offline'); toast('Офлайн-режим: данные сохраняются на устройстве'); });
  setSyncStatus(navigator.onLine ? 'saved' : 'offline');
}

function registerServiceWorker(){if('serviceWorker'in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(console.warn));}}

setupGlobalEvents();
render();
registerServiceWorker();
setTimeout(()=>document.getElementById('splash')?.classList.add('hidden'),650);

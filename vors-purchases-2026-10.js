(function purchasePatch() {
  'use strict';
  const IMPORT_FLAG = 'vors-oct-2026-purchases-imported-v1';
  const IMPORT_DATE = '2026-10-16';
  const confirmed = [
    {id:'KD-TAIGA',catalogId:'CAT-CUSTOM-OCT26-DER-10',type:'Пряжа',brand:'Пехорка',line:'Деревенская',colorCode:'10',colorName:'ТАЙГА',name:'Пехорка «Деревенская» №10 Тайга',quantity:900,unit:'г',skeins:9,price:1746,supplier:'Кудель'},
    {id:'KD-TERRA',catalogId:'CAT-CUSTOM-OCT26-DER-30',type:'Пряжа',brand:'Пехорка',line:'Деревенская',colorCode:'30',colorName:'СВ.ТЕРРАКОТ',name:'Пехорка «Деревенская» №30 Св.Терракот',quantity:600,unit:'г',skeins:6,price:1164,supplier:'Кудель',note:'Название линейки сверить с этикеткой: в каталоге оттенок №30 также есть у «Секрет успеха».'},
    {id:'KD-SUROV',catalogId:'CAT-CUSTOM-OCT26-OVC-166',type:'Пряжа',brand:'Пехорка',line:'Овечья',colorCode:'166',colorName:'СУРОВЫЙ',name:'Пехорка «Овечья» №166 Суровый',quantity:1200,unit:'г',skeins:12,price:1728,supplier:'Кудель'},
    {id:'OZ-LUNE',catalogId:'CAT-CUSTOM-OCT26-LUNE',type:'Клей',brand:'LUNE COLOREE',line:'Акриловый клей для ковролина и тафтинга',colorCode:'',colorName:'',name:'Клей LUNE COLOREE акриловый, 1,5 кг',quantity:1500,unit:'г',skeins:1,price:580,supplier:'Ozon',supplierSku:'4235125394'}
  ];
  const pending = [
    {id:'OZ-KESTO',name:'Клей Kesto (точная модель не указана)',type:'Клей',supplier:'Ozon',quantity:null,price:null,unit:'г',status:'Нужны объём и стоимость'},
    {id:'OZ-ANTISLIP',name:'Антискользящая подложка (антислип)',type:'Подложка',supplier:'Ozon',quantity:null,price:null,unit:'м²',status:'Нужны размер и стоимость'},
    {id:'OZ-TAPE',name:'Киперная лента',type:'Кромка',supplier:'Ozon',quantity:null,price:null,unit:'м',status:'Нужны метраж и стоимость'}
  ];
  function getCatalog(spec) {
    let item = (state.materialCatalog || []).find(x => x.id === spec.catalogId);
    if (!item && spec.type === 'Пряжа' && spec.id !== 'KD-TERRA') {
      item = state.materialCatalog.find(x => x.type === 'Пряжа' &&
        String(x.line).toLowerCase() === spec.line.toLowerCase() &&
        String(x.colorCode).toLowerCase() === spec.colorCode.toLowerCase());
    }
    if (item) return item;
    item = {
      id:spec.catalogId,type:spec.type,brand:spec.brand,line:spec.line,
      colorCode:spec.colorCode,colorName:spec.colorName,
      name:spec.name,internalCode:'VORS-OCT26-'+spec.id,
      supplier:spec.supplier,supplierSku:spec.supplierSku || '',
      unit:spec.unit,nominalWeight:spec.type==='Пряжа'?100:0,lengthM:0,
      swatch:spec.type==='Пряжа'?(spec.id==='KD-TAIGA'?'#4f7c58':spec.id==='KD-TERRA'?'#b96647':'#eee9df'):'#d9b36c',
      composition:spec.type==='Клей'?'Акриловый водно-дисперсионный клей':'',
      suggestedMin:0,lastSkeinPrice:spec.skeins?spec.price/spec.skeins:0,
      availability:'Куплено',fitGroup:'На тест',system:false,
      tuftingNote:spec.note || 'Фактическая закупка; характеристики уточнить по упаковке.'
    };
    state.materialCatalog.push(item);
    return item;
  }
  function addConfirmed(spec) {
    const catalog = getCatalog(spec);
    let stock = state.materials.find(m => m.catalogId === catalog.id);
    if (!stock) {
      stock = {
        id:'MAT-OCT26-'+spec.id,catalogId:catalog.id,
        name:spec.name,type:spec.type,code:catalog.internalCode,internalCode:catalog.internalCode,
        brand:catalog.brand,line:catalog.line,colorCode:catalog.colorCode,
        colorName:catalog.colorName,supplier:spec.supplier,
        supplierSku:catalog.supplierSku || '',supplierUrl:catalog.supplierUrl || '',
        composition:catalog.composition || '',nominalWeight:catalog.nominalWeight || 0,
        lengthM:catalog.lengthM || 0,swatch:catalog.swatch || '#b8a58f',
        unit:spec.unit,stock:0,min:catalog.suggestedMin || 0,pricePerUnit:0,
        location:'',lots:[],movements:[]
      };
      state.materials.unshift(stock);
    }
    stock.lots = Array.isArray(stock.lots)?stock.lots:[];
    stock.movements = Array.isArray(stock.movements)?stock.movements:[];
    const lotId = 'LOT-OCT26-'+spec.id;
    if (stock.lots.some(l => l.id===lotId)) return;
    // Avoid double-counting a receipt manually entered before this update.
    if (stock.lots.some(l =>
      Number(l.initialWeight)===spec.quantity &&
      Number(l.purchasePrice)===spec.price &&
      /кудел|ozon|озон/i.test(String(l.batch||'')+' '+String(l.note||'')))) return;
    const previousQuantity = Number(stock.stock)||0;
    const previousValue = previousQuantity*(Number(stock.pricePerUnit)||0);
    stock.stock = previousQuantity+spec.quantity;
    stock.pricePerUnit = (previousValue+spec.price)/stock.stock;
    stock.lots.unshift({
      id:lotId,date:IMPORT_DATE,
      batch:'Закупка '+spec.supplier+' · октябрь 2026',
      supplier:spec.supplier,sku:spec.supplierSku || '',
      skeins:spec.skeins,initialWeight:spec.quantity,remainingWeight:spec.quantity,
      purchasePrice:spec.price,
      note:'Дата внесения в VORS: 16.10.2026; фактическая дата оплаты по чеку не установлена. '+(spec.note||'')
    });
    stock.movements.unshift({
      id:'MOV-OCT26-'+spec.id,date:IMPORT_DATE,
      type:'Поступление',delta:spec.quantity,
      reason:'Реальная закупка '+spec.supplier+' (сверка октября 2026)'
    });
  }
  function importPurchases() {
    state.meta = state.meta||{};
    if (state.meta.oct2026PurchaseSeeded) return;
    try {
      if (localStorage.getItem(IMPORT_FLAG)==='done') return;
    } catch (_) {}
    state.materialCatalog = state.materialCatalog || [];
    state.materials = state.materials || [];
    state.finance = state.finance || {transactions:[],hours:0};
    state.finance.transactions = state.finance.transactions || [];
    confirmed.forEach(addConfirmed);
    const shippingId='EXP-OCT26-KUDEL-SHIPPING';
    if (!state.finance.transactions.some(t=>t.id===shippingId)) {
      state.finance.transactions.unshift({
        id:shippingId,kind:'expense',category:'Доставка',amount:193,
        date:IMPORT_DATE,title:'Доставка «Кудель» · октябрь 2026',
        note:'Отдельный расход. Дата учёта 16.10.2026, дата оплаты требует сверки.',
        source:'Кудель'
      });
    }
    const existing = Array.isArray(state.purchaseRegister)?state.purchaseRegister:[];
    const byId=new Map(existing.map(item=>[item.id,item]));
    for (const spec of confirmed) {
      if (!byId.has('REG-'+spec.id)) byId.set('REG-'+spec.id,{
        id:'REG-'+spec.id,title:spec.name,category:spec.type,
        supplier:spec.supplier,quantity:spec.quantity,unit:spec.unit,
        amount:spec.price,status:'Подтверждено',enteredAt:IMPORT_DATE,
        note:spec.note || ''
      });
    }
    for (const item of pending) {
      if (!byId.has('REG-'+item.id)) byId.set('REG-'+item.id,{
        id:'REG-'+item.id,title:item.name,category:item.type,
        supplier:item.supplier,quantity:null,unit:item.unit,amount:null,
        status:item.status,enteredAt:IMPORT_DATE,
        note:'Покупка указана владельцем; сумму и складское количество пока не выдумываем.'
      });
    }
    if (!byId.has('REG-KD-DELIVERY')) byId.set('REG-KD-DELIVERY',{
      id:'REG-KD-DELIVERY',title:'Доставка заказа «Кудель»',category:'Доставка',
      supplier:'Кудель',quantity:1,unit:'услуга',amount:193,
      status:'Подтверждено',enteredAt:IMPORT_DATE,note:'Ozon: доставка 0 ₽.'
    });
    state.purchaseRegister=[...byId.values()];
    state.meta.oct2026PurchaseSeeded=true;
    state.meta.oct2026PurchaseNote='Частично подтверждённые закупки; общая сумма товаров около 8000 ₽, доставка Кудель 193 ₽.';
    saveState();
    try {
      const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}');
      if(saved.meta?.oct2026PurchaseSeeded) localStorage.setItem(IMPORT_FLAG,'done');
    } catch(e) { console.warn('Не удалось отметить миграцию закупок',e); }
  }
  const oldRenderMaterials=renderMaterials;
  renderMaterials=function renderMaterialsWithPurchases(){
    const html=oldRenderMaterials();
    if(state.materialView!=='stock'||!state.purchaseRegister?.length) return html;
    const list=state.purchaseRegister;
    const fixed=list.filter(x=>Number.isFinite(x.amount));
    const goods=fixed.filter(x=>x.category!=='Доставка').reduce((a,x)=>a+x.amount,0);
    const delivery=fixed.filter(x=>x.category==='Доставка').reduce((a,x)=>a+x.amount,0);
    const missing=list.filter(x=>x.amount===null||x.quantity===null);
    const expected=8000;
    const preview=list.map(x=>{
      const ready=x.amount!==null && x.quantity!==null;
      const quantity=x.quantity!==null ? `${num(x.quantity,0)} ${esc(x.unit)}` : 'Количество уточняется';
      return `<div class="item-row" style="display:flex;align-items:center;gap:10px;justify-content:space-between;padding:11px 2px;border-bottom:1px solid #8882">
        <div style="min-width:0;flex:1"><div class="item-title">${esc(x.title)}</div>
          <div class="item-meta">${esc(x.supplier)} · ${quantity}</div></div>
        <div style="text-align:right"><b>${ready?rub(x.amount):'—'}</b>
          <div class="item-meta" style="font-size:11px">${ready?'Учтено':'Нужен чек'}</div></div>
      </div>`;
    }).join('');
    const panel=`<article class="card card-pad" style="margin:0 0 18px">
      <div class="card-head"><div><h3>🧾 Реальные закупки · октябрь 2026</h3>
      <small>Перенесены из переписки · без потери существующих данных</small></div></div>
      <div class="kpi-grid" style="margin-top:14px">
        ${kpi('Подтверждённые расходы',rub(goods+delivery),'Товары '+rub(goods)+' + доставка '+rub(delivery))}
        ${kpi('Требуют сверки',String(missing.length)+' позиции','Kesto, антислип, киперная лента')}
      </div>
      <div class="item-meta" style="margin:12px 0">Ориентир по закупке: около ${rub(expected)} за товары + ${rub(193)} за доставку «Куделя»; Ozon доставка 0 ₽.
        Неразнесённая по чекам разница ≈ ${rub(Math.max(0,expected-goods))}. Она <b>не включена</b> в точные финансовые суммы и склад.</div>
      ${preview}
      <div class="item-meta" style="margin-top:12px">Даты партий — даты учёта, не подтверждённые даты оплаты. Неуточнённые покупки видны в реестре, но пока не увеличивают складские остатки и затраты.</div>
    </article>`;
    return html.replace('<section class="kpi-grid">',panel+'<section class="kpi-grid">');
  };
  importPurchases();
  const version=document.querySelector('.sidebar-footer .version b');
  if(version) version.textContent='1.2.2';
  render();
})();

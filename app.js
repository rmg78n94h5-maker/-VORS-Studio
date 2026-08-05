const STORAGE_KEY = 'vors-studio-0.1.1';
const APP_VERSION = '0.7.0';
const CATALOG_CHECKED_AT = '05.08.2026';
const CATALOG_SCOPE_NOTE = 'Варианты, опубликованные Куделем в таблицах товаров на дату проверки';

const PEHORKA_LINES = [
  {
    "key": "UDV",
    "line": "Удачный выбор",
    "composition": "100% объёмный акрил",
    "nominalWeight": 100,
    "lengthM": 200,
    "price": 147,
    "url": "https://kudel.ru/product/udachnyij-vyibor-pehorka/?page_type=skus",
    "fitGroup": "Рекомендовано",
    "strands": "2 нити",
    "note": "Базовая рабочая линейка: хороший баланс толщины, цены и объёма.",
    "productCode": "90234"
  },
  {
    "key": "ACR",
    "line": "Акрил",
    "composition": "100% акрил",
    "nominalWeight": 100,
    "lengthM": 300,
    "price": 117,
    "url": "https://kudel.ru/product/akril-pehorka/?page_type=skus",
    "fitGroup": "На тест",
    "strands": "2–3 нити",
    "note": "Тоньше базовой пряжи. Полезна ради дополнительных оттенков, но нужен пробник.",
    "productCode": "28425"
  },
  {
    "key": "NAR",
    "line": "Народная",
    "composition": "30% шерсть, 70% высокообъёмный акрил",
    "nominalWeight": 100,
    "lengthM": 220,
    "price": 174,
    "url": "https://kudel.ru/product/narodnaja-pehorka/?page_type=skus",
    "fitGroup": "Рекомендовано",
    "strands": "2 нити",
    "note": "Универсальная полушерсть с рабочим метражом для напольных и интерьерных ковров.",
    "productCode": "28506"
  },
  {
    "key": "NOS",
    "line": "Носочная",
    "composition": "50% шерсть, 50% акрил",
    "nominalWeight": 100,
    "lengthM": 200,
    "price": 158,
    "url": "https://kudel.ru/product/nosochnaja-pehorka/?page_type=skus",
    "fitGroup": "Рекомендовано",
    "strands": "2 нити",
    "note": "Плотная полушерсть с подходящей толщиной; название линейки не мешает использовать её в тафтинге.",
    "productCode": "13230"
  },
  {
    "key": "MER",
    "line": "Мериносовая",
    "composition": "50% мериносовая шерсть, 50% акрил",
    "nominalWeight": 100,
    "lengthM": 200,
    "price": 207,
    "url": "https://kudel.ru/product/merinosovaja-pehorka/?page_type=skus",
    "fitGroup": "Premium",
    "strands": "2 нити",
    "note": "Более мягкий премиальный вариант для ковров с повышенными требованиями к тактильности.",
    "productCode": "12620"
  },
  {
    "key": "ZPR",
    "line": "Зимняя премьера",
    "composition": "50% мериносовая шерсть, 50% высокообъёмный акрил",
    "nominalWeight": 100,
    "lengthM": 150,
    "price": 207,
    "url": "https://kudel.ru/product/zimnjaja-prem-era-pehorka/?page_type=skus",
    "fitGroup": "Рекомендовано",
    "strands": "1–2 нити",
    "note": "Толстая и объёмная пряжа. Сначала проверить свободное прохождение через пистолет.",
    "productCode": "11779"
  },
  {
    "key": "OVC",
    "line": "Овечья",
    "composition": "100% шерсть",
    "nominalWeight": 100,
    "lengthM": 200,
    "price": 160,
    "url": "https://kudel.ru/product/ovech-ja-pehorka/?page_type=skus",
    "fitGroup": "Premium",
    "strands": "2 нити",
    "note": "Натуральная шерсть для прочных ковров. Обязателен тест на жёсткость, линьку и стрижку.",
    "productCode": "202928"
  },
  {
    "key": "SEK",
    "line": "Секрет успеха",
    "composition": "100% шерсть",
    "nominalWeight": 100,
    "lengthM": 250,
    "price": 235,
    "url": "https://kudel.ru/product/sekret-uspeha-pehorka/?page_type=skus",
    "fitGroup": "Premium",
    "strands": "2–3 нити",
    "note": "Шерстяная линейка для премиальных изделий; метраж требует плотной подачи.",
    "productCode": "13869"
  },
  {
    "key": "DER",
    "line": "Деревенская",
    "composition": "100% полугрубая шерсть",
    "nominalWeight": 100,
    "lengthM": 250,
    "price": 216,
    "url": "https://kudel.ru/product/derevenskaja-pehorka/?page_type=skus",
    "fitGroup": "На тест",
    "strands": "2–3 нити",
    "note": "Потенциально прочная, но полугрубая: проверить жёсткость поверхности и качество карвинга.",
    "productCode": "11507"
  },
  {
    "key": "PER",
    "line": "Перспективная",
    "composition": "50% мериносовая шерсть, 50% акрил",
    "nominalWeight": 100,
    "lengthM": 270,
    "price": 207,
    "url": "https://kudel.ru/product/perspektivnaja-pehorka/?page_type=skus",
    "fitGroup": "На тест",
    "strands": "2–3 нити",
    "note": "Рабочий состав, но нить тоньше основной. Подходит после проверки плотности набивки.",
    "productCode": "28454"
  },
  {
    "key": "DZR",
    "line": "Джинсовый ряд объёмный",
    "composition": "50% шерсть, 50% акрил",
    "nominalWeight": 100,
    "lengthM": 250,
    "price": 192,
    "url": "https://kudel.ru/product/dzhinsovyij-rjad-ob_emnyij-pehorka/?page_type=skus",
    "fitGroup": "На тест",
    "strands": "2–3 нити",
    "note": "Твидовые меланжи для фактурных и интерьерных коллекций, не для точной цветовой графики.",
    "productCode": "137972"
  },
  {
    "key": "TVD",
    "line": "Твидовая",
    "composition": "80% шерсть, 20% полиамид",
    "nominalWeight": 50,
    "lengthM": 100,
    "price": 112,
    "url": "https://kudel.ru/product/tvidovaja-pehorka/?page_type=skus",
    "fitGroup": "На тест",
    "strands": "2 нити",
    "note": "Эквивалент 200 м на 100 г. Декоративные вкрапления дают фактуру, но требуют пробника.",
    "productCode": "283820"
  },
  {
    "key": "POP",
    "line": "Популярная",
    "composition": "50% импортная шерсть, 50% акрил",
    "nominalWeight": 100,
    "lengthM": 133,
    "price": 192,
    "url": "https://kudel.ru/product/populjarnaja-pehorka/?page_type=skus",
    "fitGroup": "На тест",
    "strands": "1 нить",
    "note": "Очень толстая пряжа. Проверить отверстие иглы и работу ножниц пистолета.",
    "productCode": "13477"
  },
  {
    "key": "DNV",
    "line": "Детская новинка",
    "composition": "100% высокообъёмный акрил",
    "nominalWeight": 50,
    "lengthM": 200,
    "price": 74,
    "url": "https://kudel.ru/product/detskaja-novinka-pehorka/?page_type=skus",
    "fitGroup": "На тест",
    "strands": "3–4 нити",
    "note": "Тонкая пряжа с полезной палитрой редких цветов. Использовать несколькими нитями.",
    "productCode": "90219"
  }
];

const PEHORKA_VARIANTS = {
  "UDV": [
    [
      "87686",
      "01",
      "БЕЛЫЙ",
      "В наличии"
    ],
    [
      "87687",
      "02",
      "ЧЕРНЫЙ",
      "В наличии"
    ],
    [
      "90239",
      "04",
      "Т.СИНИЙ",
      "В наличии"
    ],
    [
      "277433",
      "05",
      "ГОЛУБОЙ",
      "В наличии"
    ],
    [
      "277435",
      "08",
      "СВ.СЕРЫЙ",
      "В наличии"
    ],
    [
      "277437",
      "1409",
      "КРАСНЫЙ ТЕРРАКОТ",
      "Ожидается"
    ]
  ],
  "ACR": [
    [
      "28425",
      "11",
      "ЯР.РОЗОВЫЙ",
      "Ожидается"
    ]
  ],
  "NAR": [
    [
      "28506",
      "01",
      "БЕЛЫЙ",
      "В наличии"
    ],
    [
      "28527",
      "02",
      "ЧЕРНЫЙ",
      "В наличии"
    ],
    [
      "28518",
      "04",
      "Т.СИНИЙ",
      "В наличии"
    ],
    [
      "28523",
      "08",
      "СВ.СЕРЫЙ",
      "В наличии"
    ],
    [
      "28519",
      "20",
      "РОЗОВЫЙ",
      "В наличии"
    ],
    [
      "28526",
      "17",
      "ШОКОЛАД",
      "Ожидается"
    ],
    [
      "28522",
      "42",
      "СЛИВА",
      "Ожидается"
    ],
    [
      "28514",
      "117",
      "КИВИ",
      "Ожидается"
    ],
    [
      "28508",
      "118",
      "ПОДСОЛНУХ",
      "Ожидается"
    ],
    [
      "277457",
      "793",
      "ЯР.САЛАТ",
      "Ожидается"
    ]
  ],
  "NOS": [
    [
      "13230",
      "14",
      "МОРСКАЯ ВОЛНА",
      "В наличии"
    ],
    [
      "13235",
      "22",
      "СИРЕНЬ",
      "В наличии"
    ],
    [
      "19774",
      "48",
      "СЕРЫЙ",
      "В наличии"
    ],
    [
      "13250",
      "96",
      "СЕРЫЙ МЕЛАНЖ",
      "В наличии"
    ],
    [
      "13231",
      "165",
      "Т.БЕЖЕВЫЙ",
      "В наличии"
    ],
    [
      "13227",
      "01",
      "БЕЛЫЙ",
      "Ожидается"
    ],
    [
      "13228",
      "02",
      "ЧЕРНЫЙ",
      "Ожидается"
    ],
    [
      "87068",
      "03",
      "СВЕТЛОБЕЖЕВЫЙ",
      "Ожидается"
    ],
    [
      "13229",
      "07",
      "БОРДО",
      "Ожидается"
    ]
  ],
  "MER": [
    [
      "12620",
      "01",
      "БЕЛЫЙ",
      "В наличии"
    ],
    [
      "12621",
      "02",
      "ЧЕРНЫЙ",
      "В наличии"
    ],
    [
      "12622",
      "04",
      "Т.СИНИЙ",
      "В наличии"
    ],
    [
      "12624",
      "06",
      "КРАСНЫЙ",
      "В наличии"
    ],
    [
      "12625",
      "07",
      "БОРДО",
      "В наличии"
    ],
    [
      "12661",
      "89",
      "ФРЕЗ",
      "Ожидается"
    ],
    [
      "12652",
      "393",
      "СВ.МАРЕНГО",
      "Ожидается"
    ],
    [
      "277458",
      "510",
      "СВ.НАСТУРЦИЯ",
      "Ожидается"
    ]
  ],
  "ZPR": [
    [
      "11779",
      "01",
      "БЕЛЫЙ",
      "В наличии"
    ],
    [
      "11780",
      "02",
      "ЧЕРНЫЙ",
      "В наличии"
    ],
    [
      "28504",
      "04",
      "Т.СИНИЙ",
      "В наличии"
    ],
    [
      "110371",
      "06",
      "КРАСНЫЙ",
      "В наличии"
    ],
    [
      "110415",
      "21",
      "ПЫЛЬНЫЙ РОЗОВЫЙ",
      "В наличии"
    ],
    [
      "87913",
      "11",
      "ЯР.РОЗОВЫЙ",
      "Ожидается"
    ],
    [
      "110422",
      "49",
      "ФУКСИЯ",
      "Ожидается"
    ]
  ],
  "OVC": [
    [
      "202928",
      "251",
      "КОРИЧНЕВЫЙ",
      "В наличии"
    ],
    [
      "13267",
      "371",
      "НАТУРАЛЬНЫЙ СЕРЫЙ",
      "В наличии"
    ],
    [
      "13269",
      "530",
      "СВ.НАТУРАЛЬНЫЙ",
      "В наличии"
    ],
    [
      "13266",
      "166",
      "СУРОВЫЙ",
      "Ожидается"
    ]
  ],
  "SEK": [
    [
      "13869",
      "01",
      "БЕЛЫЙ",
      "В наличии"
    ],
    [
      "13871",
      "04",
      "Т.СИНИЙ",
      "В наличии"
    ],
    [
      "13872",
      "05",
      "ГОЛУБОЙ",
      "В наличии"
    ],
    [
      "28658",
      "30",
      "СВ.ТЕРРАКОТ",
      "В наличии"
    ],
    [
      "13891",
      "62",
      "КАШТАН",
      "В наличии"
    ],
    [
      "13870",
      "02",
      "ЧЕРНЫЙ",
      "Ожидается"
    ],
    [
      "13883",
      "335",
      "ИЗУМРУД",
      "Ожидается"
    ]
  ],
  "DER": [
    [
      "11507",
      "01",
      "БЕЛЫЙ",
      "В наличии"
    ],
    [
      "11508",
      "02",
      "ЧЕРНЫЙ",
      "В наличии"
    ],
    [
      "11510",
      "07",
      "БОРДО",
      "В наличии"
    ],
    [
      "11512",
      "14",
      "МОРСК.ВОЛНА",
      "В наличии"
    ],
    [
      "11513",
      "17",
      "ШОКОЛАД",
      "В наличии"
    ],
    [
      "11509",
      "04",
      "Т.СИНИЙ",
      "Ожидается"
    ],
    [
      "273057",
      "10",
      "ТАЙГА",
      "Ожидается"
    ]
  ],
  "PER": [
    [
      "28454",
      "01",
      "БЕЛЫЙ",
      "В наличии"
    ],
    [
      "28482",
      "02",
      "ЧЕРНЫЙ",
      "В наличии"
    ],
    [
      "28470",
      "04",
      "Т.СИНИЙ",
      "В наличии"
    ],
    [
      "28468",
      "05",
      "ГОЛУБОЙ",
      "В наличии"
    ],
    [
      "28460",
      "06",
      "КРАСНЫЙ",
      "В наличии"
    ],
    [
      "273094",
      "03",
      "СВ.БЕЖЕВЫЙ",
      "Ожидается"
    ],
    [
      "108005",
      "11",
      "ЯР.РОЗОВЫЙ",
      "Ожидается"
    ],
    [
      "28458",
      "12",
      "ЖЕЛТОК",
      "Ожидается"
    ],
    [
      "29173",
      "14",
      "МОРСКАЯ ВОЛНА",
      "Ожидается"
    ],
    [
      "81875",
      "30",
      "СВ.ТЕРРАКОТ",
      "Ожидается"
    ]
  ],
  "DZR": [
    [
      "137977",
      "777",
      "Т.ГОЛУБОЙ МЕЛАНЖ",
      "В наличии"
    ],
    [
      "140752",
      "814M",
      "СИНИЙ МЕЛАНЖ",
      "В наличии"
    ],
    [
      "140753",
      "817M",
      "СЕРЫЙ МЕЛАНЖ",
      "В наличии"
    ],
    [
      "140755",
      "826M",
      "СЕРО-КОРИЧНЕВЫЙ МЕЛАНЖ",
      "В наличии"
    ],
    [
      "140756",
      "871M",
      "МОРСКАЯ ВОЛНА",
      "В наличии"
    ]
  ],
  "TVD": [
    [
      "283825",
      "273",
      "ШТОРМ",
      "В наличии"
    ],
    [
      "283826",
      "746",
      "ЛАЗУРИТ",
      "В наличии"
    ],
    [
      "283827",
      "887",
      "ОРЕХ",
      "В наличии"
    ],
    [
      "283820",
      "1597",
      "САНГРИЯ",
      "В наличии"
    ],
    [
      "283821",
      "1598",
      "ПЕСТО",
      "В наличии"
    ]
  ],
  "POP": [
    [
      "13477",
      "01",
      "БЕЛЫЙ",
      "В наличии"
    ],
    [
      "13478",
      "02",
      "ЧЕРНЫЙ",
      "В наличии"
    ],
    [
      "13479",
      "04",
      "Т.СИНИЙ",
      "В наличии"
    ],
    [
      "13480",
      "05",
      "ГОЛУБОЙ",
      "В наличии"
    ],
    [
      "13481",
      "06",
      "КРАСНЫЙ",
      "В наличии"
    ],
    [
      "13486",
      "13",
      "Т.ОЛИВКОВЫЙ",
      "Ожидается"
    ],
    [
      "87721",
      "35",
      "МАРЕНГО",
      "Ожидается"
    ],
    [
      "13514",
      "42",
      "СЛИВА",
      "Ожидается"
    ],
    [
      "87720",
      "335",
      "ИЗУМРУД",
      "Ожидается"
    ],
    [
      "13519",
      "520",
      "ГОЛУБАЯ ПРОЛЕСКА",
      "Ожидается"
    ]
  ],
  "DNV": [
    [
      "11550",
      "01",
      "БЕЛЫЙ",
      "В наличии"
    ],
    [
      "11551",
      "02",
      "ЧЕРНЫЙ",
      "В наличии"
    ],
    [
      "11553",
      "06",
      "КРАСНЫЙ",
      "В наличии"
    ],
    [
      "11555",
      "08",
      "СВ.СЕРЫЙ",
      "В наличии"
    ],
    [
      "11556",
      "11",
      "ЯРКО РОЗОВЫЙ",
      "В наличии"
    ],
    [
      "90218",
      "33",
      "ЗОЛОТИСТАЯ ОЛИВА",
      "Ожидается"
    ],
    [
      "11589",
      "88",
      "КРАСНЫЙ МАК",
      "Ожидается"
    ],
    [
      "280360",
      "123",
      "ФЛАМИНГО",
      "Ожидается"
    ],
    [
      "273788",
      "195",
      "НЕЗАБУДКА",
      "Ожидается"
    ]
  ]
};


const CONSUMABLE_CATALOG_ITEMS = [
  { key: 'BASE-CLOTH', type: 'Основа', group: 'Основы и подложки', name: 'Тафтинговое полотно (основное)', unit: 'м²', min: 3, description: 'Основная ткань, которая натягивается на раму и в которую набивается ворс.', note: 'Списывать по фактически использованной площади с запасом на натяжение.' },
  { key: 'FINAL-BACKING', type: 'Подложка', group: 'Основы и подложки', name: 'Финишная подложка обычная', unit: 'м²', min: 3, description: 'Обычный задник, закрывающий клей и изнанку готового ковра.', note: 'Списывать по площади ковра с небольшим запасом на обрезку.' },
  { key: 'ANTI-SLIP', type: 'Подложка', group: 'Основы и подложки', name: 'Подложка антискользящая (антислип)', unit: 'м²', min: 3, description: 'Финишный задник с противоскользящим покрытием для напольных ковров.', note: 'Использовать для изделий, которые должны меньше скользить по полу.' },
  { key: 'FELT-BACKING', type: 'Подложка', group: 'Основы и подложки', name: 'Фетр / войлок для изнанки', unit: 'м²', min: 2, description: 'Плотный мягкий задник для декоративных изделий и панно.', note: 'Отдельный вариант финишной изнанки; не считать антислипом.' },

  { key: 'RUG-LATEX', type: 'Клей', group: 'Клеи', name: 'Ковровый латекс для фиксации ворса', unit: 'г', min: 1000, description: 'Эластичный клей для закрепления ворса с изнаночной стороны.', note: 'Лучше учитывать по весу: взвесить тару до и после работы.' },
  { key: 'BACKING-GLUE', type: 'Клей', group: 'Клеи', name: 'Эластичный клей для подложки', unit: 'г', min: 500, description: 'Клей для приклеивания обычной или антискользящей подложки.', note: 'Списывать отдельно от латекса, чтобы видеть реальную себестоимость отделки.' },
  { key: 'HOT-GLUE', type: 'Клей', group: 'Клеи', name: 'Стержни термоклея', unit: 'шт', min: 20, description: 'Стержни для клеевого пистолета при обработке краёв и локальной фиксации.', note: 'Не использовать как основной клей на всю площадь ковра.' },

  { key: 'TWILL-TAPE', type: 'Кромка', group: 'Обработка края', name: 'Киперная лента 30 мм', unit: 'м', min: 20, description: 'Хлопковая лента для аккуратного закрытия и укрепления края изнанки.', note: 'Списывать по фактическому периметру с запасом на стыки.' },
  { key: 'EDGE-TAPE', type: 'Кромка', group: 'Обработка края', name: 'Окантовочная лента для ковров', unit: 'м', min: 20, description: 'Прочная лента для технической или декоративной обработки края.', note: 'Альтернатива киперной ленте; расход считается по периметру.' },
  { key: 'EDGE-THREAD', type: 'Кромка', group: 'Обработка края', name: 'Прочная нить для обработки края', unit: 'м', min: 100, description: 'Нить для ручной прошивки, ремонта и дополнительного укрепления края.', note: 'Использовать только там, где край действительно прошивается.' },

  { key: 'STAPLES', type: 'Производство', group: 'Производственные расходники', name: 'Скобы для степлера', unit: 'шт', min: 500, description: 'Скобы для временной или постоянной фиксации полотна и отделочных материалов.', note: 'Мелкий производственный расходник; можно списывать на проект или в общие расходы.' },
  { key: 'TRIMMER-BLADES', type: 'Производство', group: 'Производственные расходники', name: 'Сменные лезвия для триммера', unit: 'шт', min: 3, description: 'Лезвия для выравнивания поверхности и карвинга.', note: 'При замене можно относить на конкретный проект либо на общепроизводственные расходы.' },
  { key: 'KNIFE-BLADES', type: 'Производство', group: 'Производственные расходники', name: 'Лезвия канцелярского ножа', unit: 'шт', min: 10, description: 'Сменные лезвия для раскроя основы, подложки и упаковки.', note: 'Учитывать как мелкий производственный расходник.' },
  { key: 'MACHINE-OIL', type: 'Производство', group: 'Производственные расходники', name: 'Масло для тафтингового пистолета и триммера', unit: 'мл', min: 100, description: 'Смазка для регулярного обслуживания рабочего оборудования.', note: 'Обычно относится к общепроизводственным расходам, а не к одному ковру.' },
  { key: 'MARKER', type: 'Производство', group: 'Производственные расходники', name: 'Маркер / мел для разметки', unit: 'шт', min: 2, description: 'Расходник для переноса рисунка и технологических отметок.', note: 'Можно учитывать по штукам без попытки делить один маркер на каждый ковёр.' },
  { key: 'GLOVES', type: 'Производство', group: 'Производственные расходники', name: 'Нитриловые перчатки', unit: 'пара', min: 20, description: 'Защита рук при работе с клеем, латексом и отделочными материалами.', note: 'Списывать по фактически использованным парам.' },

  { key: 'KRAFT', type: 'Упаковка', group: 'Упаковка и отправка', name: 'Крафт-бумага упаковочная', unit: 'м²', min: 10, description: 'Наружная или промежуточная упаковка готового ковра.', note: 'Списывать по использованной площади.' },
  { key: 'BUBBLE-WRAP', type: 'Упаковка', group: 'Упаковка и отправка', name: 'Пузырчатая плёнка', unit: 'м²', min: 10, description: 'Защитный слой для отправки и хранения готовых изделий.', note: 'Списывать по площади, а не по условным рулонам.' },
  { key: 'STRETCH', type: 'Упаковка', group: 'Упаковка и отправка', name: 'Стрейч-плёнка', unit: 'м', min: 50, description: 'Фиксация свёрнутого ковра и защита упаковки.', note: 'Учитывать метрами; длину можно оценивать по расходу рулона.' },
  { key: 'PACKING-TAPE', type: 'Упаковка', group: 'Упаковка и отправка', name: 'Скотч упаковочный', unit: 'м', min: 50, description: 'Закрытие коробок, тубусов и наружной упаковки.', note: 'Списывать метрами или периодически общей корректировкой.' },
  { key: 'RUG-BAG', type: 'Упаковка', group: 'Упаковка и отправка', name: 'Защитный пакет / мешок для ковра', unit: 'шт', min: 5, description: 'Индивидуальный пакет или мешок для хранения и передачи ковра.', note: 'Одна упаковка обычно списывается на одно изделие.' },
  { key: 'BOX-TUBE', type: 'Упаковка', group: 'Упаковка и отправка', name: 'Коробка / тубус для отправки', unit: 'шт', min: 5, description: 'Жёсткая транспортная упаковка подходящего размера.', note: 'Стоимость выбранной коробки или тубуса относить к заказу.' },
  { key: 'BRAND-TAG', type: 'Упаковка', group: 'Упаковка и отправка', name: 'Бирка VORS Studio', unit: 'шт', min: 20, description: 'Фирменная бирка готового изделия.', note: 'Одна бирка на один ковёр, если не предусмотрено иное.' },
  { key: 'CARE-CARD', type: 'Упаковка', group: 'Упаковка и отправка', name: 'Вкладыш с рекомендациями по уходу', unit: 'шт', min: 20, description: 'Печатная памятка для клиента.', note: 'Один вкладыш на отправление.' },
  { key: 'ADDRESS-LABEL', type: 'Упаковка', group: 'Упаковка и отправка', name: 'Адресная этикетка / наклейка', unit: 'шт', min: 20, description: 'Этикетка для маркировки упаковки и отправления.', note: 'Обычно одна штука на отправление.' }
];

function buildConsumableCatalog() {
  const swatches = { 'Основа': '#d9c7a7', 'Подложка': '#8b8e8a', 'Клей': '#d9b36c', 'Кромка': '#a46b50', 'Производство': '#65727d', 'Упаковка': '#9c8065' };
  return CONSUMABLE_CATALOG_ITEMS.map((item, index) => ({
    id: `CAT-CONS-${item.key}`, type: item.type, brand: '', line: item.group, colorCode: '', colorName: item.name,
    name: item.name, internalCode: `VORS-${item.key}`, supplier: '', supplierSku: '', composition: item.description,
    nominalWeight: 0, lengthM: 0, metersPer100g: 0, unit: item.unit, suggestedMin: item.min,
    lastSkeinPrice: 0, pricePer100g: 0, pricePerKg: 0, supplierUrl: '', swatch: swatches[item.type] || '#b8a58f',
    availability: 'Справочник', checkedAt: '', catalogScope: 'Системная библиотека расходников VORS Studio',
    fitGroup: 'Расходник', strandRecommendation: `Учёт: ${item.unit}`, tuftingNote: item.note,
    system: true, sortOrder: 100000 + index
  }));
}

function safeCatalogCode(value) {
  return String(value || 'BASE').toUpperCase().replace(/[^0-9A-ZА-ЯЁ]+/g, '-').replace(/^-+|-+$/g, '') || 'BASE';
}
function swatchForColor(name = '') {
  const value = String(name).toLowerCase();
  const pairs = [
    [['бел','суров','натурал'], '#eee9df'], [['черн'], '#222429'], [['антрацит','маренго'], '#50545a'],
    [['св.сер','светло-сер','серый'], '#b8bab9'], [['т.син','синий','джинс'], '#273d63'], [['голуб','незабуд','лазур'], '#70a6c7'],
    [['морск','бирюз'], '#2f8587'], [['красн','мак'], '#b63c3f'], [['бордо','сангр'], '#7d2e42'], [['розов','фрез','фламинго'], '#d58da5'],
    [['фукс'], '#b83378'], [['террак','настур'], '#b96647'], [['желт','подсолн','золот'], '#d5ae3f'], [['олив','хаки','песто'], '#7a8150'],
    [['зел','киви','салат','изумруд','тайга'], '#4f7c58'], [['сирен','слива'], '#7e6488'], [['беж','орех','каштан','шоколад','корич'], '#8b6b55'],
    [['шторм'], '#66737d']
  ];
  for (const [tokens, color] of pairs) if (tokens.some(token => value.includes(token))) return color;
  return '#b8a58f';
}
function buildMaterialCatalog() {
  return PEHORKA_LINES.flatMap((line, lineIndex) => (PEHORKA_VARIANTS[line.key] || []).map((variant, colorIndex) => {
    const [supplierSku, colorCode, colorName, availability] = variant;
    const metersPer100g = line.nominalWeight ? Math.round(line.lengthM * 1000 / line.nominalWeight) / 10 : 0;
    const pricePer100g = line.nominalWeight ? Math.round(line.price * 10000 / line.nominalWeight) / 100 : 0;
    const stableCode = line.key === 'UDV' ? safeCatalogCode(colorCode) : safeCatalogCode(supplierSku || colorCode);
    return {
      id: `CAT-PEH-${line.key}-${stableCode}`, type: 'Пряжа', brand: 'Пехорка', line: line.line,
      colorCode, colorName, internalCode: `PEH-${line.key}-${safeCatalogCode(colorCode)}`, supplier: 'Кудель', supplierSku,
      composition: line.composition, nominalWeight: line.nominalWeight, lengthM: line.lengthM, metersPer100g, unit: 'г',
      lastSkeinPrice: line.price, pricePer100g, pricePerKg: pricePer100g * 10, supplierUrl: line.url,
      swatch: swatchForColor(colorName), availability, checkedAt: CATALOG_CHECKED_AT, catalogScope: CATALOG_SCOPE_NOTE,
      fitGroup: line.fitGroup, strandRecommendation: line.strands, tuftingNote: line.note, productCode: line.productCode,
      system: true, sortOrder: lineIndex * 1000 + colorIndex
    };
  }));
}

const MATERIAL_CATALOG_SEED = [...buildMaterialCatalog(), ...buildConsumableCatalog()];

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
  const seedMap = new Map(MATERIAL_CATALOG_SEED.map(item => [item.id, clone(item)]));
  const customItems = [];
  savedCatalog.forEach(item => {
    const id = String(item?.id || '');
    if (seedMap.has(id)) {
      const seed = seedMap.get(id);
      seedMap.set(id, {
        ...item,
        ...seed,
        tested: Boolean(item.tested),
        testNotes: item.testNotes || '',
        ourRating: item.ourRating ?? null
      });
      return;
    }
    if (!id.startsWith('CAT-PEH-')) customItems.push(item);
  });
  return [...seedMap.values(), ...customItems];
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
  return { coverImage: '', projectId: '', history: [], payments, createdAt, completedAt: null, shippedAt: null, isTest: false, ...item, payments };
}
function normalizeProduct(item) {
  const archived = ['Продан', 'Отправлен', 'Завершён'].includes(item.status);
  return {
    coverImage: '', projectId: '', orderId: '', productionId: item.id || '', cost: 0, salePrice: 0,
    inventoryStatus: archived ? 'archive' : 'stock', createdAt: todayISO(), completedAt: null, shippedAt: null,
    channels: [], days: 0, isTest: false, ...item,
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
  merged.productions = (merged.productions || []).map(item => {
    const materialUsage = Array.isArray(item.materialUsage) ? item.materialUsage.map(usage => ({
      id: usage.id || `USE-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      materialId: usage.materialId || '', catalogId: usage.catalogId || '', materialName: usage.materialName || 'Материал',
      type: usage.type || 'Материал', unit: usage.unit || 'шт', quantity: Number(usage.quantity) || 0,
      unitCost: Number(usage.unitCost) || 0, cost: Number(usage.cost) || 0, stage: usage.stage || 'Общее',
      date: usage.date || todayISO(), note: usage.note || ''
    })) : [];
    const usageCost = materialUsage.reduce((sum, usage) => sum + (Number(usage.cost) || 0), 0);
    const materialCost = Math.max(Number(item.materialCost) || 0, usageCost);
    const existingCost = Number(item.cost) || 0;
    const extraCost = Math.max(Number(item.extraCost) || 0, existingCost - materialCost, 0);
    return { coverImage: '', completedAt: null, isTest: false, handoffStatus: '', ...item, materialUsage, materialCost, extraCost, cost: materialCost + extraCost };
  });

  // Переносим старые складские списания, которые уже были связаны с производством,
  // в новый журнал материалов конкретного ковра.
  merged.productions.forEach(production => {
    if (production.materialUsage.length) return;
    const restored = [];
    (merged.materials || []).forEach(material => (material.movements || []).forEach(move => {
      if (move.productionId !== production.id || Number(move.delta) >= 0) return;
      const quantity = Math.abs(Number(move.delta) || 0);
      if (!quantity) return;
      restored.push({
        id: move.usageId || `USE-MIG-${move.id || Date.now()}-${material.id}`,
        materialId: material.id, catalogId: material.catalogId || '', materialName: material.name || 'Материал',
        type: material.type || 'Материал', unit: material.unit || 'шт', quantity,
        unitCost: quantity ? (Number(move.cost) || quantity * (Number(material.pricePerUnit) || 0)) / quantity : 0,
        cost: Number(move.cost) || quantity * (Number(material.pricePerUnit) || 0), stage: move.stage || 'Общее',
        date: move.date || todayISO(), note: move.reason || ''
      });
    }));
    if (restored.length) {
      production.materialUsage = restored;
      production.materialCost = restored.reduce((sum, usage) => sum + usage.cost, 0);
      production.cost = production.materialCost + (Number(production.extraCost) || 0);
    }
  });

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
        location: 'Не назначено', status: 'Готов к фото', cost: Number(production.cost) || 0, createdAt: production.completedAt || todayISO(), isTest: Boolean(production.isTest || project?.isTest || order?.isTest)
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
        completedAt: order.shippedAt || todayISO(), shippedAt: order.shippedAt || todayISO(), isTest: Boolean(order.isTest || project?.isTest || production?.isTest)
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
    merged.projects = (parsed.projects || []).map(project => ({ coverImage: '', pattern: null, completedAt: null, isTest: false, ...project }));
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
  if (['Готов','Опубликован','Отправлен','Оплачен','На складе'].includes(status)) return 'success';
  if (['В работе','Предоплата'].includes(status)) return 'clay';
  if (['Расчёт','Идея','Готов к фото','Готов к передаче','К отправке'].includes(status)) return 'warn';
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
  if (item.type !== 'Пряжа') return `${item.colorName || item.name || item.line} · ${item.type} · ${item.internalCode || ''}`;
  const supplierCode = item.supplierSku ? ` · Кудель ${item.supplierSku}` : '';
  return `${item.brand} · ${item.line} · ${item.colorCode} ${item.colorName}${supplierCode}`;
}
function materialSearchText(item) {
  return [item.brand, item.line, item.colorCode, item.colorName, item.internalCode, item.supplier, item.supplierSku, item.composition, item.fitGroup, item.strandRecommendation, item.availability].filter(Boolean).join(' ').toLowerCase();
}
function materialName(item) { return item.type === 'Пряжа' ? `${item.brand} «${item.line}» · ${item.colorCode} ${item.colorName}` : (item.colorName || item.name || item.line || 'Материал'); }
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
function testBadge(item) { return item?.isTest ? '<span class="badge test">Тест</span>' : ''; }

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
    if (amount > 0) entries.push({ id: `PUR-${material.id}-${lot.id}`, kind: 'expense', category: material.type === 'Упаковка' ? 'Упаковка' : 'Материалы', amount, date: lot.date || todayISO(), title: material.name || 'Покупка материала', note: lot.batch || '', source: 'Склад' });
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
      status: order.progress >= 100 ? 'Готов к передаче' : 'В работе', cost: Number(production?.cost) || 0, createdAt: production?.completedAt || todayISO(),
      isTest: Boolean(order.isTest || project?.isTest || production?.isTest)
    });
    state.products.unshift(product);
  }
  product.orderId = order.id;
  product.projectId = product.projectId || order.projectId || project?.id || '';
  product.productionId = product.productionId || production?.id || '';
  product.cost = Math.max(Number(product.cost) || 0, Number(production?.cost) || 0);
  product.isTest = Boolean(product.isTest || order.isTest || project?.isTest || production?.isTest);
  return product;
}
function finalizeOrder(order) {
  if (!order) return;
  order.status = 'Отправлен';
  order.progress = 100;
  order.shippedAt = order.shippedAt || todayISO();
  order.completedAt = order.completedAt || order.shippedAt;
  const product = ensureProductForOrder(order);
  product.inventoryStatus = 'archive';
  product.status = 'Отправлен';
  product.location = 'Отправлено клиенту';
  product.salePrice = Number(order.amount) || Number(product.retail) || 0;
  product.shippedAt = order.shippedAt;
  product.completedAt = product.completedAt || order.shippedAt;
  product.isTest = Boolean(product.isTest || order.isTest);
  const project = state.projects.find(item => item.id === order.projectId) || state.projects.find(item => item.name === order.project);
  if (project) { project.status = 'Завершён'; project.progress = 100; project.completedAt = order.shippedAt; }
  const production = productionForOrder(order);
  if (production) { production.progress = 100; production.timerRunning = false; production.completedAt = production.completedAt || order.shippedAt; production.handoffStatus = 'shipped'; }
  const shipment = state.shipments.find(item => item.orderId === order.id);
  if (shipment) { shipment.status = 'Отправлен'; shipment.shippedAt = order.shippedAt; shipment.tracking = shipment.tracking || order.tracking || ''; }
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
  const active = state.productions.length;
  const lowItems = state.materials.filter(m => m.stock < m.min);
  const nearest = state.orders[0];
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
          <div class="list">${state.productions.length ? state.productions.map(p => `<div class="item-row"><div class="thumb">${visualForProduction(p)}</div><div><div class="item-title">${p.name}</div><div class="item-meta">${p.id} · ${p.stages.find(s => s.status === 'active')?.name || 'В работе'}</div>${progress(p.progress)}</div><div class="item-side"><b>${p.progress}%</b><div class="item-meta">${p.elapsedDays}/${p.planDays} дней</div></div></div>`).join('') : '<div class="empty"><strong>Производство ещё не запущено</strong>Создайте проект и отправьте его в работу.</div>'}</div>
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
    <div class="project-body"><div class="project-top"><div><div class="project-name">${p.name}</div><div class="project-meta">${p.size} · ${p.category}</div></div><div class="badge-group">${testBadge(p)}<span class="badge ${statusClass(p.status)}">${p.status}</span></div></div>
    <div style="margin-top:14px">${progress(p.progress)}</div>
    <div class="project-footer"><span class="price">${rub(p.price)}</span><span class="project-meta">План: ${p.planDays} дней</span></div></div>
  </article>`;
}

const PRODUCTION_MATERIAL_REQUIREMENTS = {
  'Набивка': [
    { label: 'Пряжа', types: ['Пряжа'] },
    { label: 'Тафтинговое полотно', types: ['Основа'] }
  ],
  'Проклейка': [{ label: 'Клей / латекс', types: ['Клей'] }],
  'Подложка': [{ label: 'Финишная подложка', types: ['Подложка'] }],
  'Упаковка': [{ label: 'Упаковка', types: ['Упаковка'] }]
};

function productionUsage(production) {
  production.materialUsage = Array.isArray(production.materialUsage) ? production.materialUsage : [];
  return production.materialUsage;
}
function recalcProductionCost(production) {
  const materialCost = productionUsage(production).reduce((sum, usage) => sum + (Number(usage.cost) || 0), 0);
  production.materialCost = materialCost;
  production.extraCost = Number(production.extraCost) || 0;
  production.cost = materialCost + production.extraCost;
  const product = state.products.find(item => item.productionId === production.id || item.id === production.id || (production.projectId && item.projectId === production.projectId));
  if (product) product.cost = production.cost;
}
function usageHasTypes(production, types = []) {
  return productionUsage(production).some(usage => types.includes(usage.type) && Number(usage.quantity) > 0);
}
function missingMaterialsForStage(production, stageName) {
  return (PRODUCTION_MATERIAL_REQUIREMENTS[stageName] || []).filter(requirement => !usageHasTypes(production, requirement.types));
}
function overallMaterialChecklist(production) {
  const items = [
    { label: 'Пряжа', types: ['Пряжа'], required: true },
    { label: 'Тафтинговое полотно', types: ['Основа'], required: true },
    { label: 'Клей / латекс', types: ['Клей'], required: true },
    { label: 'Подложка', types: ['Подложка'], required: true },
    { label: 'Кромка', types: ['Кромка'], required: false },
    { label: 'Упаковка', types: ['Упаковка'], required: true }
  ];
  return items.map(item => ({ ...item, done: usageHasTypes(production, item.types) }));
}
function currentProductionStage(production) {
  return production.stages?.find(stage => stage.status === 'active')?.name || (production.progress >= 100 ? 'Готово' : 'Общее');
}
function productionMaterialSummary(production) {
  const usage = productionUsage(production);
  const quantity = usage.length;
  return `${quantity} ${quantity === 1 ? 'списание' : quantity < 5 ? 'списания' : 'списаний'} · ${rub(production.materialCost || 0)}`;
}

function renderProduction() {
  return `
    ${viewHeader('Производство', 'Каждый этап, время, расход и качество — под контролем.', `<button class="primary-btn" data-action="start-production">＋ Запустить ковёр</button>`)}
    <section class="production-list">
      ${state.productions.length ? state.productions.map(p => {
        const checklist = overallMaterialChecklist(p);
        const requiredReady = checklist.filter(item => item.required).every(item => item.done);
        return `
        <article class="card production-card">
          <div class="production-card-head"><div class="thumb">${visualForProduction(p)}</div><div style="flex:1"><div class="project-top"><div><div class="project-name">${p.name}</div><div class="project-meta">${p.id}</div></div><div class="badge-group">${testBadge(p)}<span class="badge ${statusClass(p.progress >= 100 ? 'Готов' : 'В работе')}">${p.progress >= 100 ? 'Готов' : 'В работе'}</span></div></div><div style="margin-top:10px">${progress(p.progress)}</div></div><div class="item-side"><div class="timer" data-timer="${p.id}">${fmtTime(p.timerSeconds)}</div><div class="item-meta">активное время</div></div></div>
          <div class="grid cols-4 production-kpis" style="margin-top:14px"><div class="detail-tile"><small>План</small><b>${p.planDays} дней</b></div><div class="detail-tile"><small>Факт</small><b>${p.elapsedDays} дней</b></div><div class="detail-tile"><small>Материалы</small><b>${rub(p.materialCost || 0)}</b><span>${productionUsage(p).length} поз.</span></div><div class="detail-tile"><small>Себестоимость</small><b>${rub(p.cost)}</b><span>${requiredReady ? 'Основное учтено' : 'Есть пропуски'}</span></div></div>
          <div class="material-check-mini">${checklist.map(item => `<span class="material-check-chip ${item.done ? 'done' : item.required ? 'missing' : 'optional'}">${item.done ? '✓' : item.required ? '!' : '○'} ${item.label}</span>`).join('')}</div>
          <div class="stages">${p.stages.map((stage, i) => `<div class="stage ${stage.status}"><span class="stage-index">${stage.status === 'done' ? '✓' : i + 1}</span><b>${stage.name}</b><span class="badge ${stage.status === 'active' ? 'clay' : stage.status === 'done' ? 'success' : ''}">${stage.status === 'done' ? 'Готово' : stage.status === 'active' ? 'В процессе' : 'Ожидает'}</span></div>`).join('')}</div>
          <div class="production-actions"><button class="secondary-btn" data-action="production-materials" data-id="${p.id}">Материалы · ${productionUsage(p).length}</button>${p.progress < 100 ? `<button class="primary-btn" data-action="timer" data-id="${p.id}">${p.timerRunning ? 'Пауза' : 'Старт таймера'}</button><button class="secondary-btn" data-action="next-stage" data-id="${p.id}">Завершить этап</button>` : `<button class="primary-btn" data-action="prepare-shipment" data-id="${p.id}">Передать на склад / к отправке</button>`}<button class="secondary-btn" data-action="production-note" data-id="${p.id}">Заметка</button><button class="secondary-btn" data-action="client-status-by-rug" data-id="${p.id}">Статус клиенту</button>${p.isTest ? `<button class="danger-btn" data-action="delete-test-project" data-id="${p.projectId}">Удалить тест целиком</button>` : ''}</div>
        </article>`;
      }).join('') : '<article class="card empty"><strong>Производство пусто</strong>Сначала создайте проект, затем запустите его в работу.</article>'}
    </section>`;
}
function renderMaterials() {
  const mode = state.materialView || 'stock';
  const low = state.materials.filter(m => m.stock < m.min).length;
  const total = state.materials.reduce((sum, m) => sum + m.stock * (m.pricePerUnit || 0), 0);
  const yarnWeight = state.materials.filter(m => m.type === 'Пряжа').reduce((sum, m) => sum + m.stock, 0);
  const yarnCatalog = state.materialCatalog.filter(item => item.type === 'Пряжа');
  const consumableCatalog = state.materialCatalog.filter(item => item.type !== 'Пряжа');
  const lineCount = new Set(yarnCatalog.filter(item => item.system).map(item => item.line)).size;
  const variantCount = yarnCatalog.filter(item => item.system).length;
  const consumableCount = consumableCatalog.filter(item => item.system).length;
  const headerActions = mode === 'stock'
    ? `<button class="secondary-btn" data-material-mode="catalog">Библиотека</button><button class="primary-btn" data-action="new-material">＋ Поступление</button>`
    : `<button class="secondary-btn" data-material-mode="stock">Мой склад</button><button class="primary-btn" data-action="new-catalog-item">＋ Позиция</button>`;
  const content = mode === 'stock' ? `
    <section class="kpi-grid">
      ${kpi('Стоимость запасов', rub(total), `${state.materials.length} складских позиций`)}
      ${kpi('Ниже минимума', `${low} поз.`, low ? 'Нужно пополнить запас' : 'Критичных остатков нет')}
      ${kpi('Пряжа на складе', `${num(yarnWeight / 1000, 2)} кг`, 'Пряжа учитывается по фактическому весу')}
      ${kpi('Расходники на складе', `${state.materials.filter(m => m.type !== 'Пряжа').length} поз.`, 'Основа, клей, подложки, кромка и упаковка')}
    </section>
    <div class="toolbar"><div class="search"><input id="materialSearch" placeholder="Название, категория, цвет, код или артикул" /></div><div class="chips" id="materialChips"><button class="chip active" data-filter="Все">Все</button>${[...new Set(state.materials.map(m => m.type))].map(c => `<button class="chip" data-filter="${c}">${c}</button>`).join('')}</div></div>
    <article class="card card-pad"><div class="material-table" id="materialTable">${state.materials.length ? state.materials.map(materialRow).join('') : '<div class="empty"><strong>Склад пока пуст</strong>Откройте «Поступление», выберите позицию из библиотеки и внесите фактическое количество и стоимость покупки.</div>'}</div></article>` : `
    <article class="card card-pad catalog-intro"><div><h2>Библиотека материалов VORS Studio</h2><p>Отобранная пряжа Пехорка с Куделя и системный набор расходников: основа, подложки, клеи, обработка края, производство и упаковка.</p></div><div class="supplier-badge"><b>${lineCount} линеек пряжи</b><span>${consumableCount} расходников</span></div></article>
    <section class="kpi-grid catalog-kpis">
      ${kpi('Линеек Пехорки', `${lineCount}`, 'Отобраны для тафтинга')}
      ${kpi('Цветов пряжи', `${variantCount}`, 'Артикулы и названия Куделя')}
      ${kpi('Расходников', `${consumableCount}`, 'Обобщённые позиции без брендов')}
      ${kpi('Всего в библиотеке', `${state.materialCatalog.filter(item => item.system).length}`, 'Сохраняется при очистке данных')}
    </section>
    <div class="toolbar"><div class="search"><input id="materialSearch" placeholder="Пряжа, полотно, подложка, клей, лента, упаковка…" /></div><div class="chips" id="materialChips"><button class="chip active" data-filter="Все">Все</button>${['Пряжа','Основа','Подложка','Клей','Кромка','Производство','Упаковка'].map(c => `<button class="chip" data-filter="${c}">${c}</button>`).join('')}</div></div>
    <div class="catalog-groups" id="materialTable">${renderCatalogGroups(state.materialCatalog)}</div>`;
  return `${viewHeader('Материалы и закупки', mode === 'stock' ? 'Фактические остатки, партии, закупки и списание в себестоимость ковров.' : 'Единая библиотека пряжи и всех основных расходников мастерской.', headerActions)}${content}`;
}
function renderCatalogGroups(items) {
  const groups = new Map();
  [...items].sort((a, b) => (a.sortOrder ?? 999999) - (b.sortOrder ?? 999999) || a.line.localeCompare(b.line, 'ru')).forEach(item => {
    const key = item.type === 'Пряжа' ? `${item.brand}::${item.line}` : `Расходники::${item.line}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  });
  return [...groups.values()].map(group => {
    const sample = group[0];
    const isYarn = sample.type === 'Пряжа';
    const available = group.filter(item => item.availability === 'В наличии').length;
    const title = isYarn ? `${esc(sample.brand)} · ${esc(sample.line)}` : esc(sample.line);
    const meta = isYarn
      ? `${esc(sample.composition)} · ${num(sample.nominalWeight, 0)} г / ${num(sample.lengthM, 0)} м · ${num(sample.metersPer100g, 0)} м на 100 г`
      : `${group.length} позиций · ${[...new Set(group.map(item => item.unit))].join(', ')}`;
    const side = isYarn
      ? `<div class="catalog-line-side"><b>${group.length} цветов</b><small>${available} сейчас в наличии</small><a class="secondary-btn" href="${esc(sample.supplierUrl)}" target="_blank" rel="noopener">Кудель ↗</a></div>`
      : `<div class="catalog-line-side"><b>Системная база</b><small>Без бренда и цены</small></div>`;
    return `<section class="card catalog-line-group" data-catalog-group>
      <header class="catalog-line-head">
        <div><div class="catalog-line-title"><h3>${title}</h3><span class="badge ${isYarn && sample.fitGroup === 'Рекомендовано' ? 'success' : isYarn && sample.fitGroup === 'Premium' ? 'clay' : ''}">${isYarn ? esc(sample.fitGroup || 'Не оценено') : 'Расходники'}</span></div>
        <div class="item-meta">${meta}</div>
        <div class="catalog-line-note"><b>${isYarn ? esc(sample.strandRecommendation || 'Требуется тест') : 'Закупка → склад → списание на проект'}</b><span>${isYarn ? esc(sample.tuftingNote || '') : 'Стоимость покупки автоматически попадёт в финансы, а расход можно связать с конкретным ковром.'}</span></div></div>
        ${side}
      </header>
      <div class="material-table">${group.map(catalogRow).join('')}</div>
    </section>`;
  }).join('');
}
function materialRow(m) {
  const catalog = state.materialCatalog.find(item => item.id === m.catalogId);
  const title = catalog ? materialName(catalog) : m.name;
  const details = catalog?.type === 'Пряжа'
    ? `${catalog.internalCode} · Кудель ${catalog.supplierSku || 'код не указан'}`
    : `${catalog?.internalCode || m.code || m.internalCode || 'Без кода'} · ${m.type}`;
  const search = catalog ? materialSearchText(catalog) : [m.name, m.code, m.supplier, m.type].join(' ').toLowerCase();
  const swatch = catalog?.swatch || m.swatch || '#e5d8c3';
  return `<div class="material-row" data-material="${m.id}" data-type="${m.type}" data-name="${search}">
    <div class="material-thumb" style="--swatch:${swatch}"></div>
    <div><div class="item-title">${esc(title)}</div><div class="item-meta">${esc(details)}</div><div class="item-meta">${m.lots?.filter(l => l.remainingWeight > 0).length || 0} активных партий${m.location ? ` · ${esc(m.location)}` : ''}</div></div>
    <div><div class="material-label">Остаток</div><div class="material-number ${m.stock < m.min ? 'low' : ''}">${num(m.stock,1)} ${m.unit}</div></div>
    <div><div class="material-label">Минимум</div><div class="material-number">${num(m.min,1)} ${m.unit}</div></div>
    <button class="secondary-btn" data-action="adjust-material" data-id="${m.id}">Открыть</button>
  </div>`;
}
function catalogRow(item) {
  const inventory = state.materials.find(m => m.catalogId === item.id);
  const isYarn = item.type === 'Пряжа';
  const availabilityClass = item.availability === 'В наличии' ? 'success' : '';
  const name = isYarn ? `${item.colorCode} ${esc(item.colorName)}` : esc(item.colorName || item.name || item.line);
  const description = isYarn
    ? `${esc(item.composition)} · ${item.nominalWeight} г / ${item.lengthM} м · ${esc(item.strandRecommendation || '')}`
    : `${esc(item.composition || '')} · учёт в ${esc(item.unit)}`;
  const codes = isYarn
    ? `<span>${esc(item.internalCode)}</span><span>Кудель ${esc(item.supplierSku || '—')}</span><span class="availability-tag ${availabilityClass}">${esc(item.availability || 'Не проверено')}</span>`
    : `<span>${esc(item.internalCode)}</span><span>${esc(item.type)}</span><span class="availability-tag">Системная позиция</span>`;
  const price = isYarn
    ? `<div><div class="material-label">Цена мотка</div><div class="material-number">${item.lastSkeinPrice ? rub(item.lastSkeinPrice) : '—'}</div><div class="item-meta">${item.pricePer100g ? `${num(item.pricePer100g, 0)} ₽ / 100 г` : ''}</div></div>`
    : `<div><div class="material-label">Цена</div><div class="material-number">По закупке</div><div class="item-meta">Вносится при поступлении</div></div>`;
  return `<div class="material-row catalog-row" data-catalog="${item.id}" data-type="${esc(item.type)}" data-name="${materialSearchText(item)}">
    <div class="material-thumb" style="--swatch:${item.swatch || '#e5d8c3'}"></div>
    <div><div class="item-title">${name}</div><div class="item-meta">${description}</div><div class="code-line">${codes}</div></div>
    ${price}
    <div><div class="material-label">На складе</div><div class="material-number">${inventory ? `${num(inventory.stock,1)} ${esc(inventory.unit)}` : `0 ${esc(item.unit)}`}</div></div>
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
        ${state.orders.map(o => `<div class="order-card ${o.id === selected.id ? 'active' : ''}" data-order="${o.id}" data-name="${(o.client+' '+o.project+' '+o.id).toLowerCase()}"><div class="thumb">${visualForOrder(o)}</div><div><div class="item-title">${o.id}</div><div class="item-meta">${o.client} · ${o.project}</div></div><div class="badge-group">${testBadge(o)}<span class="badge ${statusClass(o.status)}">${o.status}</span></div></div>`).join('')}
      </article>
      ${renderOrderDetail(selected)}
    </section>`;
}
function renderOrderDetail(o) {
  if (!o) return '<article class="card empty"><strong>Заказ не выбран</strong></article>';
  const shipment = state.shipments.find(item => item.orderId === o.id);
  return `<article class="card card-pad" id="orderDetail">
    <div class="card-head"><div><h2>${o.id}</h2><small>${o.client} · ${o.city}</small></div><div class="badge-group">${testBadge(o)}<span class="badge ${statusClass(o.status)}">${o.status}</span></div></div>
    <div class="item-row"><div class="thumb">${visualForOrder(o)}</div><div><div class="item-title">Ковёр «${o.project}»</div><div class="item-meta">${o.size} · ${o.material}</div></div><div class="item-side"><b>${rub(o.amount)}</b></div></div>
    <div class="detail-grid" style="margin-top:14px"><div class="detail-tile"><small>Контакт</small><b>${o.phone}</b></div><div class="detail-tile"><small>Источник</small><b>${o.source}</b></div><div class="detail-tile"><small>Предоплата</small><b>${rub(orderPrepaid(o))}</b></div><div class="detail-tile"><small>Всего получено</small><b>${rub(orderPaid(o))}</b></div><div class="detail-tile"><small>Остаток к оплате</small><b>${rub(Math.max(0,(Number(o.amount)||0)-orderPaid(o)))}</b></div><div class="detail-tile"><small>Срок</small><b>${o.deadline}</b></div></div>
    ${shipment ? `<div class="detail-grid" style="margin-top:14px"><div class="detail-tile"><small>Упаковка</small><b>${esc(shipment.package || '—')}</b></div><div class="detail-tile"><small>Место хранения</small><b>${esc(shipment.location || '—')}</b></div><div class="detail-tile"><small>Трек-номер</small><b>${esc(shipment.tracking || 'Ещё не внесён')}</b></div><div class="detail-tile"><small>Отгрузка</small><b>${esc(shipment.status || '—')}</b></div></div>` : ''}
    <div class="card-head" style="margin-top:18px"><h3>Оплаты</h3><small>${(o.payments||[]).length} операций</small></div><div class="lot-list">${(o.payments||[]).length ? o.payments.map(payment => `<div class="lot-row"><div><b>${esc(payment.type)}</b><div class="item-meta">${payment.date}${payment.note ? ` · ${esc(payment.note)}` : ''}</div></div><b class="positive">${rub(payment.amount)}</b></div>`).join('') : '<div class="empty compact"><strong>Оплат пока нет</strong></div>'}</div>
    <div style="margin-top:16px"><div class="card-head"><h3>Готовность</h3><b>${o.progress}%</b></div>${progress(o.progress)}</div>
    <div class="detail-tile" style="margin-top:16px"><small>Пожелания клиента</small><div>${o.note || 'Нет дополнительных пожеланий'}</div></div>
    <div class="card-head" style="margin-top:18px"><h3>История общения</h3><small>${o.history.length} сообщений</small></div>
    <div class="timeline">${o.history.length ? o.history.map(h => `<div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-text"><b>${h.who}</b> · ${h.date}<br>${h.text}</div></div>`).join('') : '<div class="empty"><strong>Переписка пока не добавлена</strong>Сохраняйте важные договорённости и сообщения.</div>'}</div>
    <div class="production-actions"><button class="primary-btn" data-action="order-payment" data-id="${o.id}">＋ Оплата</button><button class="secondary-btn" data-action="client-status" data-id="${o.id}">Статус для клиента</button><button class="secondary-btn" data-action="order-status" data-id="${o.id}">Изменить статус</button><button class="secondary-btn" data-action="message-template" data-id="${o.id}">Шаблон сообщения</button>${o.isTest ? `<button class="danger-btn" data-action="delete-test-order" data-id="${o.id}">Удалить тест целиком</button>` : `<button class="secondary-btn" data-action="mark-test-order" data-id="${o.id}">Пометить как тест</button>`}<button class="danger-btn" data-action="delete-order" data-id="${o.id}">Удалить заказ</button></div>
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
    ${viewHeader('Готовые изделия', mode === 'stock' ? 'Товарный склад и зарезервированные к отправке ковры, которые физически ещё находятся у вас.' : 'Завершённые и отправленные работы — история мастерской.', header)}
    ${mode === 'stock' ? `<section class="kpi-grid">${kpi('Ковров у вас', `${stock.length} шт.`, 'Свободные и зарезервированные')}${kpi('Себестоимость склада', rub(costValue), 'Вложено в готовые изделия')}${kpi('Потенциальная выручка', rub(retailValue), 'По розничным ценам')}${kpi('Потенциальная маржа', rub(retailValue - costValue), 'До расходов на продажу')}</section>` : ''}
    <section class="product-grid">
      ${items.length ? items.map(product => { const margin = (Number(product.salePrice) || Number(product.retail) || 0) - (Number(product.cost) || 0); return `<article class="card product-card" data-product="${product.id}"><div class="product-cover">${visual(product, `Ковёр ${product.name}`)}</div><div class="product-body"><div class="product-top"><div><div class="product-name">${product.name}</div><div class="product-meta">${product.id} · ${product.size}</div></div><div class="badge-group">${testBadge(product)}<span class="badge ${statusClass(product.status)}">${product.status}</span></div></div><div class="project-footer"><span class="price">${rub(mode === 'archive' ? (product.salePrice || product.retail) : product.retail)}</span><span class="product-meta">${mode === 'archive' ? `Маржа ${rub(margin)}` : product.location}</span></div><div class="production-actions"><button class="secondary-btn" data-action="product-card" data-id="${product.id}">Карточка</button>${mode === 'stock' && product.inventoryStatus !== 'reserved' ? `<button class="secondary-btn" data-action="publish-product" data-id="${product.id}">Публикации</button>` : ''}${product.isTest ? `<button class="danger-btn" data-action="delete-test-project" data-id="${product.projectId}">Удалить тест</button>` : ''}</div></div></article>`; }).join('') : `<article class="card empty"><strong>${mode === 'stock' ? 'Товарный склад пуст' : 'Завершённых работ пока нет'}</strong>${mode === 'stock' ? 'Готовые ковры появятся здесь после завершения производства.' : 'После отправки ковёр уйдёт со склада, но останется в этой истории.'}</article>`}
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
    ${viewHeader('Финансы и аналитика', 'Платежи, закупки, денежный поток и реальная маржа по коврам.', `<button class="secondary-btn" data-action="new-income">＋ Доход</button><button class="secondary-btn" data-action="new-expense">＋ Расход</button>`)}
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
  const shipments = state.shipments.filter(item => item.status !== 'Отправлен');
  if (!shipments.length) return `${viewHeader('Семейный режим', 'Простой экран для упаковки и отправки.', '')}<article class="card empty"><strong>Нет заказов к отправке</strong>Они появятся здесь после действия «Передать на склад / к отправке».</article>`;
  return `
    ${viewHeader('Семейный режим', 'Подготовленные заказы, упаковка и отправка без лишних разделов.', '')}
    <section class="production-list">${shipments.map(shipment => {
      const order = state.orders.find(o => o.id === shipment.orderId);
      if (!order) return '';
      const balance = Math.max(0, (Number(order.amount) || 0) - orderPaid(order));
      return `<article class="card card-pad family-card"><div class="card-head"><div><h2>Отправка заказа ${shipment.orderId}</h2><small>${shipment.status}</small></div><div class="badge-group">${testBadge(order)}<span class="badge ${balance > 0 ? 'warn' : 'success'}">${balance > 0 ? `Остаток ${rub(balance)}` : 'Оплачен'}</span></div></div>
        <div class="family-order"><div class="item-row"><div class="thumb">${visualForOrder(order)}</div><div><div class="item-title">Ковёр «${order.project || 'Ковёр'}»</div><div class="item-meta">${order.size || ''}</div></div><div class="item-side"><b>${shipment.package}</b><div class="item-meta">номер упаковки</div></div></div>
        <div class="detail-grid"><div class="detail-tile"><small>Где лежит</small><b>${shipment.location}</b></div><div class="detail-tile"><small>Получатель</small><b>${shipment.client}</b></div><div class="detail-tile"><small>Адрес</small><b>${shipment.address}</b></div><div class="detail-tile"><small>Телефон</small><b>${shipment.phone}</b></div></div>
        ${shipment.note ? `<div class="detail-tile" style="margin-top:12px"><small>Комментарий</small><div>${esc(shipment.note)}</div></div>` : ''}
        <div class="family-steps"><div class="family-step"><span>1</span><div><b>Найти упаковку</b><div class="item-meta">По номеру ${shipment.package}</div></div></div><div class="family-step"><span>2</span><div><b>Проверить ковёр</b><div class="item-meta">Чистый, сухой, без дефектов</div></div></div><div class="family-step"><span>3</span><div><b>Проверить оплату</b><div class="item-meta">${balance > 0 ? `Не получено ${rub(balance)}` : 'Оплата получена полностью'}</div></div></div><div class="family-step"><span>4</span><div><b>Внести трек-номер</b><div class="item-meta">После передачи службе доставки</div></div></div></div>
        <button class="primary-btn" style="width:100%;min-height:54px" data-action="ship-order" data-id="${shipment.orderId}">Внести трек и отметить отправленным</button></div>
      </article>`;
    }).join('')}</section>`;
}
function renderMore() {
  const lineCount = new Set(state.materialCatalog.filter(item => item.system && item.type === 'Пряжа').map(item => item.line)).size;
  const consumableCount = state.materialCatalog.filter(item => item.system && item.type !== 'Пряжа').length;
  return `${viewHeader('Ещё', 'Все дополнительные разделы VORS Studio.', '')}<div class="mobile-more"><button class="nav-item" data-go="orders"><span>▣</span><b>Клиенты и заказы</b></button><button class="nav-item" data-go="products"><span>◇</span><b>Готовые изделия</b></button><button class="nav-item" data-go="finance"><span>▥</span><b>Финансы и аналитика</b></button><button class="nav-item" data-go="family"><span>♧</span><b>Семейный режим</b></button><button class="nav-item" data-action="role"><span>👤</span><b>Сменить роль</b></button><button class="nav-item danger-action" data-action="clear-data"><span>⌫</span><b>Очистить рабочие данные</b></button></div><article class="card card-pad app-version-card"><div><small>VORS Studio</small><b>Версия ${APP_VERSION}</b><span>Библиотека: ${lineCount} линеек пряжи · ${consumableCount} расходников</span></div><div><small>Пряжа Куделя</small><b>${CATALOG_CHECKED_AT}</b><span>Вся библиотека сохраняется при очистке</span></div></article>`;
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
  const apply = () => {
    document.querySelectorAll(itemSelector).forEach(item => {
      const hay = item.dataset.name || ''; const cat = item.dataset.category || item.dataset.type || '';
      item.style.display = hay.includes(input.value.toLowerCase()) && (filter === 'Все' || cat === filter) ? '' : 'none';
    });
    document.querySelectorAll('#materialTable [data-catalog-group]').forEach(group => {
      const visible = [...group.querySelectorAll('[data-catalog]')].some(item => item.style.display !== 'none');
      group.style.display = visible ? '' : 'none';
    });
  };
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
    'delete-project': () => deleteProject(id),
    'new-order': openNewOrder,
    'delete-order': () => deleteOrder(id),
    'mark-test-order': () => markTestChain(id, 'order'),
    'delete-test-order': () => deleteTestChain(id, 'order'),
    'delete-test-project': () => deleteTestChain(id, 'project'),
    'prepare-shipment': () => prepareForStockOrShipment(id),
    'new-material': () => openMaterialReceipt(),
    'new-catalog-item': () => openCatalogEditor(),
    'catalog-receipt': () => openMaterialReceipt(id),
    'edit-catalog-item': () => openCatalogEditor(id),
    'adjust-material': () => adjustMaterial(id),
    'start-production': openStartProduction,
    'timer': () => toggleTimer(id),
    'next-stage': () => nextStage(id),
    'production-note': () => editProductionNote(id),
    'production-materials': () => openProductionMaterials(id),
    'client-status': () => openClientStatus(id),
    'client-status-by-rug': () => { const p = state.productions.find(x => x.id === id); const o = state.orders.find(x => x.project === p?.name); if (o) openClientStatus(o.id); else toast('К этому ковру не привязан заказ'); },
    'order-status': () => changeOrderStatus(id),
    'order-payment': () => addOrderPayment(id),
    'message-template': () => openMessageTemplate(id),
    'product-card': () => openProduct(id),
    'publish-product': () => openPublish(id),
    'new-product': openNewProduct,
    'new-income': openIncome,
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
    <div class="field full"><label class="check-row"><input name="isTest" type="checkbox" ${project?.isTest ? 'checked' : ''}><span><b>Тестовый проект</b><small>Учитывается в финансах, складе и аналитике как обычный. Метка нужна только для быстрого удаления всей тестовой цепочки.</small></span></label></div>
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
    const oldName = project?.name || '';
    const values = {
      name: fd.get('name').trim(), category: fd.get('category'), size: fd.get('size') || 'Не указан',
      price: Number(fd.get('price')) || 0, planDays: Number(fd.get('days')) || 7,
      material: fd.get('material') || 'Не указан', notes: fd.get('notes') || '', coverImage,
      pattern: project?.pattern || null, isTest: fd.get('isTest') === 'on'
    };
    if (editing) {
      Object.assign(project, values);
      state.orders.filter(item => item.projectId === project.id || item.project === oldName).forEach(item => { item.project = values.name; item.isTest = values.isTest; });
      state.productions.filter(item => item.projectId === project.id || item.name === oldName).forEach(item => { item.name = values.name; item.isTest = values.isTest; });
      state.products.filter(item => item.projectId === project.id || item.name === oldName).forEach(item => { item.name = values.name; item.isTest = values.isTest; });
    } else state.projects.unshift({ id: `PRJ-${String(state.projects.length + 1).padStart(3,'0')}`, status: 'Идея', progress: 0, colors: [], ...values });
    markSaving(); closeModal(); state.view = 'projects'; render(); toast(editing ? 'Проект обновлён' : 'Проект создан');
  };
}
function openProject(id) {
  const p = state.projects.find(x => x.id === id); if (!p) return;
  openModal(p.name, `<div class="status-hero"><div class="status-cover">${visual(p, `Проект ${p.name}`)}</div><div><div class="badge-group">${testBadge(p)}<span class="badge ${statusClass(p.status)}">${p.status}</span></div><h3 style="font-size:26px;margin:10px 0 5px">${esc(p.name)}</h3><div class="item-meta">${p.id} · ${esc(p.category)}</div><div class="price" style="margin-top:10px">${rub(p.price)}</div></div></div><div class="detail-grid" style="margin-top:18px"><div class="detail-tile"><small>Размер</small><b>${esc(p.size)}</b></div><div class="detail-tile"><small>Материал</small><b>${esc(p.material)}</b></div><div class="detail-tile"><small>Плановый срок</small><b>${p.planDays} дней</b></div><div class="detail-tile"><small>Готовность</small><b>${p.progress}%</b></div></div><div style="margin-top:16px">${progress(p.progress)}</div>${p.colors?.length ? `<div class="detail-tile" style="margin-top:16px"><small>Палитра</small><div style="display:flex;gap:8px">${p.colors.map(c=>`<i style="width:34px;height:34px;border-radius:50%;background:${c};border:3px solid #fff;box-shadow:0 2px 7px #0002"></i>`).join('')}</div></div>` : ''}<div class="detail-tile" style="margin-top:12px"><small>Заметки</small>${esc(p.notes || 'Нет заметок')}</div>`, `${p.isTest ? '<button class="danger-btn" data-delete-test>Удалить тест целиком</button>' : '<button class="secondary-btn" data-mark-test>Пометить как тест</button>'}<button class="danger-btn" data-delete>Удалить проект</button><button class="secondary-btn" data-launch>Запустить в производство</button><button class="primary-btn" data-edit>Изменить</button>`);
  modalRoot.querySelector('[data-delete-test]')?.addEventListener('click', () => { closeModal(); deleteTestChain(id, 'project'); });
  modalRoot.querySelector('[data-mark-test]')?.addEventListener('click', () => { closeModal(); markTestChain(id, 'project'); });
  modalRoot.querySelector('[data-delete]').onclick = () => { closeModal(); deleteProject(id); };
  modalRoot.querySelector('[data-launch]').onclick = () => { closeModal(); launchProject(id); };
  modalRoot.querySelector('[data-edit]').onclick = () => { closeModal(); openProjectEditor(p); };
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

function testChainContext(id, type = 'project') {
  const order = type === 'order' ? state.orders.find(item => item.id === id) : null;
  const project = type === 'project'
    ? state.projects.find(item => item.id === id)
    : state.projects.find(item => item.id === order?.projectId) || state.projects.find(item => item.name === order?.project);
  const projectId = project?.id || order?.projectId || '';
  const projectName = project?.name || order?.project || '';
  const orders = state.orders.filter(item => item.id === order?.id || (projectId && item.projectId === projectId) || (projectName && item.project === projectName));
  const productions = state.productions.filter(item => (projectId && item.projectId === projectId) || (projectName && item.name === projectName));
  const productionIds = new Set(productions.map(item => item.id));
  const orderIds = new Set(orders.map(item => item.id));
  const products = state.products.filter(item => orderIds.has(item.orderId) || productionIds.has(item.productionId) || (projectId && item.projectId === projectId));
  return { order, project, projectId, projectName, orders, productions, productionIds, orderIds, products };
}

function markTestChain(id, type = 'project') {
  const chain = testChainContext(id, type);
  if (!chain.project && !chain.order) return toast('Запись не найдена');
  if (chain.project) chain.project.isTest = true;
  chain.orders.forEach(item => { item.isTest = true; });
  chain.productions.forEach(item => { item.isTest = true; });
  chain.products.forEach(item => { item.isTest = true; });
  markSaving();
  render();
  toast('Метка «Тест» добавлена. Финансы, склад и аналитика продолжают считаться');
}

function deleteTestChain(id, type = 'project') {
  const chain = testChainContext(id, type);
  const marked = Boolean(chain.project?.isTest || chain.order?.isTest || chain.orders.some(item => item.isTest) || chain.productions.some(item => item.isTest));
  if (!marked) return toast('Сначала пометьте проект или заказ как тестовый');
  const label = chain.projectName || chain.order?.id || 'тест';
  const message = [
    `Удалить тест «${label}» целиком?`,
    `Будут удалены: проект, ${chain.orders.length} заказ(а), ${chain.productions.length} производственная карточка и ${chain.products.length} готовое изделие.`,
    'Тестовые оплаты и связанные расходы исчезнут из финансов и аналитики.',
    'Списанные на тест материалы будут возвращены на склад.',
    'Это действие нельзя отменить.'
  ].join('\n\n');
  if (!confirm(message)) return;

  state.materials.forEach(material => {
    const linkedMoves = (material.movements || []).filter(move => chain.productionIds.has(move.productionId));
    const restore = linkedMoves.filter(move => Number(move.delta) < 0).reduce((sum, move) => sum + Math.abs(Number(move.delta) || 0), 0);
    if (restore > 0) {
      material.stock = (Number(material.stock) || 0) + restore;
      material.lots = material.lots || [];
      material.lots.unshift({ id: `LOT-TEST-RETURN-${Date.now()}-${material.id}`, date: todayISO(), batch: 'Возврат теста', skeins: 0, initialWeight: restore, remainingWeight: restore, purchasePrice: 0, note: `Автовозврат после удаления теста «${label}»` });
    }
    material.movements = (material.movements || []).filter(move => !chain.productionIds.has(move.productionId));
  });

  state.finance.transactions = (state.finance.transactions || []).filter(item => {
    if (chain.orderIds.has(item.orderId)) return false;
    if (chain.projectId && item.projectId === chain.projectId) return false;
    return true;
  });
  state.shipments = state.shipments.filter(item => !chain.orderIds.has(item.orderId));
  const productIds = new Set(chain.products.map(item => item.id));
  state.products = state.products.filter(item => !productIds.has(item.id));
  state.productions = state.productions.filter(item => !chain.productionIds.has(item.id));
  state.orders = state.orders.filter(item => !chain.orderIds.has(item.id));
  if (chain.projectId) state.projects = state.projects.filter(item => item.id !== chain.projectId);

  state.selectedOrderId = state.orders[0]?.id || null;
  markSaving();
  state.view = type === 'order' ? 'orders' : 'projects';
  render();
  toast('Тестовая цепочка удалена полностью');
}
function launchProject(projectId) {
  const project = state.projects.find(item => item.id === projectId); if (!project) return;
  if (state.productions.some(item => item.projectId === projectId)) return toast('Этот проект уже в производстве');
  state.productions.unshift({ id:`RUG-2026-${String(49+state.productions.length).padStart(4,'0')}`, projectId:project.id, name:project.name, pattern:project.pattern, coverImage:project.coverImage || '', progress:5, planDays:project.planDays, elapsedDays:0, cost:0, materialCost:0, extraCost:0, materialUsage:[], timerSeconds:0, timerRunning:false, stages:['Эскиз','Перенос','Набивка','Проклейка','Сушка','Подложка','Стрижка','Контроль качества','Упаковка'].map((name,index)=>({name,status:index===0?'active':'wait'})), notes:'', photos:0, isTest:Boolean(project.isTest), handoffStatus:'' });
  project.status='В работе'; project.progress=5;
  state.orders.filter(order => order.projectId === project.id || order.project === project.name).forEach(order => { order.projectId = project.id; order.coverImage = project.coverImage || order.coverImage || ''; order.pattern = project.pattern || order.pattern; order.status = 'В работе'; order.progress = 5; order.isTest = Boolean(project.isTest || order.isTest); });
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
function nextStage(id, skipMaterialCheck = false) {
  const production = state.productions.find(item => item.id === id); if (!production) return;
  const active = production.stages.findIndex(stage => stage.status === 'active');
  if (active < 0) return toast('Все этапы уже завершены');
  const stageName = production.stages[active].name;
  const missing = missingMaterialsForStage(production, stageName);
  if (!skipMaterialCheck && missing.length) return openStageMaterialCheck(production, stageName, missing);

  production.stages[active].status = 'done';
  if (active + 1 < production.stages.length) production.stages[active + 1].status = 'active';
  production.progress = Math.round(((active + 1) / production.stages.length) * 100);
  const project = state.projects.find(item => item.id === production.projectId);
  if (project) project.progress = production.progress;
  state.orders.filter(order => order.projectId === production.projectId || order.project === production.name).forEach(order => { order.projectId = production.projectId; order.coverImage = production.coverImage || project?.coverImage || order.coverImage || ''; order.progress = production.progress; order.status = production.progress >= 100 ? 'Готов' : 'В работе'; order.isTest = Boolean(order.isTest || production.isTest || project?.isTest); });
  if (active + 1 === production.stages.length) {
    production.progress = 100; production.timerRunning = false;
    recalcProductionCost(production);
    if (!state.products.some(item => item.id === production.id)) {
      const linkedOrder = state.orders.find(order => order.projectId === production.projectId || order.project === production.name);
      state.products.unshift(normalizeProduct({ id:production.id, productionId:production.id, projectId:production.projectId, orderId:linkedOrder?.id || '', name:production.name, pattern:production.pattern, coverImage:production.coverImage || project?.coverImage || '', size:project?.size || linkedOrder?.size || '', composition:project?.material || linkedOrder?.material || '', base:'Тафтинговая ткань', pile:'12 мм', care:'Сухая чистка', retail:project?.price || linkedOrder?.amount || 0, minimum:Math.round((project?.price || linkedOrder?.amount || 0) * .78), location:'Не назначено', status:'Готов к передаче', inventoryStatus:'stock', cost:Number(production.cost) || 0, channels:[], days:0, createdAt:todayISO(), isTest:Boolean(production.isTest || project?.isTest || linkedOrder?.isTest) }));
    }
    production.completedAt = production.completedAt || todayISO();
  }
  markSaving(); render(); toast(active + 1 === production.stages.length ? 'Ковёр готов. Теперь передайте его на склад или к отправке' : 'Этап завершён');
}
function openStageMaterialCheck(production, stageName, missing) {
  const isFinal = stageName === 'Упаковка';
  const checklist = isFinal ? overallMaterialChecklist(production) : (PRODUCTION_MATERIAL_REQUIREMENTS[stageName] || []).map(item => ({ ...item, done: usageHasTypes(production, item.types), required: true }));
  openModal(isFinal ? 'Проверка материалов перед завершением' : `Материалы этапа «${stageName}»`, `<div class="material-stage-warning"><b>${isFinal ? 'Проверьте себестоимость ковра' : 'Не все материалы этапа учтены'}</b><p>${isFinal ? 'Ковёр можно завершить, но пропущенные материалы занизят себестоимость и завысят маржу.' : `Не учтено: ${missing.map(item => item.label).join(', ')}.`}</p></div><div class="material-check-list">${checklist.map(item => `<div class="material-check-row ${item.done ? 'done' : 'missing'}"><span>${item.done ? '✓' : '!'}</span><div><b>${item.label}</b><small>${item.done ? 'Списание есть' : item.required === false ? 'Необязательно' : 'Не учтено'}</small></div></div>`).join('')}</div>`, `<button class="secondary-btn" data-cancel>Вернуться</button><button class="secondary-btn" data-add-material>Списать материал</button><button class="primary-btn" data-finish>${isFinal ? 'Всё учтено · завершить' : 'Завершить без списания'}</button>`);
  modalRoot.querySelector('[data-cancel]').onclick = closeModal;
  modalRoot.querySelector('[data-add-material]').onclick = () => { closeModal(); openAddMaterialUsage(production.id, stageName); };
  modalRoot.querySelector('[data-finish]').onclick = () => { closeModal(); nextStage(production.id, true); };
}

function editProductionNote(id) {
  const production=state.productions.find(item=>item.id===id); if(!production)return;
  openModal('Заметка по производству',`<div class="field"><label>Комментарий</label><textarea id="prodNote">${production.notes}</textarea></div>`,`<button class="primary-btn" data-save>Сохранить</button>`);
  modalRoot.querySelector('[data-save]').onclick=()=>{production.notes=document.getElementById('prodNote').value;markSaving();closeModal();render();toast('Заметка сохранена');};
}

function ensureProductForProduction(production) {
  if (!production) return null;
  const project = state.projects.find(item => item.id === production.projectId) || state.projects.find(item => item.name === production.name);
  const order = state.orders.find(item => item.projectId === production.projectId) || state.orders.find(item => item.project === production.name);
  let product = state.products.find(item => item.productionId === production.id || item.id === production.id || (production.projectId && item.projectId === production.projectId));
  if (!product) {
    product = normalizeProduct({
      id: production.id, productionId: production.id, projectId: production.projectId || project?.id || '', orderId: order?.id || '',
      name: production.name, pattern: production.pattern, coverImage: production.coverImage || project?.coverImage || '',
      size: project?.size || order?.size || '', composition: project?.material || order?.material || '', base: 'Тафтинговая ткань', pile: '12 мм', care: 'Сухая чистка',
      retail: project?.price || order?.amount || 0, minimum: Math.round((project?.price || order?.amount || 0) * .78), location: 'Не назначено',
      status: 'Готов к передаче', inventoryStatus: 'stock', cost: Number(production.cost) || 0, createdAt: production.completedAt || todayISO(),
      isTest: Boolean(production.isTest || project?.isTest || order?.isTest)
    });
    state.products.unshift(product);
  }
  product.isTest = Boolean(product.isTest || production.isTest || project?.isTest || order?.isTest);
  return product;
}

function prepareForStockOrShipment(productionId) {
  const production = state.productions.find(item => item.id === productionId);
  if (!production) return toast('Производственная карточка не найдена');
  if (Number(production.progress) < 100) return toast('Сначала завершите все этапы производства');
  const project = state.projects.find(item => item.id === production.projectId) || state.projects.find(item => item.name === production.name);
  const order = state.orders.find(item => item.projectId === production.projectId) || state.orders.find(item => item.project === production.name);
  const product = ensureProductForProduction(production);
  if (!product) return;

  if (!order) {
    openModal('Передать готовый ковёр на склад', `<form id="stockTransferForm" class="form-grid"><div class="field"><label>Место хранения</label><input name="location" required placeholder="Стеллаж А · полка 2"></div><div class="field"><label>Номер упаковки</label><input name="package" required placeholder="PKG-001"></div><div class="field full"><label>Комментарий</label><textarea name="note" placeholder="Готов к продаже, особенности упаковки…"></textarea></div></form>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-save>Передать на товарный склад</button>`);
    modalRoot.querySelector('[data-cancel]').onclick = closeModal;
    modalRoot.querySelector('[data-save]').onclick = () => {
      const fd = new FormData(document.getElementById('stockTransferForm'));
      if (!fd.get('location') || !fd.get('package')) return toast('Укажите место хранения и номер упаковки');
      product.location = fd.get('location').trim();
      product.packageNumber = fd.get('package').trim();
      product.status = 'На складе';
      product.inventoryStatus = 'stock';
      product.stockNote = fd.get('note') || '';
      production.handoffStatus = 'stock';
      if (project) { project.status = 'На складе'; project.progress = 100; }
      markSaving(); closeModal(); state.view = 'products'; state.productView = 'stock'; render(); toast('Ковёр передан на товарный склад');
    };
    return;
  }

  const paid = orderPaid(order);
  const balance = Math.max(0, (Number(order.amount) || 0) - paid);
  openModal('Передать заказ к отправке', `<div class="detail-grid"><div class="detail-tile"><small>Стоимость заказа</small><b>${rub(order.amount)}</b></div><div class="detail-tile"><small>Получено</small><b>${rub(paid)}</b></div><div class="detail-tile"><small>Остаток к оплате</small><b>${rub(balance)}</b></div><div class="detail-tile"><small>Статус оплаты</small><b>${balance > 0 ? 'Не полностью оплачен' : 'Оплачен'}</b></div></div><form id="shipmentTransferForm" class="form-grid" style="margin-top:14px"><div class="field"><label>Получено сейчас, ₽</label><input name="paidNow" type="number" min="0" step="0.01" value="${balance || ''}"></div><div class="field"><label>Тип оплаты</label><select name="paymentType"><option>Окончательный расчёт</option><option>Доплата</option></select></div><div class="field"><label>Место хранения</label><input name="location" required placeholder="Стеллаж Б · полка 1"></div><div class="field"><label>Номер упаковки</label><input name="package" required placeholder="PKG-${String(state.shipments.length + 1).padStart(3,'0')}"></div><div class="field"><label>Адрес / пункт выдачи</label><input name="address" value="${esc(order.city || '')}" placeholder="Город, ПВЗ или адрес"></div><div class="field"><label>Телефон получателя</label><input name="phone" value="${esc(order.phone || '')}"></div><div class="field full"><label>Комментарий семье</label><textarea name="note" placeholder="Как упаковать, чем отправить, важные детали…"></textarea></div></form>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-save>Передать к отправке</button>`);
  modalRoot.querySelector('[data-cancel]').onclick = closeModal;
  modalRoot.querySelector('[data-save]').onclick = () => {
    const fd = new FormData(document.getElementById('shipmentTransferForm'));
    if (!fd.get('location') || !fd.get('package')) return toast('Укажите место хранения и номер упаковки');
    const paidNow = Number(fd.get('paidNow')) || 0;
    if (paidNow > 0) {
      order.payments = order.payments || [];
      order.payments.push({ id: `PAY-${order.id}-${Date.now()}`, type: fd.get('paymentType') || 'Окончательный расчёт', amount: paidNow, date: todayISO(), note: 'Перед передачей к отправке' });
      order.prepaid = orderPrepaid(order);
    }
    const remaining = Math.max(0, (Number(order.amount) || 0) - orderPaid(order));
    if (remaining > 0 && !confirm(`Заказ оплачен не полностью. Остаток ${rub(remaining)}. Всё равно передать к отправке?`)) return;
    order.status = 'К отправке';
    order.progress = 100;
    order.shippingPreparedAt = todayISO();
    product.orderId = order.id;
    product.status = 'К отправке';
    product.inventoryStatus = 'reserved';
    product.location = fd.get('location').trim();
    product.packageNumber = fd.get('package').trim();
    production.handoffStatus = 'shipping';
    if (project) { project.status = 'К отправке'; project.progress = 100; }
    let shipment = state.shipments.find(item => item.orderId === order.id);
    if (!shipment) { shipment = { id: `SHP-${Date.now()}`, orderId: order.id }; state.shipments.unshift(shipment); }
    Object.assign(shipment, { status: remaining > 0 ? 'Ожидает доплаты / отправки' : 'Готов к отправке', package: fd.get('package').trim(), location: fd.get('location').trim(), client: order.client, address: fd.get('address')?.trim() || order.city || 'Не указан', phone: fd.get('phone')?.trim() || order.phone || 'Не указан', note: fd.get('note') || '', tracking: shipment.tracking || '', isTest: Boolean(order.isTest) });
    markSaving(); closeModal(); state.view = 'family'; render(); toast(remaining > 0 ? `Передано к отправке · осталось ${rub(remaining)}` : 'Заказ передан к отправке');
  };
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


function materialGuidance(material) {
  const unit = material.unit || 'шт';
  if (unit === 'г' || unit === 'мл') return `Можно ввести расход напрямую или указать значение до и после работы — разница посчитается автоматически.`;
  if (unit === 'м²') return 'Введите площадь напрямую либо ширину и длину отреза в сантиметрах.';
  if (unit === 'м') return 'Укажите фактически использованную длину.';
  return `Укажите фактическое количество в единицах «${unit}».`;
}
function recommendedTypesForStage(stageName) {
  return (PRODUCTION_MATERIAL_REQUIREMENTS[stageName] || []).flatMap(item => item.types);
}
function openProductionMaterials(productionId) {
  const production = state.productions.find(item => item.id === productionId); if (!production) return;
  const usage = productionUsage(production);
  const checklist = overallMaterialChecklist(production);
  const grouped = usage.reduce((map, item) => { const key = item.stage || 'Общее'; (map[key] ||= []).push(item); return map; }, {});
  const usageHtml = usage.length ? Object.entries(grouped).map(([stage, items]) => `<div class="usage-stage"><div class="card-head"><h3>${esc(stage)}</h3><small>${rub(items.reduce((sum, item) => sum + item.cost, 0))}</small></div><div class="usage-list">${items.map(item => `<div class="usage-row"><div><b>${esc(item.materialName)}</b><div class="item-meta">${num(item.quantity, 3)} ${item.unit} · ${num(item.unitCost, 2)} ₽/${item.unit}${item.note ? ` · ${esc(item.note)}` : ''}</div></div><div class="usage-row-side"><b>${rub(item.cost)}</b><button class="icon-mini danger-icon" data-remove-usage="${item.id}" aria-label="Отменить списание">×</button></div></div>`).join('')}</div></div>`).join('') : '<div class="empty"><strong>Материалы ещё не списывались</strong>Добавляйте расход по ходу работы: пряжа и клей — по весу, ткани — по площади, ленты — по метрам.</div>';
  openModal(`Материалы · ${production.name}`, `<section class="production-material-summary"><div class="detail-grid"><div class="detail-tile"><small>Материальная себестоимость</small><b>${rub(production.materialCost || 0)}</b></div><div class="detail-tile"><small>Всего списаний</small><b>${usage.length}</b></div><div class="detail-tile"><small>Общая себестоимость</small><b>${rub(production.cost || 0)}</b></div></div><div class="material-check-list compact">${checklist.map(item => `<div class="material-check-row ${item.done ? 'done' : item.required ? 'missing' : 'optional'}"><span>${item.done ? '✓' : item.required ? '!' : '○'}</span><div><b>${item.label}</b><small>${item.done ? 'Учтено' : item.required ? 'Пока не учтено' : 'По необходимости'}</small></div></div>`).join('')}</div></section><section class="usage-sections">${usageHtml}</section>`, `<button class="secondary-btn" data-close2>Закрыть</button><button class="primary-btn" data-add-usage>＋ Списать материал</button>`);
  modalRoot.querySelector('[data-close2]').onclick = closeModal;
  modalRoot.querySelector('[data-add-usage]').onclick = () => { closeModal(); openAddMaterialUsage(production.id); };
  modalRoot.querySelectorAll('[data-remove-usage]').forEach(button => button.onclick = () => removeMaterialUsage(production.id, button.dataset.removeUsage));
}
function openAddMaterialUsage(productionId, preferredStage = '') {
  const production = state.productions.find(item => item.id === productionId); if (!production) return;
  const stageName = preferredStage || currentProductionStage(production);
  const preferredTypes = recommendedTypesForStage(stageName);
  const available = state.materials.filter(material => Number(material.stock) > 0).sort((a, b) => {
    const ar = preferredTypes.includes(a.type) ? 0 : 1;
    const br = preferredTypes.includes(b.type) ? 0 : 1;
    return ar - br || materialNameForStock(a).localeCompare(materialNameForStock(b), 'ru');
  });
  if (!available.length) return toast('На складе нет материалов с положительным остатком');
  const stages = [...new Set(['Общее', ...(production.stages || []).map(stage => stage.name)])];
  openModal('Списать материал на ковёр', `<form id="usageForm" class="form-grid">
    <div class="field full"><label>Материал со склада</label><select name="materialId" id="usageMaterialSelect">${available.map(material => `<option value="${material.id}" ${preferredTypes.includes(material.type) ? 'data-recommended="1"' : ''}>${esc(materialNameForStock(material))} · остаток ${num(material.stock, 3)} ${material.unit}</option>`).join('')}</select></div>
    <div class="field"><label>Этап</label><select name="stage">${stages.map(stage => `<option ${stage === stageName ? 'selected' : ''}>${stage}</option>`).join('')}</select></div>
    <div class="field"><label>Дата</label><input name="date" type="date" value="${todayISO()}"></div>
    <div class="field full" id="usageMaterialPreview"></div>
    <div class="field full" id="usageMeasurementFields"></div>
    <div class="field full"><label>Комментарий</label><input name="note" placeholder="Например: вес банки до/после, запас на обрезку…"></div>
  </form>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-save>Списать в себестоимость</button>`);
  const select = document.getElementById('usageMaterialSelect');
  const preview = document.getElementById('usageMaterialPreview');
  const fields = document.getElementById('usageMeasurementFields');
  const renderMeasurement = () => {
    const material = state.materials.find(item => item.id === select.value);
    if (!material) return;
    const unit = material.unit || 'шт';
    preview.innerHTML = `<div class="catalog-preview-card"><div class="material-thumb" style="--swatch:${material.swatch || '#e5d8c3'}"></div><div><b>${esc(materialNameForStock(material))}</b><div class="item-meta">На складе: ${num(material.stock, 3)} ${unit} · средняя цена ${num(material.pricePerUnit || 0, 2)} ₽/${unit}</div><small>${esc(materialGuidance(material))}</small></div></div>`;
    if (unit === 'г' || unit === 'мл') {
      fields.innerHTML = `<div class="measurement-grid"><div class="field"><label>До работы, ${unit}</label><input name="before" type="number" min="0" step="0.01" placeholder="Необязательно"></div><div class="field"><label>После работы, ${unit}</label><input name="after" type="number" min="0" step="0.01" placeholder="Необязательно"></div><div class="field"><label>Расход, ${unit}</label><input name="quantity" type="number" min="0.01" step="0.01" required placeholder="Можно ввести сразу"></div></div>`;
    } else if (unit === 'м²') {
      fields.innerHTML = `<div class="measurement-grid"><div class="field"><label>Ширина отреза, см</label><input name="widthCm" type="number" min="0" step="0.1" placeholder="Например, 80"></div><div class="field"><label>Длина отреза, см</label><input name="lengthCm" type="number" min="0" step="0.1" placeholder="Например, 100"></div><div class="field"><label>Площадь, м²</label><input name="quantity" type="number" min="0.001" step="0.001" required placeholder="0,8"></div></div>`;
    } else {
      fields.innerHTML = `<div class="field"><label>Количество, ${unit}</label><input name="quantity" type="number" min="0.01" step="0.01" required></div>`;
    }
    const form = document.getElementById('usageForm');
    const quantityInput = form.elements.quantity;
    const updateAuto = () => {
      if (unit === 'г' || unit === 'мл') {
        const before = Number(form.elements.before?.value) || 0;
        const after = Number(form.elements.after?.value) || 0;
        if (before > 0 && before >= after) quantityInput.value = Math.round((before - after) * 1000) / 1000 || '';
      } else if (unit === 'м²') {
        const width = Number(form.elements.widthCm?.value) || 0;
        const length = Number(form.elements.lengthCm?.value) || 0;
        if (width > 0 && length > 0) quantityInput.value = Math.round((width / 100) * (length / 100) * 1000) / 1000;
      }
    };
    form.elements.before?.addEventListener('input', updateAuto);
    form.elements.after?.addEventListener('input', updateAuto);
    form.elements.widthCm?.addEventListener('input', updateAuto);
    form.elements.lengthCm?.addEventListener('input', updateAuto);
  };
  select.addEventListener('change', renderMeasurement);
  renderMeasurement();
  modalRoot.querySelector('[data-cancel]').onclick = closeModal;
  modalRoot.querySelector('[data-save]').onclick = () => {
    const form = document.getElementById('usageForm');
    const fd = new FormData(form);
    const material = state.materials.find(item => item.id === fd.get('materialId'));
    const quantity = Number(fd.get('quantity')) || 0;
    if (!material || quantity <= 0) return toast('Укажите материал и количество');
    if (quantity > Number(material.stock)) return toast(`Недостаточно на складе: доступно ${num(material.stock, 3)} ${material.unit}`);
    addMaterialUsage(material, production, quantity, fd.get('stage') || 'Общее', fd.get('note') || '', fd.get('date') || todayISO());
    markSaving(); closeModal(); render(); toast(`Списано ${num(quantity, 3)} ${material.unit} · ${rub(quantity * (Number(material.pricePerUnit) || 0))}`);
  };
}
function materialNameForStock(material) {
  const catalog = state.materialCatalog.find(item => item.id === material.catalogId);
  return catalog ? materialName(catalog) : (material.name || 'Материал');
}
function addMaterialUsage(material, production, quantity, stage = 'Общее', note = '', date = todayISO()) {
  const unitCost = Number(material.pricePerUnit) || 0;
  const cost = quantity * unitCost;
  const usageId = `USE-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  material.stock = Math.max(0, (Number(material.stock) || 0) - quantity);
  consumeLots(material, quantity);
  const usage = {
    id: usageId, materialId: material.id, catalogId: material.catalogId || '', materialName: materialNameForStock(material),
    type: material.type || 'Материал', unit: material.unit || 'шт', quantity, unitCost, cost, stage, date, note
  };
  productionUsage(production).unshift(usage);
  material.movements = material.movements || [];
  material.movements.unshift({ id: `MOV-${Date.now()}`, usageId, date, type: 'Расход на ковёр', delta: -quantity, reason: note || `${stage} · ${production.name}`, productionId: production.id, projectName: production.name, stage, cost });
  recalcProductionCost(production);
  return usage;
}
function removeMaterialUsage(productionId, usageId) {
  const production = state.productions.find(item => item.id === productionId); if (!production) return;
  const usage = productionUsage(production).find(item => item.id === usageId); if (!usage) return;
  if (!confirm(`Отменить списание «${usage.materialName}» и вернуть ${num(usage.quantity, 3)} ${usage.unit} на склад?`)) return;
  const material = state.materials.find(item => item.id === usage.materialId);
  if (material) {
    material.stock = (Number(material.stock) || 0) + (Number(usage.quantity) || 0);
    material.lots = material.lots || [];
    material.lots.unshift({ id: `LOT-RETURN-${Date.now()}`, date: todayISO(), batch: 'Возврат списания', skeins: 0, initialWeight: usage.quantity, remainingWeight: usage.quantity, purchasePrice: 0, note: `Возврат с ковра «${production.name}»` });
    material.movements = (material.movements || []).filter(move => move.usageId !== usageId);
    material.movements.unshift({ id: `MOV-RETURN-${Date.now()}`, date: todayISO(), type: 'Возврат', delta: usage.quantity, reason: `Отмена списания · ${production.name}`, productionId: production.id, projectName: production.name, cost: -usage.cost });
  }
  production.materialUsage = productionUsage(production).filter(item => item.id !== usageId);
  recalcProductionCost(production);
  markSaving(); closeModal(); render(); toast('Списание отменено, материал возвращён на склад');
}

function openCatalogEditor(id = null) {
  const item = state.materialCatalog.find(entry => entry.id === id);
  openModal(item ? 'Редактировать позицию' : 'Новая позиция справочника', `<form id="catalogForm" class="form-grid">
    <div class="field"><label>Категория</label><select name="type"><option ${item?.type === 'Пряжа' ? 'selected' : ''}>Пряжа</option><option ${item?.type === 'Основа' ? 'selected' : ''}>Основа</option><option ${item?.type === 'Клей' ? 'selected' : ''}>Клей</option><option ${item?.type === 'Подложка' ? 'selected' : ''}>Подложка</option><option ${item?.type === 'Упаковка' ? 'selected' : ''}>Упаковка</option><option ${item?.type === 'Кромка' ? 'selected' : ''}>Кромка</option><option ${item?.type === 'Производство' ? 'selected' : ''}>Производство</option></select></div>
    <div class="field"><label>Единица учёта</label><select name="unit">${['г','кг','м','м²','мл','л','шт','пара'].map(unit => `<option ${item?.unit === unit || (!item && unit === 'г') ? 'selected' : ''}>${unit}</option>`).join('')}</select></div>
    <div class="field"><label>Производитель</label><input name="brand" required value="${esc(item?.brand || '')}"></div>
    <div class="field"><label>Линейка / название</label><input name="line" required value="${esc(item?.line || '')}" placeholder="Удачный выбор"></div>
    <div class="field"><label>Код цвета производителя</label><input name="colorCode" value="${esc(item?.colorCode || '')}" placeholder="01"></div>
    <div class="field"><label>Название цвета</label><input name="colorName" value="${esc(item?.colorName || '')}" placeholder="Белый"></div>
    <div class="field"><label>Внутренний код VORS</label><input name="internalCode" value="${esc(item?.internalCode || '')}" placeholder="PEH-UDV-01"></div>
    <div class="field"><label>Поставщик</label><input name="supplier" value="${esc(item?.supplier || '')}"></div>
    <div class="field"><label>Артикул Куделя</label><input name="supplierSku" value="${esc(item?.supplierSku || '')}"></div>
    <div class="field"><label>Ссылка поставщика</label><input name="supplierUrl" type="url" value="${esc(item?.supplierUrl || '')}"></div>
    <div class="field"><label>Состав</label><input name="composition" value="${esc(item?.composition || '')}" placeholder="100% объёмный акрил"></div>
    <div class="field"><label>Вес мотка, г</label><input name="nominalWeight" type="number" min="0" step="0.1" value="${item?.nominalWeight || ''}"></div>
    <div class="field"><label>Метраж, м</label><input name="lengthM" type="number" min="0" step="0.1" value="${item?.lengthM || ''}"></div>
    <div class="field"><label>Последняя цена мотка</label><input name="lastSkeinPrice" type="number" min="0" step="0.01" value="${item?.lastSkeinPrice || ''}"></div>
    <div class="field"><label>Статус для тафтинга</label><select name="fitGroup">${['Рекомендовано','Premium','На тест'].map(group => `<option ${item?.fitGroup === group ? 'selected' : ''}>${group}</option>`).join('')}</select></div>
    <div class="field"><label>Рекомендуемая подача</label><input name="strandRecommendation" value="${esc(item?.strandRecommendation || '')}" placeholder="2 нити"></div>
    <div class="field"><label>Наличие у поставщика</label><select name="availability">${['В наличии','Ожидается','Не проверено'].map(status => `<option ${item?.availability === status ? 'selected' : ''}>${status}</option>`).join('')}</select></div>
    <div class="field full"><label>Комментарий для тафтинга</label><textarea name="tuftingNote" placeholder="Что проверить на пробнике">${esc(item?.tuftingNote || '')}</textarea></div>
    <div class="field"><label>Цвет образца</label><input name="swatch" type="color" value="${item?.swatch || '#d7d4cf'}"></div>
  </form>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-save>Сохранить</button>`);
  modalRoot.querySelector('[data-cancel]').onclick = closeModal;
  modalRoot.querySelector('[data-save]').onclick = () => {
    const fd = new FormData(document.getElementById('catalogForm'));
    if (!fd.get('line')) return toast('Укажите название или группу позиции');
    const values = {
      type: fd.get('type'), brand: fd.get('brand').trim(), line: fd.get('line').trim(),
      colorCode: fd.get('colorCode').trim(), colorName: fd.get('colorName').trim(),
      internalCode: fd.get('internalCode').trim() || `${fd.get('brand').slice(0,3).toUpperCase()}-${fd.get('line').slice(0,3).toUpperCase()}-${fd.get('colorCode') || 'BASE'}`,
      supplier: fd.get('supplier').trim(), supplierSku: fd.get('supplierSku').trim(), supplierUrl: fd.get('supplierUrl').trim(),
      composition: fd.get('composition').trim(), nominalWeight: Number(fd.get('nominalWeight')) || 0,
      lengthM: Number(fd.get('lengthM')) || 0, unit: fd.get('unit') || (fd.get('type') === 'Пряжа' ? 'г' : 'шт'),
      lastSkeinPrice: Number(fd.get('lastSkeinPrice')) || 0, swatch: fd.get('swatch'), checkedAt: new Date().toLocaleDateString('ru-RU'),
      fitGroup: fd.get('fitGroup') || 'На тест', strandRecommendation: fd.get('strandRecommendation').trim(),
      availability: fd.get('availability') || 'Не проверено', tuftingNote: fd.get('tuftingNote').trim(), system: Boolean(item?.system)
    };
    if (item) Object.assign(item, values);
    else state.materialCatalog.unshift({ id: `CAT-CUSTOM-${Date.now()}`, ...values });
    markSaving(); closeModal(); state.materialView = 'catalog'; render(); toast('Справочник обновлён');
  };
}
function openMaterialReceipt(catalogId = null) {
  let selected = state.materialCatalog.find(item => item.id === catalogId) || null;
  const options = state.materialCatalog.map(item => `<option value="${esc(materialCatalogLabel(item))}"></option>`).join('');
  const unit = selected?.unit || 'ед.';
  const defaultMin = selected?.suggestedMin ?? (selected?.type === 'Пряжа' ? selected.nominalWeight * 2 : 0);
  openModal('Поступление материала', `<form id="receiptForm" class="form-grid">
    <div class="field full"><label>Материал из библиотеки</label><input id="catalogLookup" list="catalogOptions" autocomplete="off" placeholder="Пряжа, полотно, подложка, клей, упаковка…" value="${selected ? esc(materialCatalogLabel(selected)) : ''}"><datalist id="catalogOptions">${options}</datalist></div>
    <div class="field full"><div class="catalog-preview" id="receiptPreview">${selected ? receiptPreview(selected) : '<div class="empty compact"><strong>Выберите точную позицию</strong>Поиск работает по названию, категории, цвету, внутреннему коду и артикулу.</div>'}</div></div>
    <div class="field"><label id="receiptQuantityLabel">Количество поступления, ${unit}</label><input name="weight" type="number" min="0.01" step="0.01" required placeholder="${selected?.type === 'Пряжа' ? '500' : '1'}"></div>
    <div class="field"><label>Общая стоимость покупки, ₽</label><input name="price" type="number" min="0" step="0.01" placeholder="0"></div>
    <div class="field"><label id="receiptMinLabel">Минимальный остаток, ${unit}</label><input name="min" type="number" min="0" step="0.01" value="${defaultMin || 0}"></div>
    <div class="field"><label>Дата поступления</label><input name="date" type="date" value="${new Date().toISOString().slice(0,10)}"></div>
    <div class="field"><label>Партия / обозначение на упаковке</label><input name="batch" placeholder="Необязательно"></div>
    <div class="field"><label>Количество упаковок / мотков</label><input name="skeins" type="number" min="0" step="1" placeholder="1"></div>
    <div class="field"><label>Место хранения</label><input name="location" placeholder="Стеллаж А · ящик 2"></div>
    <div class="field full"><label>Комментарий</label><textarea name="note" placeholder="Размер рулона, поставщик, особенности закупки…"></textarea></div>
  </form>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-save>Принять на склад</button>`);
  const lookup = document.getElementById('catalogLookup');
  const preview = document.getElementById('receiptPreview');
  const quantityLabel = document.getElementById('receiptQuantityLabel');
  const minLabel = document.getElementById('receiptMinLabel');
  const minInput = document.querySelector('#receiptForm [name="min"]');
  const updateSelected = () => {
    const value = lookup.value.trim().toLowerCase();
    selected = state.materialCatalog.find(item => materialCatalogLabel(item).toLowerCase() === value)
      || state.materialCatalog.find(item => [item.internalCode, item.supplierSku, `${item.colorCode} ${item.colorName}`, item.colorName, item.name].filter(Boolean).some(token => String(token).toLowerCase() === value));
    preview.innerHTML = selected ? receiptPreview(selected) : '<div class="empty compact"><strong>Позиция не найдена</strong>Выберите вариант из подсказок или сначала добавьте его в библиотеку.</div>';
    if (selected) {
      quantityLabel.textContent = `Количество поступления, ${selected.unit}`;
      minLabel.textContent = `Минимальный остаток, ${selected.unit}`;
      if (!Number(minInput.value)) minInput.value = selected.suggestedMin ?? (selected.type === 'Пряжа' ? selected.nominalWeight * 2 : 0);
    }
  };
  lookup.addEventListener('input', updateSelected);
  lookup.addEventListener('change', updateSelected);
  modalRoot.querySelector('[data-cancel]').onclick = closeModal;
  modalRoot.querySelector('[data-save]').onclick = () => {
    updateSelected();
    if (!selected) return toast('Выберите материал из библиотеки');
    const fd = new FormData(document.getElementById('receiptForm'));
    const quantity = Number(fd.get('weight')) || 0;
    if (quantity <= 0) return toast(`Укажите количество в ${selected.unit}`);
    const totalPrice = Number(fd.get('price')) || 0;
    let inventory = state.materials.find(item => item.catalogId === selected.id);
    if (!inventory) {
      inventory = normalizeMaterial({
        id: `MAT-${String(state.materials.length + 1).padStart(3,'0')}`, catalogId: selected.id,
        name: materialName(selected), type: selected.type, code: selected.internalCode, internalCode: selected.internalCode,
        brand: selected.brand, line: selected.line, colorCode: selected.colorCode, colorName: selected.colorName,
        supplier: selected.supplier, supplierSku: selected.supplierSku, supplierUrl: selected.supplierUrl,
        composition: selected.composition, nominalWeight: selected.nominalWeight, lengthM: selected.lengthM,
        swatch: selected.swatch, stock: 0, min: Number(fd.get('min')) || 0, unit: selected.unit || 'шт', pricePerUnit: 0, location: fd.get('location')?.trim() || ''
      });
      state.materials.unshift(inventory);
    }
    const oldStock = Number(inventory.stock) || 0;
    const oldValue = oldStock * (Number(inventory.pricePerUnit) || 0);
    inventory.stock = oldStock + quantity;
    inventory.min = Number(fd.get('min')) || inventory.min || 0;
    if (fd.get('location')?.trim()) inventory.location = fd.get('location').trim();
    inventory.pricePerUnit = inventory.stock ? (oldValue + totalPrice) / inventory.stock : 0;
    inventory.lots = inventory.lots || [];
    inventory.movements = inventory.movements || [];
    const date = fd.get('date') || new Date().toISOString().slice(0,10);
    inventory.lots.unshift({ id: `LOT-${Date.now()}`, date, batch: fd.get('batch') || 'Не указана', skeins: Number(fd.get('skeins')) || 0, initialWeight: quantity, remainingWeight: quantity, purchasePrice: totalPrice, note: fd.get('note') || '' });
    inventory.movements.unshift({ id: `MOV-${Date.now()}`, date, type: 'Поступление', delta: quantity, reason: fd.get('note') || 'Закупка' });
    if (selected.type === 'Пряжа' && totalPrice && Number(fd.get('skeins'))) selected.lastSkeinPrice = totalPrice / Number(fd.get('skeins'));
    markSaving(); closeModal(); state.materialView = 'stock'; render(); toast(`Принято ${num(quantity,2)} ${selected.unit}`);
  };
}
function receiptPreview(item) {
  const isYarn = item.type === 'Пряжа';
  const meta = isYarn
    ? `${item.composition} · ${item.nominalWeight} г / ${item.lengthM} м · ${item.strandRecommendation || 'нужен тест'}`
    : `${item.composition || item.type} · единица учёта: ${item.unit}`;
  const codes = isYarn
    ? `<span>${item.internalCode}</span><span>Кудель ${item.supplierSku || '—'}</span><span>${item.fitGroup || 'Не оценено'}</span>`
    : `<span>${item.internalCode}</span><span>${item.type}</span><span>${item.tuftingNote || 'Системный расходник'}</span>`;
  return `<div class="catalog-preview-card"><div class="material-thumb" style="--swatch:${item.swatch || '#e5d8c3'}"></div><div><b>${esc(materialName(item))}</b><div class="item-meta">${esc(meta)}</div><div class="code-line">${codes}</div></div></div>`;
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
  const isYarn = catalog?.type === 'Пряжа';
  openModal(catalog ? materialName(catalog) : material.name, `<div class="material-detail-head"><div class="material-thumb large" style="--swatch:${catalog?.swatch || material.swatch || '#e5d8c3'}"></div><div><div class="item-meta">${catalog?.internalCode || material.internalCode || material.code || ''}</div><h3>${esc(catalog ? materialName(catalog) : material.name)}</h3><div class="item-meta">${esc(catalog?.composition || material.composition || material.type || '')}</div></div></div>
    <div class="detail-grid" style="margin-top:16px"><div class="detail-tile"><small>Фактический остаток</small><b>${num(material.stock,2)} ${material.unit}</b></div><div class="detail-tile"><small>Минимум</small><b>${num(material.min,2)} ${material.unit}</b></div><div class="detail-tile"><small>Средняя цена</small><b>${num(material.pricePerUnit || 0, 2)} ₽ / ${material.unit}</b></div><div class="detail-tile"><small>Стоимость остатка</small><b>${rub(material.stock * (material.pricePerUnit || 0))}</b></div><div class="detail-tile"><small>Место хранения</small><b>${esc(material.location || 'Не назначено')}</b></div></div>
    ${isYarn ? `<div class="detail-tile" style="margin-top:12px"><small>Закупка</small><div class="code-line"><span>Кудель ${catalog.supplierSku || '—'}</span><span>${catalog.checkedAt ? `проверено ${catalog.checkedAt}` : ''}</span></div></div>` : ''}
    <div class="card-head" style="margin-top:18px"><h3>Активные партии</h3><small>${lots.length}</small></div><div class="lot-list">${lots.length ? lots.map(lot => `<div class="lot-row"><div><b>${esc(lot.batch)}</b><div class="item-meta">${lot.date}${lot.skeins ? ` · ${lot.skeins} уп.` : ''}</div></div><div><b>${num(lot.remainingWeight,2)} ${material.unit}</b><div class="item-meta">из ${num(lot.initialWeight,2)} ${material.unit}</div></div></div>`).join('') : '<div class="empty compact"><strong>Активных партий нет</strong></div>'}</div>
    <div class="card-head" style="margin-top:18px"><h3>Последние движения</h3></div><div class="lot-list">${movements.length ? movements.map(move => `<div class="lot-row"><div><b>${move.type}</b><div class="item-meta">${move.date} · ${esc(move.reason)}</div></div><b class="${move.delta < 0 ? 'negative' : 'positive'}">${move.delta > 0 ? '+' : ''}${num(move.delta,2)} ${material.unit}</b></div>`).join('') : '<div class="empty compact"><strong>Движений пока нет</strong></div>'}</div>`, `<button class="secondary-btn" data-adjust>Корректировка / расход</button>${catalog?.supplierUrl ? '<button class="secondary-btn" data-supplier>Открыть Кудель</button>' : ''}<button class="primary-btn" data-receipt>Поступление</button>`);
  modalRoot.querySelector('[data-receipt]').onclick = () => { closeModal(); openMaterialReceipt(material.catalogId); };
  modalRoot.querySelector('[data-adjust]').onclick = () => { closeModal(); openMaterialAdjustment(material.id); };
  modalRoot.querySelector('[data-supplier]')?.addEventListener('click', () => window.open(catalog.supplierUrl, '_blank', 'noopener'));
}
function openMaterialAdjustment(id) {
  const material = state.materials.find(item => item.id === id); if (!material) return;
  openModal('Корректировка / расход', `<div class="detail-tile"><small>Сейчас на складе</small><b>${num(material.stock,2)} ${material.unit}</b></div><form id="adjustForm" class="form-grid" style="margin-top:14px"><div class="field"><label>Изменение, ${material.unit}</label><input name="delta" type="number" step="0.01" required placeholder="-1 или 5"></div><div class="field"><label>Минимальный остаток, ${material.unit}</label><input name="min" type="number" min="0" step="0.01" value="${material.min || 0}"></div><div class="field"><label>Место хранения</label><input name="location" value="${esc(material.location || '')}" placeholder="Стеллаж А · ящик 2"></div><div class="field"><label>Отнести расход к ковру</label><select name="productionId"><option value="">Не связывать</option>${state.productions.map(item => `<option value="${item.id}">${esc(item.name)} · ${item.id}</option>`).join('')}</select></div><div class="field full"><label>Причина</label><input name="reason" placeholder="Расход на проект, упаковка, инвентаризация…"></div></form>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-save>Применить</button>`);
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
    let consumptionCost = 0;
    if (linkedProduction && delta < 0) {
      // Остаток и партии уже уменьшены выше; здесь создаём только связанное списание и пересчитываем себестоимость.
      const quantity = Math.abs(delta);
      const unitCost = Number(material.pricePerUnit) || 0;
      consumptionCost = quantity * unitCost;
      const usageId = `USE-${Date.now()}-${Math.random().toString(16).slice(2)}`;
      productionUsage(linkedProduction).unshift({ id: usageId, materialId: material.id, catalogId: material.catalogId || '', materialName: materialNameForStock(material), type: material.type || 'Материал', unit: material.unit || 'шт', quantity, unitCost, cost: consumptionCost, stage: currentProductionStage(linkedProduction), date: todayISO(), note: fd.get('reason') || '' });
      recalcProductionCost(linkedProduction);
      material.movements = material.movements || [];
      material.movements.unshift({ id: `MOV-${Date.now()}`, usageId, date: todayISO(), type: 'Расход на ковёр', delta, reason: fd.get('reason') || 'Без комментария', productionId, projectName: linkedProduction.name, stage: currentProductionStage(linkedProduction), cost: consumptionCost });
    } else {
      material.movements = material.movements || [];
      material.movements.unshift({ id: `MOV-${Date.now()}`, date: todayISO(), type: delta > 0 ? 'Корректировка +' : 'Расход', delta, reason: fd.get('reason') || 'Без комментария', productionId: '', projectName: '', cost: 0 });
    }
    markSaving(); closeModal(); render(); toast(linkedProduction && consumptionCost > 0 ? `Списано ${num(Math.abs(delta),2)} ${material.unit} · в себестоимость ${rub(consumptionCost)}` : 'Остаток обновлён');
  };
}

function openNewOrder() {
  const projectOptions = state.projects.map(project => `<option value="${project.id}">${esc(project.name)} · ${esc(project.size)}${project.isTest ? ' · ТЕСТ' : ''}</option>`).join('');
  openModal('Новый заказ', `<form id="orderForm" class="form-grid">
    <div class="field"><label>Клиент</label><input name="client" required></div><div class="field"><label>Телефон</label><input name="phone"></div>
    <div class="field"><label>Город</label><input name="city"></div><div class="field"><label>Источник</label><select name="source"><option>Авито</option><option>VK</option><option>Telegram</option><option>Рекомендация</option></select></div>
    <div class="field full"><label>Связать с готовым проектом</label><select name="projectId" id="orderProjectSelect"><option value="">Без привязки — заполнить вручную</option>${projectOptions}</select></div>
    <div class="field"><label>Проект / название</label><input name="project" required></div><div class="field"><label>Размер</label><input name="size"></div>
    <div class="field"><label>Стоимость</label><input name="amount" type="number"></div><div class="field"><label>Предоплата</label><input name="prepaid" type="number"></div>
    <div class="field full"><label class="check-row"><input name="isTest" type="checkbox"><span><b>Тестовый заказ</b><small>Все оплаты, расходы, склад и аналитика считаются как обычно. Метка нужна только для быстрого удаления тестовых данных.</small></span></label></div>
    <div class="field full"><label>Пожелания</label><textarea name="note"></textarea></div>
  </form>`, `<button class="primary-btn" data-save>Создать заказ</button>`);
  const form = document.getElementById('orderForm');
  document.getElementById('orderProjectSelect').addEventListener('change', event => {
    const project = state.projects.find(item => item.id === event.target.value);
    if (!project) return;
    form.elements.project.value = project.name;
    form.elements.size.value = project.size === 'Не указан' ? '' : project.size;
    form.elements.amount.value = project.price || '';
    form.elements.isTest.checked = Boolean(project.isTest);
  });
  modalRoot.querySelector('[data-save]').onclick = () => {
    const fd = new FormData(form);
    if (!fd.get('client') || !fd.get('project')) return toast('Заполните клиента и проект');
    const project = state.projects.find(item => item.id === fd.get('projectId'));
    const maxNumber = Math.max(58, ...state.orders.map(order => Number(String(order.id).split('-').at(-1)) || 0));
    const id = `ORD-${new Date().getFullYear()}-${maxNumber + 1}`;
    state.orders.unshift(normalizeOrder({
      id, clientId: `CL-${String(state.orders.length + 1).padStart(3,'0')}`, client: fd.get('client'), phone: fd.get('phone') || '', email: '', city: fd.get('city') || '',
      projectId: project?.id || '', project: fd.get('project'), pattern: project?.pattern || null, coverImage: project?.coverImage || '',
      size: fd.get('size') || project?.size || 'Не указан', material: project?.material || 'Не указан', amount: Number(fd.get('amount')) || project?.price || 0,
      prepaid: Number(fd.get('prepaid')) || 0, status: Number(fd.get('prepaid')) > 0 ? 'Предоплата' : 'Новый', deadline: '—', progress: 0, source: fd.get('source'), note: fd.get('note') || '', history: [], createdAt: todayISO(),
      payments: Number(fd.get('prepaid')) > 0 ? [{ id: `PAY-${id}-PRE-${Date.now()}`, type: 'Предоплата', amount: Number(fd.get('prepaid')), date: todayISO(), note: 'При создании заказа' }] : [],
      isTest: Boolean(project?.isTest || fd.get('isTest') === 'on')
    }));
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
  const statuses = ['Новый','Расчёт','Предоплата','Оплачен','В работе','Готов'];
  const lockedStatus = ['К отправке','Отправлен'].includes(order.status) ? `<div class="detail-tile" style="margin-top:14px"><small>Текущий статус</small><b>${order.status}</b><div class="item-meta" style="margin-top:5px">Статусы «К отправке» и «Отправлен» назначаются только через процесс отгрузки.</div></div>` : '';
  openModal('Статус заказа', `<div class="chips">${statuses.map(status => `<button class="chip ${status === order.status ? 'active' : ''}" data-status="${status}">${status}</button>`).join('')}</div>${lockedStatus}`);
  modalRoot.querySelectorAll('[data-status]').forEach(button => button.onclick = () => {
    const status = button.dataset.status;
    order.status = status;
    if (status === 'Готов') { order.progress = 100; const product = ensureProductForOrder(order); product.inventoryStatus = 'stock'; if (product.status === 'В работе') product.status = 'Готов к передаче'; }
    const product = productForOrder(order);
    if (product && product.status === 'Отправлен') { product.inventoryStatus = 'stock'; product.status = status === 'Готов' ? 'Готов к передаче' : product.status; product.location = 'Не назначено'; }
    markSaving(); closeModal(); render(); toast('Статус обновлён');
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
  openModal('Статус заказа', `<div class="client-status" id="clientStatusCard"><div class="client-status-head"><div class="brand-lockup"><div class="brand-mark"><span class="brand-v">V</span><span class="brand-thread"></span></div><div><strong>VORS</strong><span>Studio</span></div></div><div class="badge-group">${testBadge(o)}<span class="badge ${statusClass(o.status)}">${o.status}</span></div></div><div class="status-hero"><div class="status-cover">${visualForOrder(o)}</div><div><div class="item-meta">Заказ ${o.id}</div><h3 style="margin:6px 0;font-size:24px">Ковёр «${esc(o.project)}»</h3><div>${esc(o.client)}</div><div class="item-meta" style="margin-top:6px">${esc(o.size)} · срок ${esc(o.deadline)}</div></div></div><div class="status-progress"><div class="card-head"><h3>Готовность заказа</h3><b>${o.progress}%</b></div>${progress(o.progress)}</div><div class="status-stages">${stages.map((stage, index) => `<div class="status-stage ${stage.status === 'done' ? 'done' : stage.status === 'active' ? 'active' : ''}"><b>${stage.status === 'done' ? '✓' : index + 1}</b>${stage.name}</div>`).join('')}</div><div class="detail-tile" style="margin-top:16px"><small>Текущий этап</small><b>${currentStage}</b><div class="item-meta" style="margin-top:5px">Данные обновляются из производственной карточки VORS Studio.</div></div></div>`, `<button class="secondary-btn" data-print>Печать / скрин</button><button class="primary-btn" data-copy>Скопировать сообщение</button>`);
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
    openModal('Подготовить к отправке', `<div class="detail-tile"><small>Связанный заказ</small><b>${linkedOrder.id} · ${esc(linkedOrder.client)}</b><div class="item-meta">Остаток к оплате: ${rub(balance)}</div></div><div class="detail-tile" style="margin-top:12px"><small>Следующий шаг</small><div>Проверить оплату, назначить место хранения и номер упаковки. После передачи службе доставки потребуется трек-номер.</div></div>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-send>Передать к отправке</button>`);
    modalRoot.querySelector('[data-cancel]').onclick = closeModal;
    modalRoot.querySelector('[data-send]').onclick = () => { closeModal(); prepareForStockOrShipment(product.productionId || product.id); };
    return;
  }
  openModal('Продажа готового ковра', `<form id="saleForm" class="form-grid"><div class="field"><label>Покупатель</label><input name="client" required></div><div class="field"><label>Телефон</label><input name="phone"></div><div class="field"><label>Источник</label><select name="source"><option>Авито</option><option>VK</option><option>Telegram</option><option>Рекомендация</option><option>Другое</option></select></div><div class="field"><label>Адрес / пункт выдачи</label><input name="address"></div><div class="field"><label>Цена продажи</label><input name="amount" type="number" min="0" value="${product.retail || ''}" required></div><div class="field"><label>Получено сейчас</label><input name="paid" type="number" min="0" value="${product.retail || ''}"></div><div class="field"><label>Место хранения</label><input name="location" required value="${esc(product.location === 'Не назначено' ? '' : product.location || '')}" placeholder="Стеллаж А · полка 1"></div><div class="field"><label>Номер упаковки</label><input name="package" required value="${esc(product.packageNumber || '')}" placeholder="PKG-${String(state.shipments.length + 1).padStart(3,'0')}"></div></form>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-save>Передать к отправке</button>`);
  modalRoot.querySelector('[data-cancel]').onclick = closeModal;
  modalRoot.querySelector('[data-save]').onclick = () => {
    const fd = new FormData(document.getElementById('saleForm'));
    if (!fd.get('client')) return toast('Укажите покупателя');
    if (!fd.get('location') || !fd.get('package')) return toast('Укажите место хранения и номер упаковки');
    const maxNumber = Math.max(58, ...state.orders.map(order => Number(String(order.id).split('-').at(-1)) || 0));
    const orderId = `ORD-${new Date().getFullYear()}-${maxNumber + 1}`;
    const amount = Number(fd.get('amount')) || 0;
    const paid = Number(fd.get('paid')) || 0;
    const order = normalizeOrder({ id: orderId, clientId: `CL-${Date.now()}`, client: fd.get('client'), phone: fd.get('phone') || '', email: '', city: fd.get('address') || '', projectId: product.projectId || '', project: product.name, pattern: product.pattern, coverImage: product.coverImage || '', size: product.size, material: product.composition, amount, prepaid: 0, status: 'К отправке', deadline: '—', progress: 100, source: fd.get('source'), note: 'Продажа готового изделия', history: [], createdAt: todayISO(), isTest: Boolean(product.isTest), payments: paid > 0 ? [{ id: `PAY-${orderId}-${Date.now()}`, type: 'Окончательный расчёт', amount: paid, date: todayISO(), note: 'Продажа готового изделия' }] : [] });
    state.orders.unshift(order);
    product.orderId = order.id;
    product.status = 'К отправке';
    product.inventoryStatus = 'reserved';
    product.location = fd.get('location').trim();
    product.packageNumber = fd.get('package').trim();
    state.shipments.unshift({ id: `SHP-${Date.now()}`, orderId: order.id, status: paid >= amount ? 'Готов к отправке' : 'Ожидает доплаты / отправки', package: product.packageNumber, location: product.location, client: order.client, address: fd.get('address') || 'Не указан', phone: order.phone || 'Не указан', note: '', tracking: '', isTest: Boolean(order.isTest) });
    state.selectedOrderId = order.id;
    markSaving(); closeModal(); state.view = 'family'; render(); toast('Продажа учтена и передана к отправке');
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
function openIncome() {
  openModal('Новый доход', `<form id="incomeForm" class="form-grid"><div class="field"><label>Категория</label><select name="category"><option>Прочая продажа</option><option>Компенсация</option><option>Возврат средств</option><option>Прочий доход</option></select></div><div class="field"><label>Сумма</label><input name="amount" type="number" min="0.01" step="0.01" required></div><div class="field"><label>Дата</label><input name="date" type="date" value="${todayISO()}"></div><div class="field full"><label>Комментарий</label><textarea name="note" placeholder="Доход, который не прошёл через карточку заказа"></textarea></div></form>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-save>Сохранить</button>`);
  modalRoot.querySelector('[data-cancel]').onclick = closeModal;
  modalRoot.querySelector('[data-save]').onclick = () => {
    const fd = new FormData(document.getElementById('incomeForm'));
    const amount = Number(fd.get('amount')) || 0;
    if (amount <= 0) return toast('Укажите сумму дохода');
    state.finance.transactions = state.finance.transactions || [];
    state.finance.transactions.unshift({ id: `INC-${Date.now()}`, kind: 'income', category: fd.get('category'), amount, date: fd.get('date') || todayISO(), title: fd.get('category'), note: fd.get('note') || '', source: 'Ручной доход' });
    markSaving(); closeModal(); render(); toast('Доход сохранён');
  };
}
function openExpense() {
  const projectOptions = state.projects.map(project => `<option value="${project.id}">${esc(project.name)}</option>`).join('');
  const categories = ['Материалы','Упаковка','Доставка и логистика','Реклама и продвижение','Комиссии площадок / эквайринг','Налоги и сборы','Электроэнергия','Оборудование и ремонт','Связь и сервисы','Брак и возвраты','Прочее'];
  openModal('Новый расход', `<form id="expenseForm" class="form-grid"><div class="field"><label>Категория</label><select name="category">${categories.map(item => `<option>${item}</option>`).join('')}</select></div><div class="field"><label>Сумма</label><input name="amount" type="number" min="0.01" step="0.01" required></div><div class="field"><label>Дата</label><input name="date" type="date" value="${todayISO()}"></div><div class="field"><label>Отнести к себестоимости проекта</label><select name="projectId"><option value="">Не связывать</option>${projectOptions}</select></div><div class="field full"><label>Комментарий</label><textarea name="note"></textarea></div></form>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-save>Сохранить</button>`);
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
  const shipment = state.shipments.find(item => item.orderId === id); if (!shipment) return toast('Отгрузка не подготовлена');
  const order = state.orders.find(item => item.id === id);
  const balance = Math.max(0, (Number(order?.amount) || 0) - orderPaid(order));
  openModal('Подтвердить отправку', `<div class="detail-tile"><small>Заказ</small><b>${esc(id)}</b><div class="item-meta">${balance > 0 ? `Внимание: остаток к оплате ${rub(balance)}` : 'Оплата получена полностью'}</div></div><div class="field" style="margin-top:14px"><label>Трек-номер</label><input id="tracking" required value="${esc(shipment.tracking || '')}" placeholder="Введите номер отправления"></div>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="primary-btn" data-save>Отправлено</button>`);
  modalRoot.querySelector('[data-cancel]').onclick = closeModal;
  modalRoot.querySelector('[data-save]').onclick = () => {
    const tracking = document.getElementById('tracking').value.trim();
    if (!tracking) return toast('Введите трек-номер');
    if (balance > 0 && !confirm(`По заказу осталось получить ${rub(balance)}. Всё равно отметить отправленным?`)) return;
    shipment.tracking = tracking;
    shipment.status = 'Отправлен';
    shipment.shippedAt = todayISO();
    if (order) { order.tracking = tracking; finalizeOrder(order); }
    markSaving(); closeModal(); state.view = 'products'; state.productView = 'archive'; render(); toast('Заказ отправлен и перенесён в завершённые');
  };
}
function openRoleModal(){const roles=[['owner','Владелец','Полный доступ'],['manager','Менеджер','Клиенты, заказы, публикации'],['family','Семейный режим','Только упаковка и отправка']];openModal('Режим работы',`<div class="list">${roles.map(([key,name,desc])=>`<button class="item-row" style="width:100%;text-align:left" data-role="${key}"><span style="font-size:25px">${key==='owner'?'👤':key==='manager'?'💬':'📦'}</span><div><div class="item-title">${name}</div><div class="item-meta">${desc}</div></div>${state.role===key?'<span class="badge success">Выбран</span>':'<span>→</span>'}</button>`).join('')}</div>`);modalRoot.querySelectorAll('[data-role]').forEach(btn=>btn.onclick=()=>{state.role=btn.dataset.role;state.view=state.role==='family'?'family':'today';markSaving();closeModal();render();toast('Режим изменён');});}

function clearAllData() {
  openModal('Очистить рабочие данные', `<div class="clear-warning"><b>Справочник материалов останется.</b><p>Будут удалены проекты, заказы, клиенты, производство, готовые ковры, оплаты, расходы, складские остатки, партии, списания, отгрузки, изображения и вся рассчитанная аналитика.</p></div><div class="detail-tile" style="margin-top:12px"><small>Для подтверждения введите</small><b>ОЧИСТИТЬ</b></div><div class="field" style="margin-top:14px"><label>Подтверждение</label><input id="clearConfirmInput" autocomplete="off" placeholder="ОЧИСТИТЬ"></div>`, `<button class="secondary-btn" data-cancel>Отмена</button><button class="danger-btn" data-confirm-clear disabled>Очистить рабочие данные</button>`);
  const input = document.getElementById('clearConfirmInput');
  const confirmButton = modalRoot.querySelector('[data-confirm-clear]');
  modalRoot.querySelector('[data-cancel]').onclick = closeModal;
  input.addEventListener('input', () => { confirmButton.disabled = input.value.trim() !== 'ОЧИСТИТЬ'; });
  confirmButton.onclick = () => {
    if (input.value.trim() !== 'ОЧИСТИТЬ') return;
    const preservedCatalog = mergeCatalog(clone(state.materialCatalog || MATERIAL_CATALOG_SEED));
    state = clone(EMPTY_STATE);
    state.materialCatalog = preservedCatalog;
    state.view = 'today';
    state.materialView = 'stock';
    saveState();
    closeModal();
    render();
    toast('Рабочие данные удалены · справочник сохранён');
  };
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

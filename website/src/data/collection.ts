export const collectionDesigns = [
  {
    slug: 'sage-land',
    name: 'SAGE LAND',
    size: '80 × 120 см',
    price: 'от 14 900 ₽',
    variant: 'sage',
    status: 'Изготовим под заказ',
    category: 'Интерьерный',
    text: 'Спокойная природная композиция в мягкой палитре. Размер и оттенки можно адаптировать под пространство.'
  },
  {
    slug: 'terra-flow',
    name: 'TERRA FLOW',
    size: '80 × 120 см',
    price: 'от 14 900 ₽',
    variant: 'clay',
    status: 'Изготовим под заказ',
    category: 'Интерьерный',
    text: 'Тёплая пластичная графика с терракотовым акцентом. Хорошо работает как самостоятельный объект в спокойном интерьере.'
  },
  {
    slug: 'wave-01',
    name: 'WAVE 01',
    size: '80 × 120 см',
    price: 'от 14 900 ₽',
    variant: 'graphite',
    status: 'Изготовим под заказ',
    category: 'Графичный',
    text: 'Графичный ритм и контрастная линия. Палитру можно сделать мягче или, наоборот, заметнее.'
  },
  {
    slug: 'melt',
    name: 'MELT',
    size: '≈ 70 × 90 см',
    price: 'от 12 900 ₽',
    variant: 'sand',
    status: 'Изготовим под заказ',
    category: 'Фигурный',
    text: 'Компактный фигурный ковёр с мягким силуэтом. Подходит для спальни, зоны у кресла или небольшого акцентного пространства.'
  }
] as const;

export type CollectionDesign = (typeof collectionDesigns)[number];

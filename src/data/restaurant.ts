export const restaurant = {
  name: 'El Mercadito de Chiloé',
  type: 'Restaurante',
  address: 'Pedro Montt 210, Castro, Chiloé',
  phoneDisplay: '+56 9 8313 9887',
  phoneHref: 'tel:+56983139887',
  whatsapp: 'https://api.whatsapp.com/send?phone=56983139887',
  instagram: 'https://www.instagram.com/mercadito_chiloe/',
  originalSite: 'https://www.mercaditodechiloe.com/',
  officialMenu: 'https://menu.fu.do/mercadito/qr-menu',
  maps: 'https://www.google.com/maps/place/El+Mercadito+de+Chilo%C3%A9/@-42.4793067,-73.7607173,17z/data=!4m6!3m5!1s0x962219e4bb0ac893:0x4e0473bf6e49d021!8m2!3d-42.4793067!4d-73.7607173!16s%2Fg%2F11c574ts0b',
  coordinates: { latitude: -42.4793067, longitude: -73.7607173 },
  hours: [
    { days: 'Lunes a jueves', times: '13:00–15:30 y 19:30–21:30' },
    { days: 'Viernes', times: '13:00–16:00 y 19:30–22:00' },
    { days: 'Sábado', times: '14:00–22:00' },
  ],
  sourceNote: 'Información consultada en el sitio y la carta oficiales el 5 de noviembre de 2026.',
} as const;

export type Dish = {
  slug: string;
  name: string;
  category: string;
  description: string;
  price: string;
};

export const featuredDishes: Dish[] = [
  {
    slug: 'caldero',
    name: 'Caldero',
    category: 'Del mar',
    description: 'Curanto en olla con mariscos, carnes ahumadas, pescado, papas y chapaleles fritos.',
    price: '$15.000',
  },
  {
    slug: 'rechupete',
    name: 'Rechupete',
    category: 'Del mar',
    description: 'Chupe de jaiba al gratín con pomodoro y un toque de coñac.',
    price: '$14.500',
  },
  {
    slug: 'frescolin',
    name: 'Frescolín',
    category: 'Para picotear',
    description: 'Ceviche de atún con kiwi y leche de tigre, indicado como sin gluten en la carta oficial.',
    price: '$13.000',
  },
];

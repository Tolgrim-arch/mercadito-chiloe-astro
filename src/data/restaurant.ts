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
  dietary?: string;
  image?: string;
  imageAlt?: string;
  highlight?: boolean;
};

export const dishes: Dish[] = [
  {
    slug: 'frescolin',
    name: 'Frescolín',
    category: 'Para picotear',
    description: 'Ceviche fresco de atún marinado con kiwi, leche de tigre y toques cítricos sureños.',
    price: '$13.000',
    dietary: 'Sin gluten',
    image: 'plato-04.jpg',
    imageAlt: 'Plato Frescolín de ceviche de atún con kiwi en El Mercadito',
    highlight: true,
  },
  {
    slug: 'tabla-chilota',
    name: 'Tabla Chilota',
    category: 'Para picotear',
    description: 'Selección de quesos artesanales del archipiélago, salmón ahumado a la leña, pasta de ajo chilote y pan de papa caliente.',
    price: '$16.500',
    dietary: 'Para compartir',
    image: 'plato-02.jpg',
    imageAlt: 'Rincón de cocina y elementos tradicionales en El Mercadito',
  },
  {
    slug: 'empanadas-mariscos',
    name: 'Empanadas del Archipiélago',
    category: 'Para picotear',
    description: 'Trilogía de empanadas fritas rellenas de navajuelas, choritos locales y queso mantecoso fundido.',
    price: '$9.500',
    dietary: 'Tradición local',
    image: 'plato-04.jpg',
    imageAlt: 'Preparación gastronómica de frutos del mar en El Mercadito',
  },
  {
    slug: 'caldero',
    name: 'Caldero Tradicional',
    category: 'Del mar',
    description: 'Curanto en olla con mariscos surtidos, costillar ahumado, longaniza artesanal, papas nativas y chapaleles fritos.',
    price: '$15.000',
    dietary: 'Plato insignia',
    image: 'plato-04.jpg',
    imageAlt: 'Preparación de cocina de mar en El Mercadito de Chiloé',
    highlight: true,
  },
  {
    slug: 'rechupete',
    name: 'Rechupete',
    category: 'Del mar',
    description: 'Chupe cremoso de jaiba desmenuzada al gratín con pomodoro casero, queso chanco y un toque de coñac.',
    price: '$14.500',
    dietary: 'Especialidad',
    image: 'plato-04.jpg',
    imageAlt: 'Presentación de cocina marina en El Mercadito',
    highlight: true,
  },
  {
    slug: 'pesca-del-dia',
    name: 'Pesca Artesanal del Golfo',
    category: 'Del mar',
    description: 'Pesca artesanal fresca del día a la plancha acompañada de puré rústico de papas nativas y verduras salteadas.',
    price: '$14.000',
    dietary: 'Pesca del día',
    image: 'plato-04.jpg',
    imageAlt: 'Pesca local fresca preparada en El Mercadito',
  },
  {
    slug: 'salmon-cochayuyo',
    name: 'Salmón en Costra de Cochayuyo',
    category: 'Del mar',
    description: 'Filete de salmón austral sellado con costra crocante de algas sureñas sobre risotto cremoso de mote.',
    price: '$15.500',
    image: 'plato-04.jpg',
    imageAlt: 'Plato de salmón austral en El Mercadito',
  },
  {
    slug: 'cazuela-cordero',
    name: 'Cazuela Chilota de Cordero',
    category: 'Del campo',
    description: 'Caldo campesino sustancioso con cordero lechón, hojas de luche marino, papas con chuchoca y verduras de huerto.',
    price: '$13.500',
    dietary: 'Receta patrimonial',
    image: 'plato-02.jpg',
    imageAlt: 'Muro tradicional y memoria culinaria en El Mercadito',
  },
  {
    slug: 'costillar-chicha',
    name: 'Costillar a la Chicha',
    category: 'Del campo',
    description: 'Costillar de cerdo macerado en chicha de manzana de Chiloé y horneado lentamente con especias locales.',
    price: '$14.800',
    image: 'plato-02.jpg',
    imageAlt: 'Detalles tradicionales de la cocina de Chiloé',
  },
  {
    slug: 'murta-membrillo',
    name: 'Murta con Membrillo',
    category: 'Postres y bebidas',
    description: 'Postre patrimonial del sur con murtas silvestres y membrillos confitados lentamente a fuego bajo con crema batida.',
    price: '$5.500',
    dietary: 'Postre casero',
    image: 'plato-04.jpg',
    imageAlt: 'Elaboración dulce tradicional en El Mercadito',
  },
  {
    slug: 'sour-calafate',
    name: 'Pisco Sour de Calafate',
    category: 'Postres y bebidas',
    description: 'Cóctel de autor preparado con destilado chileno, limón sutil exprimido y reducción de frutos silvestres de calafate.',
    price: '$6.500',
    dietary: 'Trago de autor',
    image: 'plato-04.jpg',
    imageAlt: 'Coctelería artesanal en El Mercadito de Chiloé',
  },
];

export const featuredDishes: Dish[] = dishes.filter((dish) => dish.highlight);

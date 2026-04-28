export interface ProductSpec {
  k: string;
  v: string;
}

export interface Product {
  name: string;
  src: string;
  specs: ProductSpec[];
}

export interface ProductCategory {
  id: string;
  label: string;
  shortLabel: string;
  tag: string;
  description: string;
  products: Product[];
}

export interface Benefit {
  icon: string;
  iconSub: string;
  label: string;
  desc: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "vertical",
    label: "Centros de Maquinado Verticales",
    shortLabel: "Verticales",
    tag: "CENTROS DE MAQUINADOS VERTICALES",
    description:
      "Versatilidad y precisión para piezas medianas. Ideales para moldes, componentes aeroespaciales y automotrices.",
    products: [
      {
        name: "VMC 1300 II",
        src: "/VMC1300II.webp",
        specs: [
          { k: "Mesa", v: "1,400×650 mm" },
          { k: "Husillo", v: "8,000 rpm" },
          { k: "Herramientas", v: "24 pos." },
        ],
      },
      {
        name: "CFV-600",
        src: "/CFV600.webp",
        specs: [
          { k: "Mesa", v: "900×430 mm" },
          { k: "Husillo", v: "12,000 rpm" },
          { k: "Herramientas", v: "24 pos." },
        ],
      },
      {
        name: "CFV-900",
        src: "/CFV900.webp",
        specs: [
          { k: "Mesa", v: "1100×430 mm" },
          { k: "Husillo", v: "12,000 rpm" },
          { k: "Herramientas", v: "24 pos." },
        ],
      },
    ],
  },
  {
    id: "doblecolumna",
    label: "Centros de Maquinado de Doble Columna",
    shortLabel: "Doble Columna",
    tag: "CENTROS DE MAQUINADO DE DOBLE COLUMNA",
    description:
      "Para piezas estructurales de gran formato. Rigidez máxima, alto torque y estabilidad térmica excepcional.",
    products: [
      {
        name: "GLU18X30",
        src: "/GLU18x30.webp",
        specs: [
          { k: "Mesa", v: "3,000×1,500 mm" },
          { k: "Velocidad", v: "6,000 rpm" },
          { k: "Herramienas", v: "24 pos." },
        ],
      },
      {
        name: "GLUe 13x16",
        src: "/GLUe13x16.webp",
        specs: [
          { k: "Mesa", v: "1,800×1,300 mm" },
          { k: "Velocidad", v: "6,000 rpm" },
          { k: "Herramienas", v: "24 pos." },
        ],
      },
      {
        name: "GLUe 16x20",
        src: "/GLUe16x20.webp",
        specs: [
          { k: "Mesa", v: "2,000×2,000 mm" },
          { k: "Velocidad", v: "6,000 rpm" },
          { k: "Herramienas", v: "Brazo" },
        ],
      },
    ],
  },
  {
    id: "tornos",
    label: "Tornos CNC",
    shortLabel: "Tornos CNC",
    tag: "TORNO CNC",
    description:
      "Precisión y velocidad en piezas de revolución. Desde componentes pequeños hasta ejes de gran diámetro.",
    products: [
      {
        name: "TC30II×1000",
        src: "/TC30IIx1000.webp",
        specs: [
          { k: "Velocidad de husillo", v: "3,500 rpm" },
          { k: "Diámetro máximo", v: "Ø 500 mm" },
          { k: "Longitud máxima", v: "1,000 mm" },
        ],
      },
      {
        name: "TC30II×1500",
        src: "/TC30IIx1500.webp",
        specs: [
          { k: "Velocidad de husillo", v: "3,500 rpm" },
          { k: "Diámetro máximo", v: "Ø 500 mm" },
          { k: "Longitud máxima", v: "1,500 mm" },
        ],
      },
      {
        name: "TC35A×1500",
        src: "/TC35Ax1500.webp",
        specs: [
          { k: "Velocidad de husillo", v: "2,500 rpm" },
          { k: "Diámetro máximo", v: "Ø 630 mm" },
          { k: "Longitud máxima", v: "1,500 mm" },
        ],
      },
    ],
  },
  {
    id: "horizontal",
    label: "Centros de Maquinado Horizontales",
    shortLabel: "Horizontales",
    tag: "CENTROS DE MAQUINADO HORIZONTALES",
    description:
      "Alta productividad para series largas en automotriz y fundición. Cambio automático de pallets y revólver de herramientas.",
    products: [
      {
        name: "HMC-100HD",
        src: "/HMC-100H.webp",
        specs: [
          { k: "Mesa pallets", v: "1000×1000 mm" },
          { k: "Velocidad husillo", v: "4,500 rpm" },
          { k: "Herramientas", v: "40 pos." },
        ],
      },
      {
        name: "HMC-80H",
        src: "/HMC-80H.webp",
        specs: [
          { k: "Mesa pallets", v: "800×800 mm" },
          { k: "Velocidad husillo", v: "4,500 rpm" },
          { k: "Herramientas", v: "65 pos." },
        ],
      },
    ],
  }
];

export const BENEFITS: Benefit[] = [
  {
    icon: "24",
    iconSub: "MSI",
    label: "Meses Sin Intereses",
    desc: "Financia tu maquinaria hasta en 24 MSI",
  },
  {
    icon: "15%",
    iconSub: "",
    label: "De Enganche",
    desc: "Comienza a producir con solo el 15% de enganche",
  },
  {
    icon: "3",
    iconSub: "meses",
    label: "De Gracia",
    desc: "Hasta 3 meses de gracia para empezar a pagar",
  },
  {
    icon: "$",
    iconSub: "",
    label: "Financiamiento Directo",
    desc: "Sin intermediarios, directo con Haitian Norte",
  },
];

export interface CertLogo {
  name: string;
  src: string;
}

export const CERT_LOGOS: CertLogo[] = [
  { name: "ISO 9001:2015", src: "/ISO9001-2015-haitian.webp" },
  { name: "ISO 14001:2015", src: "/ISO-14001-2015-haitian.webp" },
  { name: "ISO 45001", src: "/ISO-45001-haitian.webp" },
];

export interface ClientLogo {
  name: string;
  src: string;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Honda", src: "/honda-logo-haitian.webp" },
  { name: "BMW", src: "/bmw-logo-haitian.webp" },
  { name: "Tecnológico de Monterrey", src: "/tecmonterrey-logo-haitian.webp" },
  { name: "Nissan", src: "/nissan-logo-haitian.webp" },
  { name: "Cummins", src: "/cummins-logo-haitian.webp" },
];

export const CONTACT_INFO = [
  {
    iconPath:
      "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    text: "ventas@haitiancncnorte.mx",
  },
  {
    iconPath:
      "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    text: "+52 81 3848-2846",
  },
  {
    iconPath:
      "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    text: "Monterrey, Nuevo León, México",
  },
];

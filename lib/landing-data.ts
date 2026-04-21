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
    id: "horizontal",
    label: "Centros de Maquinado Horizontales",
    shortLabel: "Horizontales",
    tag: "HORIZONTAL",
    description:
      "Alta productividad para series largas en automotriz y fundición. Cambio automático de pallets y revólver de herramientas.",
    products: [
      {
        name: "HMC-100HD",
        src: "/HMC-100H.webp",
        specs: [
          { k: "Mesa pallets", v: "630×630 mm" },
          { k: "Velocidad husillo", v: "12,000 rpm" },
          { k: "Herramientas", v: "60 pos." },
        ],
      },
      {
        name: "HMC-80H",
        src: "/HMC-80H.webp",
        specs: [
          { k: "Mesa pallets", v: "500×500 mm" },
          { k: "Velocidad husillo", v: "10,000 rpm" },
          { k: "Potencia", v: "30 kW" },
        ],
      },
    ],
  },
  {
    id: "vertical",
    label: "Centros de Maquinado Verticales",
    shortLabel: "Verticales",
    tag: "VERTICAL",
    description:
      "Versatilidad y precisión para piezas medianas. Ideales para moldes, componentes aeroespaciales y automotrices.",
    products: [
      {
        name: "VMC 1300 II",
        src: "/VMC1300II.webp",
        specs: [
          { k: "Mesa", v: "1,300×600 mm" },
          { k: "Husillo", v: "12,000 rpm" },
          { k: "Herramientas", v: "24 pos." },
        ],
      },
      {
        name: "CFV-600",
        src: "/CFV600.webp",
        specs: [
          { k: "Mesa", v: "600×400 mm" },
          { k: "Husillo", v: "15,000 rpm" },
          { k: "Precisión", v: "±0.003 mm" },
        ],
      },
      {
        name: "CFV-900",
        src: "/CFV900.webp",
        specs: [
          { k: "Mesa", v: "900×500 mm" },
          { k: "Husillo", v: "15,000 rpm" },
          { k: "Potencia", v: "22 kW" },
        ],
      },
    ],
  },
  {
    id: "doblecolumna",
    label: "Centros de Maquinado de Doble Columna",
    shortLabel: "Doble Columna",
    tag: "DOBLE COLUMNA",
    description:
      "Para piezas estructurales de gran formato. Rigidez máxima, alto torque y estabilidad térmica excepcional.",
    products: [
      {
        name: "GLU18X30",
        src: "/GLU18x30.webp",
        specs: [
          { k: "Mesa", v: "3,000×1,800 mm" },
          { k: "Husillo", v: "18,000 rpm" },
          { k: "Potencia", v: "55 kW" },
        ],
      },
      {
        name: "GLUe 13x16",
        src: "/GLUe13x16.webp",
        specs: [
          { k: "Mesa", v: "1,600×1,300 mm" },
          { k: "Husillo", v: "15,000 rpm" },
          { k: "Carrera Z", v: "800 mm" },
        ],
      },
      {
        name: "GLUe 16x20",
        src: "/GLUe16x20.webp",
        specs: [
          { k: "Mesa", v: "2,000×1,600 mm" },
          { k: "Husillo", v: "15,000 rpm" },
          { k: "Control", v: "Siemens 840D" },
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
          { k: "Volteo", v: "Ø 300 mm" },
          { k: "Entre puntos", v: "1,000 mm" },
          { k: "Velocidad", v: "4,500 rpm" },
        ],
      },
      {
        name: "TC30II×1500",
        src: "/TC30IIx1500.webp",
        specs: [
          { k: "Volteo", v: "Ø 300 mm" },
          { k: "Entre puntos", v: "1,500 mm" },
          { k: "Velocidad", v: "4,500 rpm" },
        ],
      },
      {
        name: "TC35A×1500",
        src: "/TC35Ax1500.webp",
        specs: [
          { k: "Volteo", v: "Ø 350 mm" },
          { k: "Entre puntos", v: "1,500 mm" },
          { k: "Potencia", v: "22 kW" },
        ],
      },
    ],
  },
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
    icon: "48h",
    iconSub: "",
    label: "Aprobación",
    desc: "Te aprobamos tu crédito en 48 horas",
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
    text: "ventas@haitiannorte.mx",
  },
  {
    iconPath:
      "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    text: "+52 (33) 0000-0000",
  },
  {
    iconPath:
      "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    text: "Guadalajara, Jalisco, México",
  },
];

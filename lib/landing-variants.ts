/**
 * Configuración de contenido por landing.
 *
 * `HOME_VARIANT` reproduce exactamente los textos de la landing original (/),
 * y las variantes `/maquinas-cnc` y `/tornos-cnc` sólo sobrescriben lo que cambia.
 */

export interface AfterSalesPillar {
  /** El texto entre corchetes se resalta al renderizar. Ej: "[24 a 48 horas]" */
  title: string;
  desc: string;
}

export interface AfterSalesContent {
  eyebrow: string;
  heading: string;
  subhead: string;
  pillars: AfterSalesPillar[];
}

export interface LandingVariant {
  /** Nav sin links de navegación + footer reducido a la línea de distribuidor. */
  minimalChrome: boolean;
  hero: {
    eyebrow: string;
    titleTop: string;
    titleAccent: string;
    titleBottom: string;
    description: string;
    formTitle: string;
  };
  products: {
    eyebrow: string;
    title: string;
    description: string;
    /** IDs de PRODUCT_CATEGORIES a mostrar, en orden. */
    categoryIds: string[];
    showTabs: boolean;
  };
  gallery: {
    titleTop: string;
    titleAccent: string;
  };
  financing: {
    titleTop: string;
    titleAccent: string;
    /** Detalle de la tarjeta "24 MSI". */
    statDetail: string;
  };
  modalTitle: string;
  /** Opciones del select "Categoría de interés". */
  formCategories: string[];
  afterSales: AfterSalesContent | null;
}

export const ALL_FORM_CATEGORIES = [
  "Centros de Maquinado Horizontales",
  "Centros de Maquinado Verticales",
  "Centros de Maquinado de Doble Columna",
  "Tornos CNC",
];

const AFTER_SALES_PILLARS: AfterSalesPillar[] = [
  {
    title: "Instalación y puesta en marcha",
    desc: "Nuestros ingenieros entregan el equipo nivelado, calibrado y produciendo su primera pieza. La instalación está incluida en todos nuestros equipos.",
  },
  {
    title: "Refacciones en existencia",
    desc: "Inventario local de las refacciones de mayor rotación [en nuestro almacén de Monterrey]. Sin esperar tres meses a que llegue una pieza del extranjero.",
  },
  {
    title: "Servicio técnico y mantenimiento",
    desc: "Atención remota y visitas en sitio en toda la República. Tiempo de respuesta [de 24 a 48 horas] para paros de producción.",
  },
];

export const HOME_VARIANT: LandingVariant = {
  minimalChrome: false,
  hero: {
    eyebrow: "Maquinaria CNC Industrial",
    titleTop: "Maquinaria CNC",
    titleAccent: "con Financiamiento",
    titleBottom: "Directo",
    description:
      "Centros de maquinado y tornos CNC fabricados en México, respaldados por la tecnología global del Grupo Haitian. Ingeniería de precisión al alcance de su empresa.",
    formTitle: "Cotice su Maquinaria CNC",
  },
  products: {
    eyebrow: "Catálogo de Equipos",
    title: "Líneas de Producto",
    description:
      "Cuatro líneas especializadas para cubrir cada necesidad de su planta. Todos los equipos con soporte técnico local en todo México.",
    categoryIds: ["vertical", "doblecolumna", "tornos", "horizontal"],
    showTabs: true,
  },
  gallery: {
    titleTop: "Maquinaria que produce,",
    titleAccent: "día tras día",
  },
  financing: {
    titleTop: "Tu maquinaria CNC",
    titleAccent: "al alcance de tu empresa",
    statDetail: "El plazo más largo del mercado para maquinaria CNC industrial",
  },
  modalTitle: "Cotice su Maquinaria CNC",
  formCategories: ALL_FORM_CATEGORIES,
  afterSales: null,
};

export const MAQUINAS_CNC_VARIANT: LandingVariant = {
  ...HOME_VARIANT,
  minimalChrome: true,
  hero: {
    eyebrow: "Máquinas CNC Industriales",
    titleTop: "Máquinas CNC",
    titleAccent: "con Financiamiento",
    titleBottom: "Directo",
    description:
      "Centros de maquinado CNC fabricados en México, respaldados por la tecnología global del Grupo Haitian. Ingeniería de precisión al alcance de su empresa.",
    formTitle: "Cotice su Máquina CNC",
  },
  products: {
    eyebrow: "Catálogo de Equipos",
    title: "Líneas de Producto",
    description:
      "Tres líneas especializadas para cubrir cada necesidad de su planta. Todos los equipos con soporte técnico local en todo México.",
    categoryIds: ["vertical", "horizontal", "doblecolumna"],
    showTabs: true,
  },
  gallery: {
    titleTop: "Máquinas que producen,",
    titleAccent: "día tras día",
  },
  financing: {
    titleTop: "Tus máquinas CNC",
    titleAccent: "al alcance de tu empresa",
    statDetail: "El plazo más largo del mercado para máquinas CNC industriales",
  },
  modalTitle: "Cotice su Máquina CNC",
  formCategories: [
    "Centros de Maquinado Verticales",
    "Centros de Maquinado Horizontales",
    "Centros de Maquinado de Doble Columna",
  ],
  afterSales: {
    eyebrow: "Servicio Postventa",
    heading: "Compra la máquina. Se lleva el respaldo.",
    subhead:
      "Detrás de cada equipo Haitian hay un equipo técnico instalando, calibrando y dando servicio a maquinaria CNC. Instalamos, capacitamos a su gente y respondemos cuando la máquina se detiene.",
    pillars: AFTER_SALES_PILLARS,
  },
};

export const TORNOS_CNC_VARIANT: LandingVariant = {
  ...HOME_VARIANT,
  minimalChrome: true,
  hero: {
    eyebrow: "Tornos CNC Industriales",
    titleTop: "Tornos CNC",
    titleAccent: "con Financiamiento",
    titleBottom: "Directo",
    description:
      "Tornos CNC fabricados en México, respaldados por la tecnología global del Grupo Haitian. Ingeniería de precisión al alcance de su empresa.",
    formTitle: "Cotice su Torno CNC",
  },
  products: {
    eyebrow: "Catálogo de Equipos",
    title: "Tornos CNC",
    description:
      "Precisión y velocidad en piezas de revolución, desde componentes pequeños hasta ejes de gran diámetro. Todos los equipos con soporte técnico local en todo México.",
    categoryIds: ["tornos"],
    showTabs: false,
  },
  gallery: {
    titleTop: "Tornos que producen,",
    titleAccent: "día tras día",
  },
  financing: {
    titleTop: "Tus tornos CNC",
    titleAccent: "al alcance de tu empresa",
    statDetail: "El plazo más largo del mercado para tornos CNC industriales",
  },
  modalTitle: "Cotice su Torno CNC",
  formCategories: ["Tornos CNC"],
  afterSales: {
    eyebrow: "Servicio Postventa",
    heading: "Compra la máquina. Se lleva el respaldo.",
    subhead:
      "Detrás de cada equipo Haitian hay un equipo técnico instalando, calibrando y dando servicio a los tornos CNC. Instalamos, capacitamos a su gente y respondemos cuando la máquina se detiene.",
    pillars: AFTER_SALES_PILLARS,
  },
};

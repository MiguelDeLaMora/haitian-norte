/**
 * Datos de identidad legal usados por el aviso de privacidad.
 *
 * El responsable del tratamiento es MTE, no la marca: las campañas de
 * /maquinas-cnc y /tornos-cnc corren desde el Google Ads de MTE, y el sitio
 * opera como distribuidor autorizado bajo el nombre comercial «Haitian Norte»
 * (ver la línea del footer en components/landing/LandingFooter.tsx).
 *
 * Datos fiscales tomados del aviso de privacidad vigente de MTE.
 */

export const COMPANY = {
  legalName: "MACHINERY TECHNOLOGY & ENGINEERING, S.A. DE C.V.",
  rfc: "MT&0210254X4",
  /** Cómo se le nombra a lo largo del aviso. */
  shortName: "MTE",
  /** Nombre comercial bajo el que MTE opera este sitio. */
  brand: "Haitian Norte",
  email: "alejandro.rico@mteglobalsolutions.com",
} as const;

export const COMPANY_ADDRESS =
  "Av. Prolongación Lincoln No. 232, Col. Arco Vial, García, Nuevo León, México, C.P. 66023";

export const PHONE_DISPLAY = "+52 (81) 8381 0445";
export const PHONE_HREF = "tel:+528183810445";

/**
 * Actualizar cada vez que se modifique el texto del aviso.
 *
 * No coincide con el 24 de julio del aviso de MTE a propósito: esta versión
 * declara tratamientos que aquella no cubre (Microsoft Clarity, Brevo,
 * Cloudflare Turnstile y el análisis de crédito del financiamiento directo).
 */
export const PRIVACY_UPDATED_AT = "27 de julio de 2026";

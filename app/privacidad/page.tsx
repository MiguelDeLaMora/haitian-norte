import type { Metadata } from "next";

import LegalShell from "@/components/legal/LegalShell";
import {
  COMPANY,
  COMPANY_ADDRESS,
  PHONE_DISPLAY,
  PHONE_HREF,
  PRIVACY_UPDATED_AT,
} from "@/lib/legal";

/**
 * Aviso de privacidad (LFPDPPP).
 *
 * La estructura sigue el aviso de referencia; los datos de identidad viven en
 * lib/legal.ts. Las finalidades y las tecnologías declaradas se escribieron
 * contra lo que este sitio realmente hace, no contra la plantilla:
 *
 *  - El formulario recaba nombre, empresa, teléfono, correo, categoría y mensaje
 *    (components/ui/LeadForm.tsx) y adjunta los parámetros de campaña guardados
 *    en sessionStorage (lib/campaign.ts).
 *  - Los contactos se registran en Brevo, con servidores en la Unión Europea
 *    (app/api/send-email/route.ts) — transferencia internacional que hay que
 *    declarar.
 *  - El formulario usa Cloudflare Turnstile, que procesa la dirección IP.
 *  - El contenedor GTM-5G5699ZJ carga GA4, Google Ads con conversiones mejoradas,
 *    Meta y Microsoft Clarity; Clarity graba la sesión, así que se declara aparte.
 *  - Se ofrece financiamiento directo, lo que implica un análisis de crédito.
 */

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Aviso de privacidad de MACHINERY TECHNOLOGY & ENGINEERING, S.A. de C.V., operador de Haitian Norte, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

const FINALIDADES = [
  "Atender su solicitud de cotización o información sobre centros de maquinado y tornos CNC.",
  "Contactarle por teléfono, WhatsApp o correo electrónico para dar seguimiento a su solicitud.",
  "Elaborar propuestas técnicas, cotizaciones y contratos de compraventa de maquinaria.",
  "Evaluar y dar seguimiento a las solicitudes de financiamiento directo, incluyendo el análisis de crédito y la administración de la cobranza.",
  "Coordinar la entrega, instalación, puesta en marcha, capacitación, servicio técnico y suministro de refacciones de los equipos adquiridos.",
  "Elaboración de facturas y comprobantes fiscales, y presentación de declaraciones informativas ante las autoridades fiscales.",
  "Procesos internos administrativos como atención a clientes, mensajería, compras y cobranza.",
  `Campañas de marketing y ventas de ${COMPANY.shortName}, así como la medición del desempeño de dichas campañas.`,
];

const DATOS = [
  "nombre y apellido",
  "nombre de la empresa",
  "número de teléfono y/o WhatsApp",
  "dirección de correo electrónico",
  "la categoría de equipo de su interés",
  "el mensaje que decida incluir en el formulario",
];

const DATOS_FACTURACION = [
  "domicilio fiscal",
  "RFC (Registro Federal de Contribuyentes)",
  "constancia de situación fiscal",
  "datos de contacto administrativo",
];

const DATOS_FINANCIAMIENTO = [
  "datos de constitución y representación legal de la empresa",
  "referencias comerciales y bancarias",
  "información financiera y documentación de soporte que acredite capacidad de pago",
];

const TECNOLOGIAS = [
  [
    "Google Analytics 4 y Google Tag Manager",
    "para entender cómo se usa el sitio y medir qué contenidos generan solicitudes.",
  ],
  [
    "Google Ads",
    "para medir las conversiones originadas por nuestros anuncios, incluidas las conversiones mejoradas.",
  ],
  [
    "Meta (Facebook e Instagram)",
    "para medir y optimizar las campañas publicitarias en esas plataformas.",
  ],
  [
    "Microsoft Clarity",
    "para registrar de forma anónima la interacción con las páginas (desplazamiento, clics y grabación de la sesión de navegación) y así detectar fallas de uso. No se registra el contenido que usted escribe en los campos del formulario.",
  ],
] as const;

const ENCARGADOS = [
  [
    "Brevo (Sendinblue SAS, Francia)",
    "para el envío de los correos de contacto y el registro de su solicitud en nuestra base de datos de clientes y prospectos.",
  ],
  [
    "Cloudflare, Inc. (Estados Unidos)",
    "para la verificación antifraude del formulario, que procesa su dirección IP con el fin de distinguir a una persona de un envío automatizado.",
  ],
  [
    "Google LLC, Meta Platforms, Inc. y Microsoft Corporation (Estados Unidos)",
    "para la medición y optimización de nuestras campañas publicitarias, en los términos descritos en el apartado anterior.",
  ],
] as const;

const ARCO_REQUISITOS = [
  "nombre completo, teléfono donde podamos comunicarnos con usted y domicilio;",
  "copia escaneada de su identificación oficial o, en caso de que no sea usted el titular, carta poder o los documentos que acrediten al representante legal del titular;",
  "el derecho que desea ejercer (acceder, rectificar, cancelar, oponerse, o la manifestación expresa de revocar su consentimiento al tratamiento de sus datos personales);",
  "cualquier otra información o documento que facilite la localización de sus datos personales.",
];

export default function PrivacidadPage() {
  return (
    <LegalShell eyebrow="Legal" title="Aviso de privacidad">
      <p>
        En cumplimiento a la Ley Federal de Protección de Datos Personales en Posesión de los
        Particulares (en lo sucesivo la «Ley»), {COMPANY.legalName}, con Registro Federal de
        Contribuyentes {COMPANY.rfc} (en lo sucesivo «{COMPANY.shortName}»), con domicilio en{" "}
        {COMPANY_ADDRESS}, quien opera este sitio como distribuidor autorizado bajo el nombre
        comercial «{COMPANY.brand}», emite el siguiente aviso de privacidad para informarle sobre la
        responsabilidad y el tratamiento de sus datos personales.
      </p>
      <p>
        Puede contactarse a la oficina en el mismo domicilio indicado con anterioridad, al teléfono{" "}
        <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>, o también a la siguiente dirección de correo
        electrónico: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
      </p>

      <h2>¿Cómo protegemos sus datos personales?</h2>
      <p>
        En la recolección y tratamiento de datos personales que usted nos proporcione, cumplimos
        todos los principios que marca la Ley (artículo 6): licitud, calidad, consentimiento,
        información, finalidad, lealtad, proporcionalidad y responsabilidad.
      </p>
      <p>
        {COMPANY.shortName} tiene implementadas medidas de seguridad administrativas, técnicas y
        físicas para proteger sus datos personales, mismas que igualmente exigimos sean cumplidas
        por los proveedores de servicios que contratamos. Aun así, {COMPANY.shortName} en ninguna
        forma garantiza su seguridad, ni que la misma pueda ser interceptada, alterada o sustraída
        por terceros.
      </p>

      <h2>¿Para qué recabamos sus datos personales?</h2>
      <p>Sus datos personales serán utilizados para las siguientes finalidades:</p>
      <ul>
        {FINALIDADES.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <p>
        Los datos personales que recabamos de usted de manera libre y voluntaria a través de los
        formularios de este sitio podrán ser algunos o todos los siguientes: {DATOS.join(", ")}.
      </p>
      <p>
        Junto con el envío del formulario recabamos también los parámetros de campaña y los
        identificadores de clic publicitario presentes en la dirección con la que usted llegó al
        sitio, así como la página de origen, con la única finalidad de saber qué campaña originó su
        solicitud.
      </p>
      <p>
        Cuando exista una relación comercial, adicionalmente podremos recabar los datos necesarios
        para la facturación: {DATOS_FACTURACION.join(", ")}.
      </p>
      <p>
        Si usted solicita nuestro financiamiento directo, para el análisis y la autorización del
        crédito podremos requerir además: {DATOS_FINANCIAMIENTO.join(", ")}. Estos datos se
        utilizarán exclusivamente para evaluar la solicitud, formalizar el crédito y administrar su
        cobranza.
      </p>
      <p>
        Todos los datos personales antes mencionados son necesarios y se utilizarán para la
        consecución de las finalidades señaladas en el presente aviso de privacidad. No recabamos
        datos personales sensibles.
      </p>
      <p>
        Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos
        personales directamente de usted, ya sea personalmente o vía medios electrónicos como los
        formularios de este sitio, el correo electrónico, el teléfono o WhatsApp; a través de algún
        representante legal autorizado por usted; o cuando obtenemos información a través de otras
        fuentes que están permitidas por la ley.
      </p>

      <h2>Uso de cookies y tecnologías de rastreo</h2>
      <p>
        Este sitio utiliza cookies y tecnologías similares, administradas mediante Google Tag
        Manager, para recabar datos de navegación como la dirección IP, el tipo de dispositivo y
        navegador, las páginas visitadas, el origen del tráfico y los parámetros de campaña (UTM) e
        identificadores de clic publicitario presentes en la dirección con la que llegó al sitio.
        Estos datos se utilizan con las siguientes herramientas:
      </p>
      <ul>
        {TECNOLOGIAS.map(([name, purpose]) => (
          <li key={name}>
            <strong>{name}</strong>: {purpose}
          </li>
        ))}
      </ul>
      <p>
        Cuando usted envía un formulario y acepta este aviso de privacidad, su correo electrónico y
        teléfono pueden transmitirse a las plataformas antes mencionadas en forma cifrada (mediante
        un proceso irreversible de hash) con la única finalidad de medir la conversión de nuestras
        campañas. Estas plataformas actúan como encargados del tratamiento y no están autorizadas a
        usar dicha información para fines propios distintos a los aquí señalados.
      </p>
      <p>
        Usted puede deshabilitar o eliminar las cookies desde la configuración de su navegador en
        cualquier momento. Tenga en cuenta que algunas funciones del sitio podrían no operar
        correctamente si lo hace.
      </p>

      <h2>¿Cómo puede ejercer sus derechos ARCO, así como revocar su consentimiento?</h2>
      <p>
        Los derechos ARCO, por sus siglas, se refieren a acceder, rectificar, cancelar y oponerse.
        Por lo tanto usted tiene el derecho de acceder a sus datos personales que poseemos y a los
        detalles del tratamiento de los mismos, así como a rectificarlos/modificarlos en caso de ser
        inexactos o cancelarlos cuando considere que resulten ser excesivos o innecesarios para las
        finalidades que justificaron su obtención, u oponerse al tratamiento de los mismos para
        fines específicos. Así también usted podrá revocar el consentimiento que haya otorgado a{" "}
        {COMPANY.shortName} para el tratamiento de sus datos.
      </p>
      <p>
        El mecanismo que hemos implementado para que usted ejerza los derechos ARCO y/o revoque el
        consentimiento es a través del correo electrónico; por lo tanto, usted puede enviarnos una
        solicitud dirigida a {COMPANY.shortName} a la cuenta de correo electrónico señalada al
        inicio de este aviso. Nosotros le enviaremos por el mismo medio un formato de solicitud con
        instrucciones para que sea llenado. La solicitud deberá incluir por lo menos la siguiente
        información:
      </p>
      <ul>
        {ARCO_REQUISITOS.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
      <p>
        Un representante le comunicará la respuesta por la misma vía del correo electrónico en un
        plazo no mayor a 20 días hábiles.
      </p>

      <h2>¿Con quién compartimos su información?</h2>
      <p>
        Sus datos personales pueden ser transferidos a la Secretaría de Hacienda y Crédito Público
        (SHCP) a través del Servicio de Administración Tributaria (SAT) para el cumplimiento de
        nuestras obligaciones fiscales, así como a los siguientes proveedores de servicios
        tecnológicos que nos permiten operar este sitio, atender su solicitud y medir nuestras
        campañas publicitarias:
      </p>
      <ul>
        {ENCARGADOS.map(([name, purpose]) => (
          <li key={name}>
            <strong>{name}</strong>: {purpose}
          </li>
        ))}
      </ul>
      <p>
        Algunos de estos proveedores almacenan o procesan la información fuera de territorio
        nacional, por lo que el envío de su solicitud implica una transferencia internacional de
        datos limitada a las finalidades aquí descritas. En todos los casos exigimos que dichos
        proveedores mantengan medidas de protección equivalentes a las señaladas en este aviso y que
        traten sus datos únicamente por cuenta y bajo instrucciones de {COMPANY.shortName}.
      </p>
      <p>
        Nos comprometemos a no transferir su información personal a terceros sin su consentimiento,
        salvo las excepciones previstas en el artículo 37 de la Ley, así como a realizar esta
        transferencia en los términos que fija esa ley.
      </p>

      <h2>Modificaciones al aviso de privacidad</h2>
      <p>
        Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones
        al presente aviso de privacidad, para la atención de novedades legislativas o
        jurisprudenciales, políticas internas, nuevos requerimientos para la prestación u
        ofrecimiento de nuestros servicios o productos y prácticas del mercado.
      </p>
      <p>
        Estas modificaciones estarán disponibles en esta misma página y en nuestras oficinas. Fecha
        de la última actualización al presente aviso de privacidad: {PRIVACY_UPDATED_AT}.
      </p>

      <h2>Procedimiento de protección de derechos</h2>
      <p>
        En caso de que usted considere que su derecho a la protección de datos personales ha sido
        vulnerado, puede acudir al INAI (Instituto Nacional de Transparencia, Acceso a la
        Información y Protección de Datos Personales) con la finalidad de ejercer su procedimiento
        de protección de derechos. Para más información puede consultar la página del Instituto:{" "}
        <a href="https://home.inai.org.mx" target="_blank" rel="noopener noreferrer">
          home.inai.org.mx
        </a>
        .
      </p>

      <h2>Consentimiento para el tratamiento de sus datos</h2>
      <p>
        En caso de no estar de acuerdo con el presente aviso, favor de comunicarlo mediante escrito
        dirigido a: {COMPANY.legalName}, en el domicilio o el correo electrónico señalados al inicio
        de este aviso.
      </p>
    </LegalShell>
  );
}

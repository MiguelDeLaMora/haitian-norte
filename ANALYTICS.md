# Documentación Analítica (DataLayer)

Este documento detalla la estructura y la implementación de los eventos de analítica y conversiones agregados al proyecto de **Haitian Norte**, con especial enfoque en Google Tag Manager y las conversiones avanzadas con *User Provided Data* (Enhanced Conversions).

## Arquitectura de Analítica

Todo el código para manejar el envío de eventos se encuentra centralizado en `lib/analytics.ts`. Esto permite una fácil escalabilidad y asegura el tipado seguro para el objeto global `window.dataLayer`.

**Importación básica:**
```typescript
import { trackLead, trackWhatsAppClick } from "@/lib/analytics";
```

---

## Mapeo de Eventos

A continuación se enlistan los eventos actualmente implementados, el lugar desde el que se disparan, y la estructura de datos que empujan hacia Google Tag Manager.

### 1. Evento: `generate_lead`
Este es el evento principal de conversión que representa el envío exitoso de un formulario de contacto o solicitud de cotización.

- **Componente:** `components/ui/LeadForm.tsx`
- **Disparador:** Ocurre tras recibir una respuesta `200 OK` (éxito) de la API `/api/send-email`.
- **Estructura (JSON en DataLayer):**

```json
{
  "event": "generate_lead",
  "form_id": "lead_form_cnc",
  "category": "Centros de Maquinado Horizontales", // o la categoría seleccionada, o "general"
  "utm_source": "google",                        // Capturado automáticamente si está en URL
  "utm_medium": "cpc",                           // Capturado automáticamente si está en URL
  "utm_campaign": "tornos-cnc",                  // Capturado automáticamente si está en URL
  "gclid": "Cj0KCQjw0tDDB...",                   // Capturado automáticamente de Google Ads
  "fbclid": "IwAR1A_8LpM...",                    // Capturado automáticamente de Facebook/Meta Ads
  "user_data": {
    "email_address": "correo@empresa.mx", // Formateado en minúsculas y sin espacios
    "phone_number": "523300000000",       // Sanitizado (solo números)
    "address": {
      "first_name": "Juan",               // Extraído del nombre completo introducido
      "last_name": "García"               // El resto del string del nombre completo
    }
  }
}
```

> **Nota sobre User Provided Data:**
> Al enviar `user_data`, Google Ads (mediante Conversiones Avanzadas) y Meta (Conversions API) pueden utilizar esta información encriptada para asociar a los usuarios y lograr una medición de conversiones más precisa.

---

### 2. Evento: `whatsapp_click`
Este evento rastrea el interés o "micro-conversión" de usuarios comunicándose directamente por la vía rápida de WhatsApp.

- **Componente:** `components/ui/WhatsAppButton.tsx`
- **Disparador:** Ocurre en el evento `onClick` del botón flotante antes de abrir el enlace `wa.me/...`.
- **Estructura (JSON en DataLayer):**

```json
{
  "event": "whatsapp_click",
  "location": "floating_button"
}
```

---

## Cómo agregar nuevos eventos

Si deseas agregar nuevos eventos en el futuro (ej. clics en teléfonos directos o llamadas a la acción (CTAs) de navegación):

1. **Abre** `lib/analytics.ts`.
2. **Usa o exporta** una nueva función apoyándote en `pushToDataLayer`.

**Ejemplo:**
```typescript
export const trackCTAClick = (ctaName: string) => {
  pushToDataLayer("cta_click", { cta_name: ctaName });
};
```

3. **Impórtala** en el componente deseado (asegúrate de agregar `"use client";` al inicio del archivo del componente si es necesario) y ejecútala en el `onClick`.

---

## Configuración en Brevo (Contact Attributes)

Si deseas almacenar este historial de atribución directamente en la base de datos de contactos de **Brevo** (para fines de automatización, email marketing o segmentación de leads), es sumamente recomendable que crees los siguientes **Campos / Atributos de Contacto** (Contact Attributes) dentro de tu panel de Brevo.

### Atributos a crear en Brevo:

| Nombre del Atributo | Tipo de Dato | Propósito |
| :--- | :--- | :--- |
| `UTM_SOURCE` | Texto | Origen de la campaña (ej. `google`, `facebook`) |
| `UTM_MEDIUM` | Texto | Medio de la campaña (ej. `cpc`, `email`, `organic`) |
| `UTM_CAMPAIGN` | Texto | Nombre específico de la campaña publicitaria |
| `UTM_TERM` | Texto | Palabra clave buscada que activó el clic |
| `UTM_CONTENT` | Texto | Variación de anuncio o contenido que trajo al lead |
| `GCLID` | Texto | Identificador de Clic de Google Ads (Conversiones Offline) |
| `FBCLID` | Texto | Identificador de Clic de Facebook/Meta Ads (Conversiones Offline) |
| `REFERRER` | Texto | Sitio web anterior o referencia externa de procedencia |

### ¿Cómo configurarlos en el panel de Brevo?
1. Ve a tu cuenta de **Brevo** > **Contactos**.
2. Haz clic en **Ajustes** en la barra lateral izquierda y luego en **Atributos de contacto**.
3. Haz clic en **Añadir un atributo nuevo**.
4. Llena el nombre en mayúsculas (ej. `UTM_SOURCE`), selecciona el tipo **Texto** y haz clic en **Guardar**.
5. Repite para cada uno de los campos de la tabla.

Una vez creados, si decides migrar el envío de emails a la **API de Contactos de Brevo** (o mediante integraciones como Make/Zapier), podrás mapear estos valores de sesión del formulario directamente a los perfiles de tus clientes para tener una base de datos 100% trazable.


import { getStoredCampaignParams } from "./campaign";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const pushToDataLayer = (event: string, payload?: Record<string, any>) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...payload });
  }
};

export const trackLead = (data: {
  email: string;
  phone: string;
  name: string;
  category?: string;
}) => {
  // Enhanced Conversions format
  // Lowercase email and remove spaces
  const cleanEmail = data.email.trim().toLowerCase();
  
  // Keep only numbers and plus sign for phone
  const cleanPhone = data.phone.replace(/[^\d+]/g, "");

  // Split name for User Provided Data
  const nameParts = data.name.trim().split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

  const campaignParams = getStoredCampaignParams();

  pushToDataLayer("generate_lead", {
    form_id: "lead_form_cnc",
    category: data.category || "general",
    ...campaignParams,
    user_data: {
      email_address: cleanEmail,
      phone_number: cleanPhone,
      address: {
        first_name: firstName,
        last_name: lastName,
      },
    },
  });
};

export const trackWhatsAppClick = (location: string = "floating_button") => {
  pushToDataLayer("whatsapp_click", { location });
};

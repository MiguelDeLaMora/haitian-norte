export interface CampaignParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  referrer?: string;
}

export const CAMPAIGN_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
];

export const captureCampaignParams = () => {
  if (typeof window === "undefined") return;

  const urlParams = new URLSearchParams(window.location.search);
  let hasParams = false;
  const params: Record<string, string> = {};

  CAMPAIGN_KEYS.forEach((key) => {
    const val = urlParams.get(key);
    if (val) {
      params[key] = val;
      hasParams = true;
    }
  });

  // If we found any tracking parameter in URL, save it
  if (hasParams) {
    sessionStorage.setItem("campaign_params", JSON.stringify(params));
  } else {
    // If there are no URL params but we don't have anything stored yet, store referrer if external
    const stored = sessionStorage.getItem("campaign_params");
    if (!stored && document.referrer) {
      try {
        const refUrl = new URL(document.referrer);
        if (refUrl.hostname !== window.location.hostname) {
          sessionStorage.setItem(
            "campaign_params",
            JSON.stringify({ referrer: document.referrer })
          );
        }
      } catch (e) {
        // Safe catch for invalid referrers
      }
    }
  }
};

export const getStoredCampaignParams = (): Partial<CampaignParams> => {
  if (typeof window === "undefined") return {};
  try {
    const stored = sessionStorage.getItem("campaign_params");
    return stored ? JSON.parse(stored) : {};
  } catch (e) {
    return {};
  }
};

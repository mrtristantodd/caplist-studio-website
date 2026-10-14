export const SITE_URL = "https://capliststudio.com";
export const APP_URL =
  process.env.NEXT_PUBLIC_CAPLIST_APP_URL ?? "https://app.capliststudio.com";
export const APP_LIVE = process.env.NEXT_PUBLIC_CAPLIST_APP_LIVE === "true";

export const STUDIO_PREVIEW_URL =
  process.env.NEXT_PUBLIC_CAPLIST_STUDIO_PREVIEW_URL ??
  "https://caplist-studio-moi6z27iy-mrtristantodds-projects.vercel.app/preview/ui-02?organisation=Coastview%20Property%20Media&property=coastview&fixture=opportunity&p5=revising&output=primary#overview";

export const STUDIO_LOGIN_URL =
  process.env.NEXT_PUBLIC_CAPLIST_STUDIO_LOGIN_URL ??
  (APP_LIVE
    ? `${APP_URL.replace(/\/$/, "")}/login`
    : "https://caplist-studio-moi6z27iy-mrtristantodds-projects.vercel.app/login");

export const CONTACTS = {
  general: "hello@capliststudio.com",
  partners: "partners@capliststudio.com",
  privacy: "privacy@capliststudio.com",
  accounts: "accounts@capliststudio.com",
  founder: "tristan@capliststudio.com",
  support: "support@capliststudio.com",
} as const;

export const SOCIAL = {
  instagram: "https://www.instagram.com/capliststudio",
  tiktok: "https://www.tiktok.com/@capliststudio",
  youtube: "https://www.youtube.com/@capliststudio",
} as const;

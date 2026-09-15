export const SITE_URL = "https://capliststudio.com";
export const APP_URL =
  process.env.NEXT_PUBLIC_CAPLIST_APP_URL ?? "https://app.capliststudio.com";
export const APP_LIVE = process.env.NEXT_PUBLIC_CAPLIST_APP_LIVE === "true";

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

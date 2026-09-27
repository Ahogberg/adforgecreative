// Public, non-secret site settings. Environment variables override the defaults,
// but the defaults are the live values so a deploy without env vars still works.
export const brand = {
  name: 'Afterword',
  product: 'Afterword Monthly',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@afterwordmonthly.com',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://afterwordmonthly.com',
  // Production engine that receives applications (adforge-render on Railway).
  apiUrl: process.env.NEXT_PUBLIC_ADFORGE_API_URL || 'https://adforge-render-production.up.railway.app',
} as const;

export const brand = {
  name: 'Afterword',
  product: 'Afterword Monthly',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@adforgecreative.com',
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    'https://afterwordmonthly.com',
} as const;

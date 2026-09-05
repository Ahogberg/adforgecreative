import type { Metadata } from 'next';
import { Figtree, Libre_Caslon_Text } from 'next/font/google';
import { siteConfig } from '@/lib/site-config';
import './globals.css';

const figtree = Figtree({ variable: '--font-figtree', subsets: ['latin'] });
const caslon = Libre_Caslon_Text({
  variable: '--font-caslon',
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

const title = 'Afterword — One expert session. One month of content.';
const description =
  'A small editorial studio for consultancies and training firms. Send one webinar, podcast, workshop or keynote and get back a guide, eight LinkedIn posts, three emails and landing page copy in 48 hours.';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`),
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Afterword' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${caslon.variable}`}>{children}</body>
    </html>
  );
}

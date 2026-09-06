import type { Metadata } from 'next';
import { Figtree, Libre_Caslon_Text } from 'next/font/google';
import { brand } from '@/lib/brand';
import './globals.css';

const figtree = Figtree({ variable: '--font-sans', subsets: ['latin'] });
const caslon = Libre_Caslon_Text({ variable: '--font-display', subsets: ['latin'], weight: ['400', '700'], style: ['normal', 'italic'] });

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: 'Afterword — One expert session. One month of content.',
  description:
    'A productized content service for expert-led B2B companies. Turn one webinar, podcast, workshop, or keynote into a publication-ready campaign in 48 hours.',
  openGraph: {
    title: 'Afterword — One expert session. One month of content.',
    description: 'Publication-ready B2B content from one expert source, delivered in 48 hours.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Afterword Monthly editorial service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Afterword — One expert session. One month of content.',
    description: 'Publication-ready B2B content from one expert source, delivered in 48 hours.',
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

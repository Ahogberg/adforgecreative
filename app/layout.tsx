import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://adforgecreative.com'),
  title: 'AdForge — One expert session. One month of content.',
  description:
    'A productized content service for expert-led B2B companies. Turn one webinar, podcast, workshop, or keynote into a publication-ready campaign in 48 hours.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'AdForge — One expert session. One month of content.',
    description: 'Publication-ready B2B content from one expert source, delivered in 48 hours.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'AdForge content system' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdForge — One expert session. One month of content.',
    description: 'Publication-ready B2B content from one expert source, delivered in 48 hours.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}

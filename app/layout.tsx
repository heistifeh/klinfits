import type { Metadata, Viewport } from 'next';
import { drop01 } from '@/content/drop01';
import { color } from '@/lib/tokens';
import { clash, switzer } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: drop01.meta.title,
  description: drop01.meta.description,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: color('black'),
  colorScheme: 'dark',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${clash.variable} ${switzer.variable}`}>
      <body>{children}</body>
    </html>
  );
}

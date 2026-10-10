import localFont from 'next/font/local';

// Self-hosted from assets/fonts (ITF Free Font License). next/font copies the
// files unchanged into /_next/static/media; no subsetting or conversion.
// Fallback stacks live in app/theme.css (generated from tokens.json).

export const clash = localFont({
  src: [
    { path: '../assets/fonts/ClashDisplay-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../assets/fonts/ClashDisplay-Semibold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-clash',
  display: 'swap',
});

export const switzer = localFont({
  src: [
    { path: '../assets/fonts/Switzer-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../assets/fonts/Switzer-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../assets/fonts/Switzer-Semibold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-switzer',
  display: 'swap',
});

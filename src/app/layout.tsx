import type { Metadata } from 'next';
import { Josefin_Sans, Nunito } from 'next/font/google';

import SharedLayout from '@/components/layouts/SharedLayout';

import './globals.scss';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400'],
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'iDesignx',
  description:
    'We are a Creative Design, Brand development and activation firm. We aim to present brands in grand style.',
  keywords:
    'ui/ux, product design, graphics design, printings, web-development, mobile app development',
  authors: [
    { name: 'Xsteem Designx', url: 'https://www.esteemdesigns.com' },
    { name: 'Emmanuel Ayodeji Adebayo', url: 'https://www.devayo.com' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${josefinSans.className} ${nunito.className}`}>
        <SharedLayout>{children}</SharedLayout>
      </body>
    </html>
  );
}

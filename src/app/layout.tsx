import type { Metadata } from 'next';
import { Josefin_Sans, Nunito } from 'next/font/google';

import Layout from '@/components/Layout';
import ModeProvider from '@/providers/ModeProvider';

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
    'ui/ux, product design, graphics design, web-development, mobile app development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${nunito.className} ${josefinSans.className}`}>
        <ModeProvider>
          <Layout>{children}</Layout>
        </ModeProvider>
      </body>
    </html>
  );
}

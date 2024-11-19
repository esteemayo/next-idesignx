'use client';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

import Sidebar from '../sidebar/Sidebar';
import ScrollButton from '../buttons/ScrollButton';

import DarkMode from '../DarkMode';
import Info from '../Info';
import ClientOnly from '../ClientOnly';

import ModalProvider from '@/providers/ModalProvider';
import ModeProvider from '@/providers/ModeProvider';
import ToastProvider from '@/providers/ToastProvider';

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClientOnly>
      <ModeProvider>
        <ToastProvider />
        <Info />
        <Navbar />
        <Sidebar />
        <ModalProvider />
        {children}
        <Footer />
        <ScrollButton />
        <DarkMode />
      </ModeProvider>
    </ClientOnly>
  );
};

export default SharedLayout;

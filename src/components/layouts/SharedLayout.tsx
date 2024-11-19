'use client';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

import Sidebar from '../sidebar/Sidebar';
import ScrollButton from '../buttons/ScrollButton';

import DarkMode from '../DarkMode';
import Info from '../Info';
import ClientOnly from '../ClientOnly';

import ToastProvider from '@/providers/ToastProvider';
import ModalProvider from '@/providers/ModalProvider';

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClientOnly>
      <ToastProvider />
      <Info />
      <Navbar />
      <Sidebar />
      <ModalProvider />
      {children}
      <Footer />
      <ScrollButton />
      <DarkMode />
    </ClientOnly>
  );
};

export default SharedLayout;

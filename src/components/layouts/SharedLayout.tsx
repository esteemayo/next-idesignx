'use client';

import styled from 'styled-components';

import Navbar from '../navbar/Navbar';
import ScrollButton from '../buttons/ScrollButton';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';

import ClientOnly from '../ClientOnly';
import Info from '../Info';
import DarkMode from '../DarkMode';

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

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
      <Container>
        <ToastProvider />
        <Info />
        <Navbar />
        <Sidebar />
        <ModalProvider />
        {children}
        <Footer />
        <ScrollButton />
        <DarkMode />
      </Container>
    </ClientOnly>
  );
};

const Container = styled.main`
  display: grid;
  grid-template-rows: repeat(3, min-content);
`;

export default SharedLayout;

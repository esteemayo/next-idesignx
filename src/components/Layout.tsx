'use client';

import styled from 'styled-components';

import Navbar from './navbar/Navbar';
import ScrollButton from './buttons/ScrollButton';
import Footer from './footer/Footer';

import Info from './Info';
import Sidebar from './sidebar/Sidebar';
import ClientOnly from './ClientOnly';
import Modal from './Modal';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ClientOnly>
      <Container>
        <Info />
        <Navbar />
        <Sidebar />
        <Modal />
        {children}
        <Footer />
        <ScrollButton />
      </Container>
    </ClientOnly>
  );
};

const Container = styled.main`
  display: grid;
  grid-template-rows: repeat(3, min-content);
`;

export default Layout;

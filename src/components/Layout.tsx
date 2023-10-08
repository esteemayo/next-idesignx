'use client';

import styled from 'styled-components';

import LoginModal from './modal/LoginModal';
import DesignModal from './modal/DesignModal';

import Navbar from './navbar/Navbar';
import ScrollButton from './buttons/ScrollButton';
import Footer from './footer/Footer';
import Sidebar from './sidebar/Sidebar';

import Info from './Info';
import ClientOnly from './ClientOnly';
import DarkMode from './DarkMode';

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
        <DesignModal />
        <LoginModal />
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

export default Layout;

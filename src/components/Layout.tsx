'use client';

import styled from 'styled-components';

import ScrollButton from './buttons/ScrollButton';
import Navbar from './navbar/Navbar';
import DesignModal from './modal/DesignModal';
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

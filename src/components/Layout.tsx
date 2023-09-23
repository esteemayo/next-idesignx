'use client';

import styled from 'styled-components';

import Navbar from './navbar/Navbar';
import Info from './Info';
import Footer from './footer/Footer';
import ScrollButton from './buttons/ScrollButton';
import Sidebar from './Sidebar';
import ClientOnly from './ClientOnly';

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

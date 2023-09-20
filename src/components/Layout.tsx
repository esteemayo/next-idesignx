'use client';

import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <h1>Info</h1>
      <h1>Navbar</h1>
      {children}
      <h1>Footer</h1>
    </Container>
  );
};

const Container = styled.main`
  display: grid;
  grid-template-rows: repeat(3, min-content);
`;

export default Layout;

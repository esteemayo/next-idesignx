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
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
`;

export default Layout;

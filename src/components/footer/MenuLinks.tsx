'use client';

import styled from 'styled-components';
import MenuLink from './MenuLink';

const MenuLinks = () => {
  return (
    <Container>
      <MenuLink />
    </Container>
  );
};

const Container = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  align-items: center;
  gap: 2rem;
`;

export default MenuLinks;

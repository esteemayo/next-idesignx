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
`;

export default MenuLinks;

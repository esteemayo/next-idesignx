'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Container>
      <LogoBox>
        <Logo href='/'>Logo</Logo>
      </LogoBox>
    </Container>
  );
};

const Container = styled.nav`
  background-color: var(--clr-white);
  padding: 2.5rem;
`;

const LogoBox = styled.div``;

const Logo = styled(Link)``;

export default Navbar;

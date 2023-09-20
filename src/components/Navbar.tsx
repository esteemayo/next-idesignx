'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Container>
      <LogoBox>
        <Logo href='/'>Logo</Logo>
      </LogoBox>
      <NavItems>
        <NavItem>
          <Link href='/'>Home</Link>
        </NavItem>
        <NavItem>
          <Link href='/designs'>Design</Link>
        </NavItem>
        <NavItem>
          <Link href='/prints'>Prints</Link>
        </NavItem>
        <NavItem>
          <Link href='/'>Gallery</Link>
        </NavItem>
        <NavItem>
          <Link href='/about'>About</Link>
        </NavItem>
        <NavItem>
          <Link href='/contact'></Link>
        </NavItem>
      </NavItems>
      <Button>Upload your design</Button>
    </Container>
  );
};

const Container = styled.nav`
  background-color: var(--clr-white);
  padding: 2.5rem;
`;

const LogoBox = styled.div``;

const Logo = styled(Link)``;

const NavItems = styled.ul``;

const NavItem = styled.li``;

const Button = styled.button``;

export default Navbar;

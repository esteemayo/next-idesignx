'use client';

import styled from 'styled-components';

import Logo from '../navbar/Logo';
import Hamburger from '../navbar/Hamburger';

import MenuItems from './MenuItems';
import Button from '../buttons/Button';

import { navItems } from '@/data';
import { useMenu } from '@/hooks/useMenu';

const Sidebar = () => {
  const { showMenu, handleToggle } = useMenu();

  return (
    <Container active={showMenu}>
      <Wrapper>
        <LogoBox>
          <Hamburger isOpen={showMenu} onToggle={handleToggle} />
          <Logo />
        </LogoBox>
        <Button nav type='button' label='Upload your design' />
      </Wrapper>
      <MenuItems links={navItems} />
    </Container>
  );
};

const Container = styled.aside`
  width: 45rem;
  height: 100%;
  padding: 3px 2rem;
  position: fixed;
  top: 0;
  left: ${({ active }) => (active ? '0' : '-100%')};
  background-image: linear-gradient(
    to right bottom,
    var(--clr-purple-dark-1),
    var(--clr-purple-light-1),
    var(--clr-purple-light-2),
    var(--clr-purple-light-3)
  );
  color: var(--clr-white);
  z-index: 2000;

  @media only screen and (min-width: 48em) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export default Sidebar;

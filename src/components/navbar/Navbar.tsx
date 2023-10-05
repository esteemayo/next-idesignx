'use client';

import styled from 'styled-components';
import { usePathname } from 'next/navigation';

import Logo from './Logo';
import Hamburger from './Hamburger';
import NavItems from './NavItems';
import Button from '../buttons/Button';

import { useActiveMenu } from '@/hooks/useActiveMenu';
import { useMenu } from '@/hooks/useMenu';
import { useDesignModal } from '@/hooks/useDesignModal';

import { navItems } from '@/data';

interface IContainer {
  active: string;
}

const Navbar = () => {
  const pathname = usePathname();

  const { isOpen, onOpen } = useMenu();
  const designModal = useDesignModal();
  const { activeMenu } = useActiveMenu();

  return (
    <Container active={activeMenu}>
      <Wrapper>
        <Hamburger isOpen={isOpen} activeMenu={activeMenu} onToggle={onOpen} />
        <Logo />
      </Wrapper>
      <NavItems links={navItems} path={pathname} />
      <Box>
        <Button
          nav='true'
          type='button'
          label='Upload your design'
          onClick={designModal.onOpen}
        />
      </Box>
    </Container>
  );
};

const Container = styled.nav<IContainer>`
  display: ${({ active }) => (active === 'true' ? 'none' : 'grid')};
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  gap: 5rem;
  align-items: center;

  background-color: ${({ theme }) => theme.bg};
  padding: 1.5rem;
  position: relative;
  z-index: 3000;

  @media only screen and (min-width: 48em) {
    display: grid;
    grid-template-columns: repeat(3, minmax(min-content, 1fr));
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Box = styled.div`
  justify-self: end;
`;

export default Navbar;

'use client';

import styled from 'styled-components';
import { usePathname } from 'next/navigation';

import Hamburger from './Hamburger';
import Logo from './Logo';
import Button from '../buttons/Button';
import NavItems from './NavItems';

import { useMenu } from '@/hooks/useMenu';
import { useActiveMenu } from '@/hooks/useActiveMenu';

import { useLoginModal } from '@/hooks/useLoginModal';
import { useDesignModal } from '@/hooks/useDesignModal';

import { navItems } from '@/data';
import NavButton from './NavButton';

interface IContainer {
  active: string;
}

const Navbar = () => {
  const pathname = usePathname();

  const isOpen = useMenu((state) => state.isOpen);
  const designModal = useDesignModal();
  const loginModal = useLoginModal((state) => state.onOpen);
  const { activeMenu } = useActiveMenu();
  const onOpen = useMenu((state) => state.onOpen);

  return (
    <Container active={activeMenu}>
      <Wrapper>
        <LogoWrap>
          <Hamburger isOpen={isOpen} onToggle={onOpen} />
          <Logo />
        </LogoWrap>
        <NavItems links={navItems} path={pathname} />
        <Box>
          <NavButton label='Login' onClick={loginModal} />
          <Button
            nav='true'
            type='button'
            label='Upload your design'
            onClick={designModal.onOpen}
          />
        </Box>
      </Wrapper>
    </Container>
  );
};

const Container = styled.nav<IContainer>`
  display: ${({ active }) => (active === 'true' ? 'none' : 'flex')};
  justify-content: center;

  background-color: ${({ theme }) => theme.bg};
  padding: 1.5rem 0;
  position: relative;
  z-index: 3000;

  @media only screen and (min-width: 48em) {
    display: flex;
  }
`;

const Wrapper = styled.div`
  width: 140rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media only screen and (max-width: 48em) {
    & > button {
      &:nth-child(1) {
        display: none;
      }
    }
  }
`;

export default Navbar;

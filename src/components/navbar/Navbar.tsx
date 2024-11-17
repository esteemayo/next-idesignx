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

  const designModal = useDesignModal();
  const { activeMenu } = useActiveMenu();

  const isOpen = useMenu((state) => state.isOpen);
  const onOpen = useMenu((state) => state.onOpen);
  const loginModal = useLoginModal((state) => state.onOpen);

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

  @media only screen and (min-width: 112.5em) {
    padding: 1.7rem 0;
  }

  @media only screen and (min-width: 125em) {
    padding: 2rem 0;
  }
`;

const Wrapper = styled.div`
  width: 144rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 87.5em) {
    width: 130rem;
  }

  @media only screen and (max-width: 81.25em) {
    width: 120rem;
  }

  @media only screen and (max-width: 76.25em) {
    width: 115rem;
  }

  @media only screen and (max-width: 64em) {
    width: 105rem;
  }

  @media only screen and (max-width: 59.375em) {
    width: 100rem;
  }

  @media only screen and (max-width: 57.5em) {
    width: 95rem;
  }

  @media only screen and (max-width: 50em) {
    width: 90rem;
  }

  @media only screen and (max-width: 46.875em) {
    width: 85rem;
  }

  @media only screen and (max-width: 43.75em) {
    width: 80rem;
  }

  @media only screen and (max-width: 40.625em) {
    width: 75rem;
  }

  @media only screen and (max-width: 37.5em) {
    width: 70rem;
  }

  @media only screen and (max-width: 35.625em) {
    width: 65rem;
  }

  @media only screen and (max-width: 33.75em) {
    width: 60rem;
  }

  @media only screen and (max-width: 31.25em) {
    width: 55rem;
  }

  @media only screen and (max-width: 28.125em) {
    width: 50rem;
  }

  @media only screen and (max-width: 26.25em) {
    width: 45rem;
  }

  @media only screen and (max-width: 23.4375em) {
    width: 40rem;
  }

  @media only screen and (max-width: 20.625em) {
    width: 35rem;
  }

  @media only screen and (max-width: 18.125em) {
    width: 33rem;
  }

  @media only screen and (min-width: 112.5em) {
    width: 135rem;
  }

  @media only screen and (min-width: 125em) {
    width: 150rem;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  /* gap: 2rem; */

  @media only screen and (max-width: 50em) {
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  & > button {
    @media only screen and (max-width: 50em) {
      &:nth-child(1),
      &:nth-child(2) {
        display: none;
      }
    }
  }
`;

export default Navbar;

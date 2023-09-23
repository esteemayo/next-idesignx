'use client';

import { useState } from 'react';
import styled from 'styled-components';

import Logo from '../navbar/Logo';
import Hamburger from '../navbar/Hamburger';

import Button from '../buttons/Button';

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <Container>
      <Wrapper>
        <LogoBox>
          <Hamburger isOpen={showMenu} />
          <Logo />
        </LogoBox>
        <Button nav type='button' label='Upload your design' />
      </Wrapper>
    </Container>
  );
};

const Container = styled.aside`
  width: 45rem;
  height: 100%;
  padding: 3px 2rem;
  position: fixed;
  top: 0;
  left: 0;
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

'use client';

import { useState } from 'react';
import styled from 'styled-components';

import Logo from './navbar/Logo';
import Hamburger from './navbar/Hamburger';

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <Container>
      <Wrapper>
        <LogoBox>
          <Hamburger isOpen={showMenu} />
          <Logo />
        </LogoBox>
      </Wrapper>
    </Container>
  );
};

const Container = styled.aside`
  width: 45rem;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--clr-purple-light-1);
  color: var(--clr-white);
  z-index: 2000;
`;

const Wrapper = styled.div`
  display: flex;
`;

const LogoBox = styled.div``;

export default Sidebar;

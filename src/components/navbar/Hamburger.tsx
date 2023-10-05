'use client';

import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

interface HamburgerProps {
  activeMenu?: string;
  onToggle(): void;
}

interface IProps {
  active?: string;
}

const Hamburger: React.FC<HamburgerProps> = ({ activeMenu, onToggle }) => {
  const [showMenu, setShowMenu] = useState(activeMenu);

  const toggleHandler = useCallback(() => {
    setShowMenu('false');
    onToggle();
  }, [onToggle]);

  useEffect(() => {
    setShowMenu(activeMenu);
  }, [activeMenu]);

  return (
    <Container active={showMenu} onClick={toggleHandler}>
      <Span active={showMenu}>&nbsp;</Span>
      <Span active={showMenu}>&nbsp;</Span>
      <Span active={showMenu}>&nbsp;</Span>
    </Container>
  );
};

const Container = styled.button<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  width: 3rem;
  height: 2.3rem;
  font-weight: 400;
  background-color: transparent;
  color: ${({ active }) =>
    active === 'true' ? 'var(--clr-white)' : 'var(--clr-purple-light-2)'};
  cursor: pointer;

  @media only screen and (min-width: 48em) {
    display: none;
  }
`;

const Span = styled.span<IProps>`
  width: 100%;
  height: 2px;
  background-color: currentColor;
  transform-origin: left;

  &:first-child {
    transform: ${({ active }) =>
      active === 'true' ? 'rotate(45deg)' : undefined};
  }

  &:nth-child(2) {
    opacity: ${({ active }) => (active === 'true' ? 0 : undefined)};
    visibility: ${({ active }) => (active === 'true' ? 'hidden' : undefined)};
  }

  &:last-child {
    transform: ${({ active }) =>
      active === 'true' ? 'rotate(-45deg)' : undefined};
  }
`;

export default Hamburger;

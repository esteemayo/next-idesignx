'use client';

import styled from 'styled-components';
import { useCallback, useEffect, useMemo, useState } from 'react';

interface HamburgerProps {
  isOpen: boolean;
  onToggle(): void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, onToggle }) => {
  const [openMenu, setOpenMenu] = useState(isOpen);

  const toggleHandler = useCallback(() => {
    setOpenMenu(false);
    onToggle();
  }, [onToggle]);

  const activeMenu = useMemo(() => {
    return openMenu.toString();
  }, [openMenu]);

  useEffect(() => {
    setOpenMenu(isOpen);
  }, [isOpen]);

  return (
    <Container active={activeMenu} onClick={toggleHandler}>
      <Span active={activeMenu}>&nbsp;</Span>
      <Span active={activeMenu}>&nbsp;</Span>
      <Span active={activeMenu}>&nbsp;</Span>
    </Container>
  );
};

const Container = styled.button`
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

const Span = styled.span`
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

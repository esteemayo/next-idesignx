'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

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
    <Container type={openMenu} onClick={toggleHandler}>
      <Span type={openMenu}>&nbsp;</Span>
      <Span type={openMenu}>&nbsp;</Span>
      <Span type={openMenu}>&nbsp;</Span>
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  width: 3.2rem;
  height: 2.5rem;
  font-weight: 400;
  background-color: transparent;
  color: ${({ type }) =>
    type === true ? 'var(--clr-white)' : 'var(--clr-purple-light-2)'};
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
    transform: ${({ type }) => type === true && 'rotate(45deg)'};
  }

  &:nth-child(2) {
    opacity: ${({ type }) => type === true && 0};
    visibility: ${({ type }) => type === true && 'hidden'};
  }

  &:last-child {
    transform: ${({ type }) => type === true && 'rotate(-45deg)'};
  }
`;

export default Hamburger;

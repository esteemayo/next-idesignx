'use client';

import styled from 'styled-components';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { HamburgerProps } from '@/types';

interface IProps {
  active?: string;
}

interface IProperty {
  (
    active: string | undefined,
    value1: string | number,
    value2?: string | undefined
  ): string | number | undefined;
}

const Hamburger = ({ isOpen, onToggle }: HamburgerProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleHandler = useCallback(() => {
    setShowMenu(false);
    onToggle();
  }, [onToggle]);

  const activeMenu = useMemo(() => {
    return showMenu.toString();
  }, [showMenu]);

  useEffect(() => {
    setShowMenu(isOpen);
  }, [isOpen]);

  return (
    <Container active={activeMenu} onClick={toggleHandler}>
      <Span active={activeMenu}>&nbsp;</Span>
      <Span active={activeMenu}>&nbsp;</Span>
      <Span active={activeMenu}>&nbsp;</Span>
    </Container>
  );
};

const Container = styled.button<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  width: 2.65rem;
  height: 2.125rem;
  font-weight: 400;
  background-color: transparent;
  color: ${({ active }) =>
    setProperty(active, 'var(--clr-white)', 'var(--clr-purple-light-2)')};
  cursor: pointer;

  @media only screen and (max-width: 25em) {
    width: 2.4rem;
    height: 2rem;
  }

  @media only screen and (min-width: 50.0625em) {
    display: none;
  }
`;

const Span = styled.span<IProps>`
  width: 100%;
  height: 2px;
  background-color: currentColor;
  transform-origin: left;

  &:first-child {
    transform: ${({ active }) => setProperty(active, 'rotate(45deg)')};
  }

  &:nth-child(2) {
    opacity: ${({ active }) => setProperty(active, 0)};
    visibility: ${({ active }) => setProperty(active, 'hidden')};
  }

  &:last-child {
    transform: ${({ active }) => setProperty(active, 'rotate(-45deg)')};
  }
`;

const setProperty: IProperty = (
  active: string | undefined,
  value1: string | number,
  value2: string | undefined = undefined
): string | number | undefined => {
  return active === 'true' ? value1 : value2;
};

export default Hamburger;

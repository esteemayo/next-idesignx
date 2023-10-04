'use client';

import { useMemo } from 'react';
import styled, { css } from 'styled-components';

import CopyRight from './CopyRight';
import MenuLinks from './MenuLinks';

import { menuItems } from '@/data';
import { useDarkMode } from '@/hooks/useDarkMode';

interface IContainer {
  mode: string;
}

const Footer = () => {
  const mode = useDarkMode((state) => state.mode);

  const copyRightLabel = useMemo(() => {
    const now = new Date();
    return now.getFullYear();
  }, []);

  const activeMode = useMemo(() => {
    return mode.toString();
  }, [mode]);

  return (
    <Container mode={activeMode}>
      <MenuLinks links={menuItems} mode={activeMode} />
      <CopyRight value={copyRightLabel} />
    </Container>
  );
};

const Container = styled.footer<IContainer>`
  padding: 8rem;
  background-color: ${({ mode }) => mode === 'true' && '#101418'};
  background-image: ${({ mode }) =>
    mode === 'false' &&
    css`
  linear-gradient(
    to right bottom,
    var(--clr-purple-dark-1),
    var(--clr-purple-light-1),
    var(--clr-purple-light-2),
    var(--clr-purple-light-3)
  )
  `};
  color: var(--clr-white);

  @media only screen and (max-width: 37.5em) {
    padding: 4rem;
  }

  @media only screen and (max-width: 25em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

export default Footer;

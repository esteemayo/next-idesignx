'use client';

import { useMemo } from 'react';
import styled, { css } from 'styled-components';

import CopyRight from './CopyRight';
import MenuLinks from './MenuLinks';

import { menuItems } from '@/data/data';
import { useActiveMode } from '@/hooks/useActiveMode';

interface IContainer {
  mode: string;
}

const Footer = () => {
  const { activeMode } = useActiveMode();

  const copyRightLabel = useMemo(() => {
    const now = new Date();
    return now.getFullYear();
  }, []);

  return (
    <Container mode={activeMode}>
      <MenuLinks links={menuItems} mode={activeMode} />
      <CopyRight value={copyRightLabel} />
    </Container>
  );
};

const Container = styled.footer<IContainer>`
  padding: 8rem;
  background-color: ${({ mode }) =>
    mode === 'true' && 'var(--clr-bg-dark-secondary)'};
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

'use client';

import { useMemo } from 'react';
import styled, { css } from 'styled-components';

import CopyRight from './CopyRight';
import MenuLinks from './MenuLinks';

import { menuItems } from '@/data';
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
      <Wrapper>
        <MenuLinks links={menuItems} mode={activeMode} />
        <CopyRight value={copyRightLabel} />
      </Wrapper>
    </Container>
  );
};

const Container = styled.footer<IContainer>`
  display: flex;
  justify-content: center;

  padding: 8rem 0;
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
    padding: 6rem 0;
  }

  @media only screen and (max-width: 25em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media only screen and (min-width: 106.25em) {
    padding: 8.5rem;
  }

  @media only screen and (min-width: 112.5em) {
    padding: 9rem;
  }

  @media only screen and (min-width: 125em) {
    padding: 10rem;
  }
`;

const Wrapper = styled.div`
  width: 144rem;

  @media only screen and (max-width: 37.5em) {
    width: 70rem;
  }

  @media only screen and (max-width: 35.625em) {
    width: 65rem;
  }

  @media only screen and (max-width: 33.75em) {
    width: 60rem;
  }

  @media only screen and (min-width: 125em) {
    width: 150rem;
  }
`;

export default Footer;

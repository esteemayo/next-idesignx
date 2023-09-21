'use client';

import { useMemo } from 'react';
import styled from 'styled-components';

import CopyRight from './CopyRight';
import MenuLinks from './MenuLinks';

import { menuItems } from '@/data';

const Footer = () => {
  const copyRightLabel = useMemo(() => {
    const now = new Date();
    return now.getFullYear();
  }, []);

  return (
    <Container>
      <MenuLinks links={menuItems} />
      <CopyRight value={copyRightLabel} />
    </Container>
  );
};

const Container = styled.footer`
  padding: 8rem;
  background-image: linear-gradient(
    to right bottom,
    var(--clr-purple-dark-1),
    var(--clr-purple-light-1),
    var(--clr-purple-light-2),
    var(--clr-purple-light-3)
  );
  color: var(--clr-white);
`;

export default Footer;

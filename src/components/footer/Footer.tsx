'use client';

import styled from 'styled-components';
import MenuLinks from './MenuLinks';

const Footer = () => {
  return (
    <Container>
      <MenuLinks />
    </Container>
  );
};

const Container = styled.footer`
  padding: 8rem;
  background-image: linear-gradient(
    to right bottom,
    var(--clr-purple-dark),
    var(--clr-purple-light-1),
    var(--clr-purple-light-2),
    var(--clr-purple-light-3)
  );
  color: var(--clr-white);
`;

export default Footer;

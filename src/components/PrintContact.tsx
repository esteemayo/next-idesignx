'use client';

import styled from 'styled-components';
import { StyledLink } from './buttons/StyledLink';

const PrintContact = () => {
  return (
    <Container>
      <Paragraph>
        Need a custom design and professional <Br />
        printing services?
      </Paragraph>
      <StyledLink href='/contact'>Contact us</StyledLink>
    </Container>
  );
};

const Container = styled.section`
  grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);

  margin: 8rem 0;
  color: var(--clr-white);
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(/img/contact-1.jpg);
  background-size: cover;
  background-position: center;

  & > a {
    grid-area: 3 / 2 / -1 / span 2;
    align-self: self-start;
    justify-self: center;
  }
`;

const Br = styled.br``;

const Paragraph = styled.p`
  grid-area: 2 / 1 / 3 / -1;
  align-self: center;
  justify-self: center;

  text-align: center;
  font-size: 3rem;
  color: currentColor;
`;

export default PrintContact;

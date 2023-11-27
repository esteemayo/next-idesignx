'use client';

import styled, { css } from 'styled-components';

import { StyledLink } from './buttons/StyledLink';

interface PrintContactProps {
  bcg?: string;
}

const PrintContact = ({ bcg }: PrintContactProps) => {
  return (
    <Container bcg={bcg ?? '/img/contact-1.jpg'}>
      <Paragraph>
        Need a custom design and professional <Br />
        printing services?
      </Paragraph>
      <StyledLink href='/contact'>Contact us</StyledLink>
    </Container>
  );
};

const Container = styled.section<PrintContactProps>`
  grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);

  margin: 8rem 0;
  color: var(--clr-white);
  background-image: ${({ bcg }) =>
    bcg &&
    css`
  linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(${bcg})
  `};
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: 50em) {
    margin: 4rem 0;
  }

  @media only screen and (max-width: 25em) {
    margin: 0;
  }

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

  @media only screen and (max-width: 56.25em) {
    font-size: 2.8rem;
  }

  @media only screen and (max-width: 43.75em) {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: var(--default-font-size);
  }
`;

export default PrintContact;

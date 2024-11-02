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
  height: 22vw;
  background-color: ${({ theme }) => theme.bgImg};
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

  @media only screen and (max-width: 68.75em) {
    height: 25vw;
  }

  @media only screen and (max-width: 56.25em) {
    height: 27vw;
  }

  @media only screen and (max-width: 50em) {
    height: 30vw;
    margin: 4rem 0;
  }

  @media only screen and (max-width: 43.75em) {
    height: 33vw;
  }

  @media only screen and (max-width: 37.5em) {
    height: 35vw;
  }

  @media only screen and (max-width: 34.375em) {
    height: 37vw;
  }

  @media only screen and (max-width: 30em) {
    height: 45vw;
  }

  @media only screen and (max-width: 25em) {
    height: 47vw;
    margin: 2rem 0;
  }

  @media only screen and (max-width: 22.5em) {
    height: 50vw;
  }

  @media only screen and (max-width: 18.75em) {
    height: 55vw;
  }

  @media only screen and (min-width: 112.5em) {
    height: 25vw;
  }

  @media only screen and (min-width: 125em) {
    height: 27vw;
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
  line-height: 1.2;

  @media only screen and (max-width: 56.25em) {
    font-size: 3.1rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 3.2rem;
  }

  @media only screen and (max-width: 43.75em) {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 3.3rem;
    line-height: 1;
  }

  @media only screen and (max-width: 30em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 26.875em) {
    font-size: 2.8rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 2.6rem;
  }

  @media only screen and (max-width: 22.5em) {
    font-size: 2.4rem;
  }

  @media only screen and (max-width: 21.5em) {
    font-size: 2.2rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 3.2rem;
    line-height: 1.3;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 3.5rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 4rem;
  }
`;

export default PrintContact;

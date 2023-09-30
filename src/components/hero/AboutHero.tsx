'use client';

import React from 'react';
import styled from 'styled-components';

const AboutHero = () => {
  return (
    <Header>
      <Heading>About us</Heading>
      <Text>
        We are a Creative Design, Brand development and activation firm.
        <Span>We aim to present brands in grand style.</Span>
      </Text>
    </Header>
  );
};

const Header = styled.header`
  grid-column: full-start / full-end;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;

  color: var(--clr-white);
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(/img/about-hero.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Heading = styled.h1`
  grid-area: 2 / 1 / 3 / -1;
  align-self: self-end;
  justify-self: center;

  font-weight: 400;
  font-size: 4.5rem;
  text-transform: uppercase;
  color: currentColor;
  letter-spacing: 0.7rem;
  line-height: 1;
  animation: moveInBottom 0.7s ease-out 1s backwards;

  @media only screen and (max-width: 43.75em) {
    font-size: 4.25rem;
    letter-spacing: 4px;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 4rem;
    letter-spacing: 3px;
  }
`;

const Text = styled.p`
  grid-area: 3 / 1 / 4 / -1;
  align-self: self-start;
  justify-self: center;

  font-size: 2.5rem;
  text-align: center;
  color: currentColor;
  letter-spacing: 1px;
  animation: moveInTop 0.5s ease-out 0.75s backwards;

  @media only screen and (max-width: 43.75em) {
    font-size: 2.23rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 1.85rem;
    letter-spacing: 0.5px;
  }
`;

const Span = styled.span`
  display: block;
`;

export default AboutHero;

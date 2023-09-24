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

  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(6, 1fr);
  row-gap: 1rem;
`;

const Heading = styled.h1``;

const Text = styled.p``;

const Span = styled.span``;

export default AboutHero;

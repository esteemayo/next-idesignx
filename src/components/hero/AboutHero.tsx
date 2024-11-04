'use client';

import styled from 'styled-components';

import { CommonHero } from '../common/CommonHero';
import { CommonHeading } from '../common/CommonHeading';

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

const Header = styled(CommonHero)`
  grid-column: full-start / full-end;

  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;

  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(/img/hero/about-hero.jpg);
`;

const Heading = styled(CommonHeading)`
  grid-area: 2 / 1 / 3 / -1;
  align-self: self-end;
  justify-self: center;

  color: currentColor;
  letter-spacing: 0.7rem;
  animation: moveInBottom 0.7s ease-out 1s backwards;

  @media only screen and (max-width: 43.75em) {
    font-size: 4.25rem;
    letter-spacing: 4px;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 4rem;
    letter-spacing: 3px;
  }

  @media only screen and (max-width: 31.25em) {
    font-size: 3.7rem;
    letter-spacing: 1px;
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

  @media only screen and (max-width: 31.25em) {
    font-size: var(--default-font-size);
    letter-spacing: 0.25px;
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.4rem;
    letter-spacing: 0.1px;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 2.6rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 2.7rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 2.8rem;
  }
`;

const Span = styled.span`
  display: block;
`;

export default AboutHero;

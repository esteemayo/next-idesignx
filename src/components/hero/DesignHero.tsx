'use client';

import styled from 'styled-components';

import { CommonHero } from '../common/CommonHero';
import { CommonHeading } from '../common/CommonHeading';

const DesignHero = () => {
  return (
    <Header>
      <Heading>Custom designs</Heading>
      <Text>
        We offer you the easiest way to get your <br />
        materials printed without breaking a sweat!
      </Text>
    </Header>
  );
};

const Header = styled(CommonHero)`
  grid-column: full-start / full-end;

  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;

  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(/img/hero/design-hero.jpg);
`;

const Heading = styled(CommonHeading)`
  grid-area: 2 / 1 / 3 / -1;
  align-self: self-end;
  justify-self: center;

  color: currentColor;
  letter-spacing: 0.5rem;
  animation: moveInBottom 0.5s ease-out 0.75s backwards;

  @media only screen and (max-width: 81.25em), (min-width: 81.25em) {
    letter-spacing: 0.7rem;
  }

  @media only screen and (max-width: 75em) {
    letter-spacing: 0;
  }

  @media only screen and (max-width: 62.5em) {
    letter-spacing: 3px;
  }

  @media only screen and (max-width: 23.13em) {
    font-size: 2.7rem;
  }

  @media only screen and (max-width: 20em) {
    font-size: 2.5rem;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  grid-area: 3 / 3 / 4 / 5;
  align-self: self-start;
  justify-self: start;

  @media only screen and (max-width: 81.25em), (min-width: 81.25em) {
    grid-column: 2 / span 4;
    justify-self: center;
  }

  font-size: 2.5rem;
  color: currentColor;
  letter-spacing: 1px;
  text-align: center;

  @media only screen and (max-width: 75em) {
    grid-column: 1 / -1;
    letter-spacing: 0;
  }

  @media only screen and (max-width: 56.25em) {
    font-size: 2.6rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 2.7rem;
  }

  @media only screen and (max-width: 43.75em) {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 2.4rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 2.25rem;
  }

  @media only screen and (max-width: 30em) {
    font-size: 2.2rem;
  }

  @media only screen and (max-width: 26.875em) {
    font-size: 2.15rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 23.4375em) {
    font-size: 1.85rem;
  }

  @media only screen and (max-width: 21.5em) {
    font-size: 1.75rem;
  }

  @media only screen and (max-width: 20em) {
    font-size: 1.65rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 17.5em) {
    font-size: 1.45rem;
  }

  @media only screen and (max-width: 16.875em) {
    font-size: 1.35rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 1.4rem;
    letter-spacing: 1px;
  }
`;

export default DesignHero;

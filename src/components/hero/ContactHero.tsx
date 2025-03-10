'use client';

import styled from 'styled-components';

import { CommonHero } from '../common/CommonHero';
import { CommonHeading } from '../common/CommonHeading';

const ContactHero = () => {
  return (
    <Header>
      <Heading>Contact us</Heading>
      <Text>
        Get in touch with us and let&apos;s <Br /> get the ball rolling
      </Text>
    </Header>
  );
};

const Header = styled(CommonHero)`
  grid-column: full-start / full-end;

  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(6, 1fr);
  row-gap: 1rem;

  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(/img/hero/contact-hero.jpg);
`;

const Heading = styled(CommonHeading)`
  grid-area: 2 / 1 / 3 / -1;
  align-self: self-end;
  justify-self: center;

  letter-spacing: 0.7rem;
  animation: moveInBottom 0.5s ease-out 0.75s backwards;
`;

const Text = styled.p`
  grid-area: 3 / 1 / 4 / -1;
  align-self: self-start;
  justify-self: center;

  font-size: 2.5rem;
  text-align: center;
  animation: moveInLeft 0.5s ease-out;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

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

  @media only screen and (max-width: 18.75em) {
    font-size: 1.65rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 2.6rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 2.8rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 3rem;
  }
`;

const Br = styled.br``;

export default ContactHero;

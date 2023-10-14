'use client';

import styled from 'styled-components';
import { CommonHeader } from '../common/CommonHeader';

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

const Header = styled.header`
  grid-column: full-start / full-end;
  color: var(--clr-white);
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(/img/hero/design-hero.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media only screen and (max-width: 25em) {
    background-attachment: scroll;
  }

  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
`;

const Heading = styled(CommonHeader)`
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
    font-size: 2.3rem;
    letter-spacing: 0;
  }

  @media only screen and (max-width: 23.13em) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 20em) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
`;

export default DesignHero;

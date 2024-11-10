'use client';

import styled from 'styled-components';

import { CommonHero } from '../common/CommonHero';
import { CommonHeading } from '../common/CommonHeading';

const PrintHero = () => {
  return (
    <Header>
      <HeadingPrimary>Print</HeadingPrimary>
      <Text>
        We offer you the easiest way to get your <Br />
        materials printed without breaking a sweat!
      </Text>
      <HeadingSecondary className='heading-left'>
        <HeadingSub>Be assured</HeadingSub>
        <HeadingMain>Sample prints</HeadingMain>
      </HeadingSecondary>
      <HeadingSecondary className='heading-right'>
        <HeadingSub>Guaranteed</HeadingSub>
        <HeadingMain>5 days max</HeadingMain>
      </HeadingSecondary>
    </Header>
  );
};

const Header = styled(CommonHero)`
  grid-column: full-start / full-end;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: min-content repeat(3, 1fr);
  gap: 1.5rem;

  @media only screen and (max-width: 31.25em) {
    gap: 0;
  }

  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(/img/hero/prints-hero.jpg);
`;

const HeadingPrimary = styled(CommonHeading)`
  grid-area: 2 / 1 / 3 / -1;
  align-self: self-end;
  justify-self: center;

  color: currentColor;
  letter-spacing: 0.7rem;
  animation: moveInTop 0.5s ease-out 0.75s backwards;
`;

const Text = styled.p`
  grid-area: 3 / 1 / 4 / -1;
  justify-self: center;

  font-size: 2.5rem;
  text-align: center;
  color: currentColor;
  letter-spacing: 1px;
  animation: moveInRight 1s ease-out;
  backface-visibility: hidden;

  @media only screen and (max-width: 56.25em) {
    font-size: 2.6rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 2.7rem;
  }

  @media only screen and (max-width: 43.75em) {
    align-self: center;
    line-height: 1.2;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 2.65rem;
  }

  @media only screen and (max-width: 31.25em) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 30em) {
    font-size: 2.25rem;
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

const HeadingSecondary = styled.h2`
  grid-row: 4 / -1;
  justify-self: center;

  font-weight: lighter;
  text-transform: uppercase;
  color: currentColor;
  animation: moveInBottom 0.5s ease-out 1s backwards;
`;

const HeadingSub = styled.span`
  display: block;
  font-size: var(--default-font-size);
  letter-spacing: 3px;
  animation: moveInBottom 0.5s ease-out 1s backwards;

  @media only screen and (max-width: 56.25em) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 1.75rem;
  }

  @media only screen and (max-width: 31.35em) {
    font-size: var(--default-font-size);
  }

  @media only screen and (max-width: 30em) {
    font-size: 1.45rem;
  }

  @media only screen and (max-width: 26.875em) {
    font-size: 1.35rem;
  }

  @media only screen and (max-width: 25em) {
    letter-spacing: 2px;
  }

  @media only screen and (max-width: 21.5em) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 1.7rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 2.3rem;
  }
`;

const HeadingMain = styled.span`
  display: block;
  font-size: 2.4rem;
  letter-spacing: 0.5rem;

  @media only screen and (max-width: 56.25em) {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }

  @media only screen and (max-width: 50em) {
    font-size: 2.6rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 2.55rem;
  }

  @media only screen and (max-width: 31.35em) {
    font-size: 2.4rem;
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
    font-size: 1.95rem;
  }

  @media only screen and (max-width: 21.5em) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: var(--default-font-size);
  }

  @media only screen and (max-width: 17.5em) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 2.8rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 3.1rem;
  }
`;

export default PrintHero;

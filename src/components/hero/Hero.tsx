'use client';

import styled from 'styled-components';

import { CommonHero } from '../common/CommonHero';
import { CommonHeading } from '../common/CommonHeading';

interface IText {
  type: string;
}

const Hero = () => {
  return (
    <Header>
      <Heading>
        <Text type='left'>You imagine.</Text>
        <Text type='right'>We print.</Text>
        <Text type='left'>
          We <b>Deliver.</b>
        </Text>
      </Heading>
    </Header>
  );
};

const Header = styled(CommonHero)`
  grid-column: full-start / full-end;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;

  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(/img/hero/hero.jpg);
`;

const Heading = styled(CommonHeading)`
  grid-area: 2 / 1 / 3 / span 3;
  align-self: center;
  justify-self: center;

  @media only screen and (max-width: 56.25em) {
    margin-left: -5rem;
  }

  color: currentColor;

  @media only screen and (max-width: 50em) {
    grid-column: 1 / -1;
  }

  @media only screen and (max-width: 30em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 26.875em) {
    font-size: 2.8rem;
  }

  @media only screen and (max-width: 21.5em) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 2.25rem;
  }
`;

const Text = styled.span<IText>`
  display: block;
  letter-spacing: 0.5rem;
  line-height: 1.3;
  animation: ${({ type }) => type === 'right' && 'moveInRight 1s ease-out'};
  animation: ${({ type }) => type === 'left' && 'moveInLeft 1s ease-out'};
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  @media only screen and (max-width: 18.75em) {
    letter-spacing: 3px;
  }
`;

export default Hero;

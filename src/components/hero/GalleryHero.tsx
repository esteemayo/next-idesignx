'use client';

import styled from 'styled-components';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

import { CommonHero } from '../common/CommonHero';
import { CommonHeading } from '../common/CommonHeading';

const GalleryHero = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const elem = textRef.current as string | Element;
    init(elem, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        'You imagine.',
        'We design.',
        'We brand.',
        'We develop.',
        'We print.',
        'We deliver.',
      ],
    });
  }, []);

  return (
    <Header>
      <Heading>Gallery</Heading>
      <Text ref={textRef}>&nbsp;</Text>
    </Header>
  );
};

const Header = styled(CommonHero)`
  grid-column: full-start / full-end;

  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;

  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(/img/hero/gallery-hero.jpg);
`;

const Heading = styled(CommonHeading)`
  grid-area: 2 / 1 / 3 / -1;
  align-self: self-end;

  color: currentColor;
  letter-spacing: 0.7rem;
  line-height: 1.2;

  @media only screen and (max-width: 17.5em) {
    letter-spacing: 0.5rem;
  }

  @media only screen and (min-width: 112.5em) {
    letter-spacing: 1rem;
  }
`;

const Text = styled.p`
  grid-area: 3 / 1 / 4 / -1;
  align-self: self-start;

  font-size: 3rem;
  text-align: center;
  color: currentColor;

  @media only screen and (max-width: 68.75em) {
    font-size: 3.5rem;
  }

  @media only screen and (max-width: 56.25em) {
    font-size: 3.2rem;
  }

  @media only screen and (max-width: 31.25em) {
    font-size: 2.5rem;
    line-height: 1.3;
  }

  @media only screen and (max-width: 17.5em) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 3.2rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 3.5rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 4rem;
  }
`;

export default GalleryHero;

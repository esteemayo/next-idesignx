'use client';

import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import styled from 'styled-components';

const GalleryHero = () => {
  const textRef = useRef();

  useEffect(() => {
    const elem = textRef.current;
    init(elem, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        'You imagine.',
        'We design.',
        'We brand.',
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

const Header = styled.header`
  grid-column: full-start / full-end;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;

  color: var(--clr-white);
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(/img/gallery-hero.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Heading = styled.h1`
  grid-area: 2 / 1 / 3 / -1;
  align-self: self-end;

  font-weight: 400;
  font-size: 4.5rem;
  text-transform: uppercase;
  color: currentColor;
  letter-spacing: 0.7rem;
  line-height: 1.2;

  @media only screen and (max-width: 112.5em) {
    font-size: 5.5rem;
    letter-spacing: 1rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 5rem;
  }

  @media only screen and (max-width: 31.25em) {
    font-size: 4.25rem;
  }

  @media only screen and (max-width: 17.5em) {
    font-size: 4rem;
    letter-spacing: 0.5rem;
  }
`;

const Text = styled.p`
  grid-area: 3 / 1 / 4 / -1;
  align-self: self-start;

  font-size: 3rem;
  text-align: center;
  color: currentColor;

  @media only screen and (max-width: 112.5em) {
    font-size: 3.7rem;
  }

  @media only screen and (max-width: 68.75em) {
    font-size: 3.5rem;
  }
`;

export default GalleryHero;

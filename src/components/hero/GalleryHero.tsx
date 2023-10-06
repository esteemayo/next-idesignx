'use client';

import { useRef } from 'react';
import styled from 'styled-components';

const GalleryHero = () => {
  const textRef = useRef();

  return (
    <Header>
      <Heading>Gallery</Heading>
      <Text>
        We <Span ref={textRef}></Span>
      </Text>
    </Header>
  );
};

const Header = styled.header`
  grid-column: full-start / full-end;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;

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
`;

const Text = styled.p``;

const Span = styled.span``;

export default GalleryHero;
'use client';

import styled from 'styled-components';

import { GalleryProps } from '@/types';
import GalleryItem from './GalleryItem';

const Gallery = ({ data }: GalleryProps) => {
  return (
    <Container>
      <Heading>Gallery</Heading>
      <Wrapper>
        {data.map((item) => {
          const { id, img } = item;
          return <GalleryItem key={id} src={img} />;
        })}
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
  margin: 15rem 0;

  @media only screen and (max-width: 50em) {
    grid-column: full-start / full-end;
    margin: 10rem 0;
  }

  @media only screen and (max-width: 25em) {
    margin: 8rem 0;
  }
`;

const Heading = styled.h2`
  text-transform: capitalize;
  text-align: center;
  font-weight: 400;
  font-size: 3rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 8rem;

  @media only screen and (max-width: 56.25em) {
    font-size: 3.1rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 3.2rem;
  }

  @media only screen and (max-width: 43.75em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 2.8rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 2.6rem;
    margin-bottom: 5rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 2.4rem;
  }

  @media only screen and (max-width: 21.5em) {
    font-size: 2.2rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 3.1rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 3.25rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 3.5rem;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 27.7rem));
  grid-auto-rows: 27.7rem;
  justify-content: center;
  gap: 3rem;

  @media only screen and (max-width: 26.25em) {
    grid-auto-rows: auto;
    row-gap: 2rem;
  }
`;

export default Gallery;

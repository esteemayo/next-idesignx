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

  @media only screen and (max-width: 51.25em) {
    grid-column: full-start / full-end;
    margin: 10rem 0;
  }

  @media only screen and (max-width: 30em) {
    margin: 6rem 0;
  }

  @media only screen and (max-width: 25em) {
    margin: 4.5rem 0;
  }

  @media only screen and (max-width: 21.5em) {
    margin: 3rem 0 2rem;
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
    margin-bottom: 3rem;
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

  @media only screen and (max-width: 50em) {
    grid-template-columns: repeat(auto-fit, minmax(min-content, 25rem));
    grid-auto-rows: 25rem;
  }

  @media only screen and (max-width: 43.75em) {
    grid-template-columns: repeat(auto-fit, minmax(min-content, 23rem));
    grid-auto-rows: 23rem;
  }

  @media only screen and (max-width: 40.625em) {
    grid-template-columns: repeat(auto-fit, minmax(min-content, 20rem));
    grid-auto-rows: 20rem;
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: repeat(auto-fit, minmax(min-content, 18rem));
    grid-auto-rows: 18rem;
    gap: 2rem;
  }

  @media only screen and (max-width: 30em) {
    grid-template-columns: repeat(auto-fit, minmax(min-content, 16rem));
    grid-auto-rows: 16rem;
  }

  @media only screen and (max-width: 26.875em) {
    grid-template-columns: repeat(auto-fit, minmax(min-content, 14rem));
    grid-auto-rows: 14rem;
  }

  @media only screen and (max-width: 26.25em) {
    grid-auto-rows: auto;
    row-gap: 2rem;
  }

  @media only screen and (max-width: 25em) {
    grid-template-columns: repeat(2, min-content);
  }
`;

export default Gallery;

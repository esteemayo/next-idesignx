'use client';

import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

import GalleryItem from './GalleryItem';

type GalleryImageValues = {
  readonly id: number;
  img: string;
};

interface GalleryProps {
  data: Array<GalleryImageValues>;
}

const Gallery: FC<GalleryProps> = ({ data }) => {
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
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 25rem));
  justify-content: center;
  grid-auto-rows: 25rem;

  @media only screen and (max-width: 26.25em) {
    grid-auto-rows: auto;
    row-gap: 2rem;
  }
`;

export default Gallery;

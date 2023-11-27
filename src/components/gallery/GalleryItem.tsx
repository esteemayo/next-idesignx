'use client';

import Image from 'next/image';
import styled from 'styled-components';

import { GalleryItemProps } from '@/types';

const GalleryItem = ({ src }: GalleryItemProps) => {
  return (
    <Container>
      <StyledImage src={src} width={250} height={258} alt='' />
    </Container>
  );
};

const Container = styled.figure`
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;

  @media only screen and (max-width: 26.25em) {
    width: 40rem;
    height: 30rem;
  }
`;

export default GalleryItem;

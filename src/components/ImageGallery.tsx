'use client';

import styled from 'styled-components';
import { FC, useCallback, useMemo, useState } from 'react';

import ImageItem from './ImageItem';
import ImageModal from './modal/ImageModal';

import { useImageModal } from '@/hooks/useImageModal';

type ImageValues = {
  readonly id: number;
  img: string;
};

interface ImageGalleryProps {
  images: ImageValues[];
  onOpen(value: number): void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onOpen }) => {
  return (
    <>
      <Container>
        {images.map((item, index) => {
          const { id, img } = item;
          return (
            <ImageItem key={id} src={img} value={index} onClick={onOpen} />
          );
        })}
      </Container>
    </>
  );
};

const Container = styled.section`
  padding: 10rem 3rem;
  padding-bottom: 0;
  background-color: ${({ theme }) => theme.bg};

  grid-column: full-start / full-end;
  display: grid;
  grid-template-rows: repeat(7, 5vw);
  grid-template-columns: repeat(8, 1fr);
  gap: 1.5rem;

  @media only screen and (max-width: 50em) {
    padding-top: 5rem;
    padding-bottom: 1rem;
  }

  @media only screen and (max-width: 25em) {
    padding: 3rem;
  }
`;

export default ImageGallery;

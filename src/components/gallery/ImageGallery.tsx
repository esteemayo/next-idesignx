'use client';

import styled from 'styled-components';
import { useCallback, useEffect, useMemo, useState } from 'react';

import ImageItem from './ImageItem';
import GalleryModal from '../modal/GalleryModal';

import { useImageModal } from '@/hooks/useImageModal';
import { GalleryItem, ImageGalleryProps } from '@/types';

const ImageGallery = ({ galleryImages }: ImageGalleryProps) => {
  const isOpen = useImageModal((state) => state.isOpen);
  const onOpen = useImageModal((state) => state.onOpen);
  const onClose = useImageModal((state) => state.onClose);

  const [slideIndex, setSlideIndex] = useState(0);
  const [images, setImages] = useState<GalleryItem>([]);

  const lastIndex = useMemo(() => {
    return images.length - 1;
  }, [images.length]);

  const handleOpen = useCallback(
    (index: number) => {
      onOpen();
      setSlideIndex(index);
    },
    [onOpen]
  );

  const handleClick = useCallback(
    (direction: string) => {
      let newSlideIndex: number;
      const lastIndex = images.length - 1;

      if (direction === 'left') {
        newSlideIndex = slideIndex === 0 ? lastIndex : slideIndex - 1;
      } else {
        newSlideIndex = slideIndex === lastIndex ? 0 : slideIndex + 1;
      }

      setSlideIndex(newSlideIndex);
    },
    [images, slideIndex]
  );

  const selectedImage = useMemo(() => {
    return images[slideIndex]?.img;
  }, [images, slideIndex]);

  useEffect(() => {
    setImages(galleryImages);
  }, [galleryImages]);

  return (
    <Container>
      {images.map((item, index) => {
        const { id, img } = item;
        return (
          <ImageItem key={id} src={img} value={index} onClick={handleOpen} />
        );
      })}
      <GalleryModal
        image={selectedImage}
        isOpen={isOpen}
        index={slideIndex}
        lastIndex={lastIndex}
        onClose={onClose}
        onChange={setSlideIndex}
        onClick={handleClick}
      />
    </Container>
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

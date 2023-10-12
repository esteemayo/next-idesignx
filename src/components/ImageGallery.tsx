'use client';

import Image from 'next/image';
import { FC, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

import ImageItem from './ImageItem';
import ImageModal from './modal/ImageModal';

import { useImageModal } from '@/hooks/useImageModal';

type ImageValues = {
  readonly id: number;
  img: string;
};

interface ImageGalleryProps {
  data: ImageValues[];
}

const ImageGallery: FC<ImageGalleryProps> = ({ data }) => {
  const { isOpen, onOpen, onClose } = useImageModal();

  const [images, setImages] = useState(data);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleOpen = useCallback(
    (index: number) => {
      onOpen();
      setSlideIndex(index);
    },
    [onOpen]
  );

  const handleClick = useCallback(
    (direction: string) => {
      let newSlideIndex;
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
    return images[slideIndex].img;
  }, [images, slideIndex]);

  return (
    <>
      <Container>
        {images.map((item, index) => {
          const { id, img } = item;
          return (
            <ImageItem key={id} src={img} value={index} onClick={handleOpen} />
          );
        })}
      </Container>
      <ImageModal
        image={selectedImage}
        isOpen={isOpen}
        onClose={onClose}
        onClick={handleClick}
      />
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

const Wrapper = styled.figure`
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export default ImageGallery;

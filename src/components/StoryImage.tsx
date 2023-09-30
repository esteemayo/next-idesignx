'use client';

import Image from 'next/image';
import styled from 'styled-components';

import { storyImages } from '@/data';

const StoryImage = () => {
  return (
    <Container>
      {storyImages.map((item) => {
        const { id, img, className } = item;
        return (
          <StyledImage
            key={id}
            src={img}
            width={287}
            height={182}
            className={className}
            alt=''
          />
        );
      })}
    </Container>
  );
};

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  box-shadow: 0 0 4rem rgba(00, 00, 00, 0.09);
  z-index: 1000;
  outline-offset: 2rem;
  transition: all 0.2s;

  &:hover {
    outline: 1.5rem solid var(--clr-purple-light-1);
    transform: scale(1.03) translate(-0.5rem);
    box-shadow: 0 1rem 4rem rgba(00, 00, 00, 0.09);
    z-index: 2000;
  }
`;

const Container = styled.section`
  grid-column: col-start 5 / full-end;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(11, 1fr);

  margin-top: 10rem;
  position: relative;

  &:hover ${StyledImage}:not(:hover) {
    transform: scale(0.95);
  }
`;

export default StoryImage;

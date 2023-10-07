'use client';

import Image from 'next/image';
import styled from 'styled-components';

import { galleryItems } from '@/data';

const ImageGallery = () => {
  return (
    <Container>
      {galleryItems.map((item) => {
        const { id, img } = item;
        return (
          <Wrapper key={id}>
            <StyledImage src={img} width={270} height={140} alt='' />
          </Wrapper>
        );
      })}
    </Container>
  );
};

const Container = styled.section`
  background-color: var(--clr-gray-light-1);

  grid-column: full-start / full-end;
  display: grid;
  grid-template-rows: repeat(7, 5vw);
  grid-template-columns: repeat(8, 1fr);
`;

const Wrapper = styled.figure``;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export default ImageGallery;

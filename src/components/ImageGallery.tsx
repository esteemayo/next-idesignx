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
  grid-column: full-start / full-end;
  background-color: tomato;
`;

const Wrapper = styled.figure``;

const StyledImage = styled(Image)``;

export default ImageGallery;

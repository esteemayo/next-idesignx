'use client';

import Image from 'next/image';
import styled from 'styled-components';

import { galleryImages } from '@/data';

const Gallery = () => {
  return (
    <Container>
      <Heading>Gallery</Heading>
      <Wrapper>
        {galleryImages.map((item) => {
          const { id, img } = item;
          return (
            <ImageContainer key={id}>
              <StyledImage src={img} width={250} height={258} alt='' />
            </ImageContainer>
          );
        })}
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
  margin: 15rem 0;
`;

const Heading = styled.h2`
  text-transform: capitalize;
  font-weight: 400;
  font-size: 3rem;
  color: var(--clr-purple-light-2);
`;

const Wrapper = styled.div``;

const ImageContainer = styled.figure``;

const StyledImage = styled(Image)``;

export default Gallery;

'use client';

import Image from 'next/image';
import styled from 'styled-components';

const ImageGallery = () => {
  return <Container>
    <Wrapper></Wrapper>
  </Container>;
};

const Container = styled.section`
  grid-column: full-start / full-end;
  background-color: tomato;
`;

const Wrapper = styled.figure``;

const StyledImage = styled(Image)``;

export default ImageGallery;

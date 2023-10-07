'use client';

import Image from 'next/image';
import styled from 'styled-components';

const ImageGallery = () => {
  return (
    <Container>
      <Wrapper>
        <StyledImage src='' width={270} height={140} alt='' />
      </Wrapper>
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

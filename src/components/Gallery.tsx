'use client';

import styled from 'styled-components';

const Gallery = () => {
  return (
    <Container>
      <Heading>Gallery</Heading>
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
  background-color: orangered;
`;

const Heading = styled.h2``;

const Wrapper = styled.div``;

export default Gallery;

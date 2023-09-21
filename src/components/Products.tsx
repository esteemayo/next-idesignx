'use client';

import Image from 'next/image';
import styled from 'styled-components';

const Products = () => {
  return (
    <Container>
      <Heading>Our products</Heading>
      <Wrapper></Wrapper>
    </Container>
  );
};

const Container = styled.section`
  background-color: blue;
  grid-column: full-start / full-end;
  margin: 8rem 0;
  padding: 3rem;
`;

const Heading = styled.h3``;

const Wrapper = styled.figure``;

const StyledImage = styled(Image)``;

export default Products;

'use client';

import styled from 'styled-components';

const Products = () => {
  return (
    <Container>
      <Heading>Our products</Heading>
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

export default Products;

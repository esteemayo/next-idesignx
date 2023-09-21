'use client';

import styled from 'styled-components';

import { productImages } from '@/data';
import ProductImage from './ProductImage';

const Products = () => {
  return (
    <Container>
      <Heading>Our products</Heading>
      <Wrapper>
        {productImages.map((item) => {
          return <ProductImage key={item.id} {...item} />;
        })}
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  grid-column: full-start / full-end;
  margin: 8rem 0;
  padding: 3rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 38.7vw;
  grid-template-columns: repeat(4, minmax(min-content, 1fr));
`;

const Heading = styled.h3``;

export default Products;

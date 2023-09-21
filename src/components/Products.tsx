'use client';

import styled from 'styled-components';

import { productImages } from '@/data';
import ProductImage from './ProductImage';

const Products = () => {
  return (
    <Container>
      <Heading>Our products</Heading>
      {productImages.map((item) => {
        return <ProductImage key={item.id} {...item} />;
      })}
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

export default Products;

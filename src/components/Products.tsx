'use client';

import { FC } from 'react';
import styled from 'styled-components';

import ProductImage from './ProductImage';
import { StyledLink } from './buttons/StyledLink';

import { productImages } from '@/data';

type ProductImageType = {
  readonly id: string;
  img: string;
};

interface ProductsProps {
  data: ProductImageType[];
}

const Products: FC<ProductsProps> = ({ data }) => {
  return (
    <Container>
      <Heading>Our products</Heading>
      <Wrapper>
        {data.map((item) => {
          return <ProductImage key={item.id} {...item} />;
        })}
      </Wrapper>
      <Box>
        <StyledLink href='/designs'>All products</StyledLink>
      </Box>
    </Container>
  );
};

const Container = styled.section`
  grid-column: full-start / full-end;

  margin: 8rem 0;
  padding: 3rem;

  @media only screen and (max-width: 50em) {
    grid-column: center-start / center-end;

    margin: 0;
    margin-bottom: 3rem;
    padding: 0;
  }

  @media only screen and (max-width: 25em) {
    grid-column: full-start / full-end;
    padding: 3rem;
  }
`;

const Heading = styled.h3`
  font-weight: 400;
  font-size: 3rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};

  @media only screen and (max-width: 50em) {
    font-size: 3.5rem;
    word-spacing: 1px;
  }

  @media only screen and (max-width: 25em) {
    font-size: 2.75rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 2rem;
  }
`;

const Wrapper = styled.div`
  margin-top: 3rem;

  @media only screen and (max-width: 50em) {
    margin-top: 2.5rem;
  }

  display: grid;
  grid-template-rows: 38.7vw;
  grid-template-columns: repeat(4, minmax(min-content, 1fr));
`;

const Box = styled.div`
  margin-top: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 50em) {
    margin-top: 3rem;
    justify-content: start;
  }
`;

export default Products;

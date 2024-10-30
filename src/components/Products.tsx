'use client';

import styled from 'styled-components';

import ProductImage from './ProductImage';
import { StyledLink } from './buttons/StyledLink';

import { ProductsProps } from '@/types';

const Products = ({ data }: ProductsProps) => {
  return (
    <Container>
      <Wrapper>
        <Heading>Our products</Heading>
        <ProductWrap>
          {data.map((item) => {
            return <ProductImage key={item.id} {...item} />;
          })}
        </ProductWrap>
        <Box>
          <StyledLink href='/designs'>All products</StyledLink>
        </Box>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  grid-column: full-start / full-end;
  display: flex;
  justify-content: center;

  margin: 8rem 0;

  @media only screen and (max-width: 50em) {
    margin: 0;
    margin-bottom: 3rem;
    padding: 0;
  }

  @media only screen and (max-width: 25em) {
    padding: 3rem;
  }
`;

const Wrapper = styled.div`
  width: 144rem;

  @media only screen and (max-width: 87.5em) {
    width: 130rem;
  }

  @media only screen and (max-width: 81.25em) {
    width: 120rem;
  }

  @media only screen and (max-width: 76.25em) {
    width: 115rem;
  }

  @media only screen and (max-width: 64em) {
    width: 105rem;
  }

  @media only screen and (max-width: 59.375em) {
    width: 100rem;
  }

  @media only screen and (max-width: 57.5em) {
    width: 95rem;
  }

  @media only screen and (max-width: 50em) {
    width: 90rem;
  }

  @media only screen and (max-width: 46.875em) {
    width: 85rem;
  }

  @media only screen and (max-width: 43.75em) {
    width: 80rem;
  }

  @media only screen and (max-width: 40.625em) {
    width: 75rem;
  }

  @media only screen and (max-width: 37.5em) {
    width: 70rem;
  }

  @media only screen and (max-width: 35.625em) {
    width: 65rem;
  }

  @media only screen and (max-width: 33.75em) {
    width: 60rem;
  }

  @media only screen and (max-width: 31.25em) {
    width: 55rem;
  }

  @media only screen and (max-width: 28.125em) {
    width: 50rem;
  }

  @media only screen and (max-width: 26.25em) {
    width: 45rem;
  }

  @media only screen and (max-width: 23.4375em) {
    width: 40rem;
  }

  @media only screen and (max-width: 20.625em) {
    width: 35rem;
  }

  @media only screen and (max-width: 18.125em) {
    width: 33rem;
  }

  @media only screen and (min-width: 112.5em) {
    width: 135rem;
  }

  @media only screen and (min-width: 125em) {
    width: 150rem;
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

  @media only screen and (min-width: 112.5em) {
    font-size: 3.5rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 4rem;
  }
`;

const ProductWrap = styled.div`
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

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

const Wrapper = styled.div`
  width: 144rem;

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

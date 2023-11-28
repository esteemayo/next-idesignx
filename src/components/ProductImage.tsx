'use client';

import styled from 'styled-components';

import { CommonImage } from './common/CommonImage';

interface ProductImageProps {
  img: string;
}

const ProductImage = ({ img }: ProductImageProps) => {
  return (
    <Wrapper>
      <StyledImage src={img} width={297} height={484} alt='' />
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(CommonImage)``;

export default ProductImage;

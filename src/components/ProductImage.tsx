'use client';

import Image from 'next/image';
import styled from 'styled-components';

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

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export default ProductImage;

'use client';

import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

interface ImageItemProps {
  src: string;
  index: number;
  onClick(index: number): void;
}

const ImageItem: FC<ImageItemProps> = ({ src, index, onClick }) => {
  return (
    <Container
      className={`gallery-item--${index + 1}`}
      onClick={() => onClick(index as number)}
    >
      <StyledImage src={src} width={270} height={140} alt='' />
    </Container>
  );
};

const Container = styled.figure`
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export default ImageItem;

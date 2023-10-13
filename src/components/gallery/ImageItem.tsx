'use client';

import { FC, useMemo } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface ImageItemProps {
  src: string;
  value: number;
  onClick(value: number): void;
}

const ImageItem: FC<ImageItemProps> = ({ src, value, onClick }) => {
  const galleryClass = useMemo(() => {
    return `gallery-item--${value + 1}`;
  }, [value]);

  return (
    <Container
      className={galleryClass}
      onClick={() => onClick(value as number)}
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

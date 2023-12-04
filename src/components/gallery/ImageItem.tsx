'use client';

import { useMemo } from 'react';
import styled from 'styled-components';

import { ImageItemProps } from '@/types';
import { CommonImage } from '../common/CommonImage';

const ImageItem = ({ src, value, onClick }: ImageItemProps) => {
  const galleryClass = useMemo(() => {
    return `gallery-item--${value + 1}`;
  }, [value]);

  return (
    <Container
      className={galleryClass}
      onClick={() => onClick(value as number)}
    >
      <StyledImage
        src={src}
        width={270}
        height={140}
        alt={`Gallery image ${value + 1}`}
      />
    </Container>
  );
};

const Container = styled.figure`
  background-color: ${({ theme }) => theme.bgImg};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.85);
  }
`;

const StyledImage = styled(CommonImage)``;

export default ImageItem;

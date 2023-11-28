'use client';

import styled from 'styled-components';

import { GalleryItemProps } from '@/types';
import { CommonImage } from '../common/CommonImage';

const GalleryItem = ({ src }: GalleryItemProps) => {
  return (
    <Container>
      <StyledImage src={src} width={250} height={258} alt='' />
    </Container>
  );
};

const Container = styled.figure`
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(CommonImage)`
  @media only screen and (max-width: 26.25em) {
    width: 40rem;
    height: 30rem;
  }
`;

export default GalleryItem;

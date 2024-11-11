'use client';

import styled from 'styled-components';

import { CommonImage } from '../common/CommonImage';

interface GalleryItemProps {
  src: string;
}

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
  background-color: ${({ theme }) => theme.bgImg};

  @media only screen and (max-width: 50em) {
    width: 25rem;
    height: 25rem;
  }
`;

const StyledImage = styled(CommonImage)`
  @media only screen and (max-width: 26.25em) {
    width: 40rem;
    height: 30rem;
  }
`;

export default GalleryItem;

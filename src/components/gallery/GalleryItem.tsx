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

  @media only screen and (max-width: 43.75em) {
    width: 23rem;
    height: 23rem;
  }

  @media only screen and (max-width: 40.625em) {
    width: 20rem;
    height: 20rem;
  }

  @media only screen and (max-width: 37.5em) {
    width: 18rem;
    height: 18rem;
  }

  @media only screen and (max-width: 30em) {
    width: 16rem;
    height: 16rem;
  }

  @media only screen and (max-width: 26.875em) {
    width: 14rem;
    height: 14rem;
  }

  @media only screen and (max-width: 25em) {
    width: 18rem;
    height: 18rem;
  }

  @media only screen and (max-width: 24.375em) {
    width: 17rem;
    height: 17rem;
  }

  @media only screen and (max-width: 21.5em) {
    width: 16rem;
    height: 16rem;
  }

  @media only screen and (max-width: 18.75em) {
    width: 15rem;
    height: 15rem;
  }

  @media only screen and (max-width: 17.5em) {
    width: 14rem;
    height: 14rem;
  }
`;

const StyledImage = styled(CommonImage)``;

export default GalleryItem;

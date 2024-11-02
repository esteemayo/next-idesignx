'use client';

import styled from 'styled-components';

import { CommonImage } from './common/CommonImage';

const Innovation = () => {
  return (
    <Container>
      <ImageWrapper>
        <StyledImage
          src='/img/innovative.png'
          width={577}
          height={432}
          alt=''
        />
      </ImageWrapper>
    </Container>
  );
};

const Container = styled.section`
  grid-column: full-start / col-end 4;
  display: flex;
  align-items: center;
  justify-content: end;

  @media only screen and (max-width: 37.5em) {
    grid-row: 3 / 4;
    grid-column: full-start / full-end;
    justify-content: start;
  }

  background-color: ${({ theme }) => theme.bg};
`;

const ImageWrapper = styled.div`
  width: 60rem;
  height: 45rem;

  @media only screen and (max-width: 34.375em) {
    height: 50rem;
  }

  @media only screen and (max-width: 31.25em) {
    width: 55rem;
  }

  @media only screen and (max-width: 26.8755em) {
    width: 50rem;
  }

  @media only screen and (min-width: 106.25em) {
    width: 65rem;
    height: 47rem;
  }

  @media only screen and (min-width: 112.5em) {
    width: 67rem;
    height: 48rem;
  }

  @media only screen and (min-width: 125em) {
    width: 70rem;
    height: auto;
  }
`;

const StyledImage = styled(CommonImage)`
  object-fit: contain;
`;

export default Innovation;

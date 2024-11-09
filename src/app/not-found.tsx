'use client';

import styled from 'styled-components';

import Heading from '@/components/Heading';
import { CommonImage } from '@/components/common/CommonImage';

const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <StyledImage
          src='/img/not-found.png'
          width={300}
          height={300}
          alt='404'
        />
        <Heading title='Page not found' subtitle='Try again later!' center />
      </Wrapper>
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  height: 85vh;
  background-color: ${({ theme }) => theme.bg};

  @media only screen and (max-width: 26.875em) {
    height: 75vh;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div {
    margin-bottom: 0;
  }
`;

const StyledImage = styled(CommonImage)`
  width: 50rem;
  height: auto;
  object-fit: contain;

  @media only screen and (max-width: 56.25em) {
    width: 52rem;
  }

  @media only screen and (max-width: 50em) {
    width: 53rem;
  }

  @media only screen and (max-width: 34.375em) {
    width: 54rem;
  }

  @media only screen and (max-width: 26.875em) {
    width: 52rem;
    height: 33rem;
  }

  @media only screen and (min-width: 106.25em) {
    width: 53rem;
  }

  @media only screen and (min-width: 112.5em) {
    width: 55rem;
  }
  @media only screen and (min-width: 125em) {
    width: 60rem;
  }
`;

export default NotFound;

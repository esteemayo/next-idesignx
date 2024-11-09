'use client';

import styled from 'styled-components';

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
      </Wrapper>
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  height: 80vh;
  background-color: ${({ theme }) => theme.bg};

  @media only screen and (max-width: 26.875em) {
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(CommonImage)`
  width: 50rem;
  height: auto;
  object-fit: contain;

  @media only screen and (min-width: 106.26em) {
    width: 53rem;
  }
`;

export default NotFound;

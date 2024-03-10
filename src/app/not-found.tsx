'use client';

import styled from 'styled-components';

import { CommonImage } from '@/components/common/CommonImage';

const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <StyledImage src='/img/not-found.png' width={601} height={415} alt='' />
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

  & > img {
    width: 70rem;
    height: 50rem;
  }
`;

const StyledImage = styled(CommonImage)`
  object-fit: contain;
`;

export default NotFound;

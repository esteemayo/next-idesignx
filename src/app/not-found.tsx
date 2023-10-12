'use client';

import Image from 'next/image';
import styled from 'styled-components';

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
  height: 100vh;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image)``;

export default NotFound;

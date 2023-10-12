'use client';

import styled from 'styled-components';

const NotFound = () => {
  return (
    <Container>
      <Wrapper>NotFound</Wrapper>
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
`;

export default NotFound;

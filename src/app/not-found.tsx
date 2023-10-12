'use client';

import styled from 'styled-components';

const NotFound = () => {
  return <Container>NotFound</Container>;
};

const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.bg};
`;

export default NotFound;

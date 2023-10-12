'use client';

import { FC, useEffect } from 'react';
import styled from 'styled-components';

import Heading from '@/components/Heading';

interface ErrorProps {
  error: Error;
}

const ErrorState: FC<ErrorProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <Heading title='Uh oh' subtitle='Something went wrong' center='true' />
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

export default ErrorState;

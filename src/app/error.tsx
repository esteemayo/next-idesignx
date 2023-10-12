'use client';

import { FC, useEffect } from 'react';
import Image from 'next/image';
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
      <StyledImage src='/img/error-warning' width={575} height={434} alt='' />
      <Heading title='Uh oh' subtitle='Something went wrong' center='true' />
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  height: 80vh;
  background-color: ${({ theme }) => theme.bg};

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 26.875em) {
    height: 100vh;
  }
`;

const StyledImage = styled(Image)``;

export default ErrorState;

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
    <Heading title='Uh oh' subtitle='Something went wrong' center='true' />
  );
};

const Container = styled.main`
  width: 100%;
  height: 80vh;
  background-color: ${({ theme }) => theme.bg};
`;

export default ErrorState;

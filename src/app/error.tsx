'use client';

import { useEffect } from 'react';
import styled from 'styled-components';

import Heading from '@/components/Heading';
import { CommonImage } from '@/components/common/CommonImage';

interface ErrorProps {
  error: Error;
}

const ErrorState = ({ error }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <StyledImage
        src='/img/error-warning.png'
        width={400}
        height={400}
        alt=''
      />
      <Heading title='Uh oh' subtitle='Something went wrong' center />
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  height: 85vh;
  background-color: ${({ theme }) => theme.bg};

  @media only screen and (max-width: 26.875em) {
    height: 100vh;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(CommonImage)`
  width: 40rem;
  height: auto;
  object-fit: contain;
`;

export default ErrorState;

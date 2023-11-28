'use client';

import { FC, useEffect } from 'react';
import styled from 'styled-components';

import Heading from '@/components/Heading';
import { CommonImage } from '@/components/common/CommonImage';

interface ErrorProps {
  error: Error;
}

const ErrorState: FC<ErrorProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <StyledImage
        src='/img/error-warning.png'
        width={500}
        height={400}
        alt=''
      />
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

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > img {
    width: 50rem;
    height: 40rem;
  }
`;

const StyledImage = styled(CommonImage)``;

export default ErrorState;

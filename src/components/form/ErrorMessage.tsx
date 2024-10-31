'use client';

import styled from 'styled-components';
import ErrorOutline from '@mui/icons-material/ErrorOutline';

interface ErrorProps {
  message?: string;
}

const ErrorMessage = ({ message }: ErrorProps) => {
  return (
    <Container>
      <ErrorOutline />
      {message}
    </Container>
  );
};

const Container = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 1.3rem;
  color: var(--clr-red);
  margin-top: 1px;

  @media only screen and (max-width: 56.25em) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: var(--default-font-size);
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.4rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 1.7rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 2rem;
  }

  svg {
    font-size: var(--default-font-size);
    fill: currentColor;

    @media only screen and (max-width: 56.25em) {
      font-size: 1.7rem;
    }

    @media only screen and (max-width: 50em) {
      font-size: 1.8rem;
    }

    @media only screen and (max-width: 34.375em) {
      font-size: 1.9rem;
    }

    @media only screen and (max-width: 25em) {
      font-size: 1.7rem;
    }

    @media only screen and (min-width: 106.25em) {
      font-size: 1.8rem;
    }

    @media only screen and (min-width: 112.5em) {
      font-size: 2rem;
    }

    @media only screen and (min-width: 125em) {
      font-size: 2.2rem;
    }
  }
`;

export default ErrorMessage;

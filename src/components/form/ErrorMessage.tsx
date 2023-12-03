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

  svg {
    font-size: var(--default-font-size);
    fill: currentColor;
  }
`;

export default ErrorMessage;

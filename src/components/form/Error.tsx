'use client';

import styled from 'styled-components';

interface ErrorProps {
  message?: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return <ErrorMessage>{message}</ErrorMessage>;
};

const ErrorMessage = styled.span`
  font-size: 1.3rem;
  color: var(--clr-red);
  margin-top: 1px;
`;

export default Error;

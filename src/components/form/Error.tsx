'use client';

import styled from 'styled-components';

interface ErrorProps {
  message?: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return <Container>{message}</Container>;
};

const Container = styled.span``;

export default Error;

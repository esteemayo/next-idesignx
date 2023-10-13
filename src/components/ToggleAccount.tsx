'use client';

import { FC } from 'react';
import styled from 'styled-components';

interface ToggleAccountProps {
  title: string;
  label: string;
  onClick(): void;
}

const ToggleAccount: FC<ToggleAccountProps> = ({ title, label, onClick }) => {
  return (
    <Container>
      <Wrapper>
        <Text>{title}</Text>
        <Button onClick={onClick}>{label}</Button>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  font-weight: 300;
  margin-top: 1.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.textSoft};
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  font-size: inherit;
  background-color: transparent;
  color: ${({ theme }) => theme.textSoft};
  outline-color: var(--clr-gray-dark-2);
  outline-offset: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.5rem;
  }
`;

export default ToggleAccount;

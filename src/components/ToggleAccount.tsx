'use client';

import styled from 'styled-components';

import { ToggleAccountProps } from '@/types';

const ToggleAccount = ({ title, label, onClick }: ToggleAccountProps) => {
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
  font-size: 100%;
  margin-top: 1.5rem;

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

  @media only screen and (max-width: 20.625em) {
    font-size: 1.45rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 1.7rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 2rem;
  }
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

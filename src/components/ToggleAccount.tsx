'use client';

import styled from 'styled-components';

interface ToggleAccountProps {
  title: string;
  label: string;
  onClick(): void;
}

const ToggleAccount: React.FC<ToggleAccountProps> = ({
  title,
  label,
  onClick,
}) => {
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.textSoft};
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  font-size: inherit;
  background-color: transparent;
  color: inherit;
  outline-color: var(--clr-gray-dark-2);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.5rem;
  }
`;

export default ToggleAccount;

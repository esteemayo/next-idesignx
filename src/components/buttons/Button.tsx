'use client';

import styled from 'styled-components';

interface ButtonProps {
  label: string;
  nav?: boolean;
  type?: string;
  onClick?(): void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  nav,
  type = 'submit',
  onClick,
}) => {
  return (
    <StyledButton nav={nav} type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  margin-top: ${({ nav }) => !nav && '2rem'};
  display: inline-block;
  border: none;
  text-transform: capitalize;
  padding: 1rem 3rem;
  font-weight: 400;
  font-size: 1.5rem;
  background-image: linear-gradient(
    to right bottom,
    var(--clr-purple-dark-1),
    var(--clr-purple-light-1),
    var(--clr-purple-light-2),
    var(--clr-purple-light-3)
  );
  color: var(--clr-white);
  border-radius: 0.5rem;
  outline-color: var(--clr-purple-light-3);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.75;
  }
`;

export default Button;

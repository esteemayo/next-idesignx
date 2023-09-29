'use client';

import styled, { css } from 'styled-components';

interface ButtonProps {
  label: string;
  nav?: string;
  type?: string;
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
  disabled?: boolean;
  outline?: string;
  small?: string;
}

interface IBtn {
  nav?: string;
  type?: string;
  small?: string;
  outline?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  nav,
  type = 'submit',
  onClick,
  disabled,
  outline,
  small,
}) => {
  return (
    <StyledButton
      nav={nav}
      type={type}
      onClick={onClick}
      disabled={disabled}
      outline={outline}
      small={small}
    >
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<IBtn>`
  margin-top: ${({ nav }) => (nav !== 'true' ? '2rem' : undefined)};
  display: inline-block;
  border: ${({ outline }) =>
    outline === 'true' ? '1px solid var(--clr-purple-light-1)' : 'none'};
  text-transform: capitalize;
  padding: ${({ small }) => (small === 'true' ? '1rem' : '1rem 3rem')};
  font-weight: 400;
  font-size: 1.5rem;
  background-color: ${({ outline }) =>
    outline === 'true' ? 'transparent' : undefined};
  background-image: ${({ outline }) =>
    outline !== 'true'
      ? css`
  linear-gradient(
    to right bottom,
    var(--clr-purple-dark-1),
    var(--clr-purple-light-1),
    var(--clr-purple-light-2),
    var(--clr-purple-light-3)
  )
  `
      : undefined};
  color: ${({ outline }) =>
    outline === 'true' ? 'var(--clr-purple-light-1)' : 'var(--clr-white)'};
  border-radius: 0.5rem;
  outline-color: var(--clr-purple-light-3);
  cursor: pointer;
  transition: all 0.2s;

  @media only screen and (max-width: 25em) {
    font-size: 1.45rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.75;
  }
`;

export default Button;

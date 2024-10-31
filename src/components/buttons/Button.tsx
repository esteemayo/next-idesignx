'use client';

import styled, { css } from 'styled-components';

import { ButtonProps } from '@/types';
import { CommonButton } from '../common/CommonButton';

interface IBtn {
  nav?: string;
  type?: string;
  small?: string;
  outline?: string;
}

const Button = ({
  label,
  nav,
  icon: Icon,
  type = 'submit',
  onClick,
  disabled,
  outline,
  small,
}: ButtonProps) => {
  return (
    <StyledButton
      nav={nav}
      type={type}
      onClick={onClick}
      disabled={disabled}
      outline={outline}
      small={small}
    >
      {Icon && <Icon />} {label}
    </StyledButton>
  );
};

const StyledButton = styled(CommonButton)<IBtn>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-top: ${({ nav }) => (nav !== 'true' ? '2rem' : undefined)};
  border: ${({ outline }) =>
    outline === 'true' ? '1px solid var(--clr-purple-light-1)' : 'none'};
  padding: ${({ small }) => (small === 'true' ? '1rem' : '1rem 3rem')};
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
  transition: all 0.2s;

  @media only screen and (max-width: 56.25em) {
    padding: ${({ small }) => (small === 'true' ? '1.2rem' : '1.2rem 3.2rem')};
  }

  @media only screen and (max-width: 50em) {
    padding: ${({ small }) => (small === 'true' ? '1.3rem' : '1.3rem 3.3rem')};
    margin-top: ${({ nav }) => (nav !== 'true' ? '1rem' : undefined)};
  }

  @media only screen and (max-width: 37.5em) {
    width: ${({ nav }) => (nav !== 'true' ? '100%' : undefined)};
  }

  @media only screen and (max-width: 34.375em) {
    padding: ${({ small }) => (small === 'true' ? '1.4rem' : '1.4rem 3.4rem')};
  }

  @media only screen and (max-width: 26.25em) {
    font-size: ${({ outline }) => (outline === 'true' ? '1.35rem' : '1.45rem')};
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media only screen and (max-width: 25em) {
    padding: ${({ small }) => (small === 'true' ? '1.2rem' : '1.2rem 3.2rem')};
  }

  @media only screen and (max-width: 20.625em) {
    font-size: ${({ outline }) => (outline === 'true' ? '1.25rem' : '1.35rem')};
  }

  @media only screen and (max-width: 18.75em) {
    font-size: ${({ outline }) => (outline === 'true' ? '1.15rem' : '1.25rem')};
  }

  @media only screen and (min-width: 112.5em) {
    padding: ${({ small }) => (small === 'true' ? '1.2rem' : '1.2rem 3.2rem')};
  }

  @media only screen and (min-width: 125em) {
    padding: ${({ small }) => (small === 'true' ? '1.4rem' : '1.4rem 3.4rem')};
  }

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.75;
  }

  svg {
    font-size: 2rem;
    fill: currentColor;

    @media only screen and (max-width: 20.625em) {
      font-size: 1.8rem;
    }
  }
`;

export default Button;

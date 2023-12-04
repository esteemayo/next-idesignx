'use client';

import styled, { DefaultTheme } from 'styled-components';

import { Label } from './Label';
import { CommonInput } from '../common/CommonInput';

interface IStyledInput {
  path?: string;
}

export const StyledInput = styled(CommonInput)<IStyledInput>`
  border: none;
  background-color: ${({ theme, path }) => setBgColor(theme, path)};
  border-bottom: 3px solid transparent;
  outline-color: var(--clr-purple-light-3);
  caret-color: ${({ theme }) => theme.caret};

  &::placeholder {
    font-size: 1.4rem;
    color: var(--clr-gray-dark-2);
  }

  &:focus {
    outline: none;
    border-bottom: 3px solid var(--clr-green);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.07);
  }

  &:focus:invalid {
    border-bottom: 3px solid var(--clr-orange-dark);
  }

  &:placeholder-shown + ${Label} {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
`;

const setBgColor = (theme: DefaultTheme, path?: string): DefaultTheme => {
  return path === 'design' ? theme.bgDesignInput : theme.bgInput;
};

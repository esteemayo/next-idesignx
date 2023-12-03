'use client';

import styled from 'styled-components';

import { Label } from './Label';
import { CommonTextArea } from '../common/CommonTextArea';

type ThemeProps = {
  bgInput?: string;
  bgDesignInput?: string;
};

interface ITextArea {
  path?: string;
}

export const StyledTextArea = styled(CommonTextArea)<ITextArea>`
  border: none;
  background-color: ${({ path, theme }) => setBgColor(path, theme)};
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

const setBgColor = (path?: string, theme: ThemeProps) => {
  return path === 'design' ? theme.bgDesignInput : theme.bgInput;
};

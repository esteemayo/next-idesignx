'use client';

import styled from 'styled-components';
import { CommonSelect } from '../common/CommonSelect';

type ThemeProps = {
  bgInput?: string;
  bgDesignInput?: string;
};

interface ISelect {
  path?: string;
}

export const StyledSelect = styled(CommonSelect)<ISelect>`
  border: none;
  background-color: ${({ theme, path }) => setBgColor(theme, path)};
  color: var(--clr-gray-dark-2);
  border: 3px solid transparent;

  &:focus {
    outline: none;
    border-bottom: 3px solid var(--clr-green);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.07);
  }
`;

export const Option = styled.option`
  font-size: 1.4rem;
  color: #bbb;
  letter-spacing: 0.5rem;
`;

const setBgColor = (theme: ThemeProps, path?: string) => {
  return path === 'design' ? theme.bgDesignInput : theme.bgInput;
};

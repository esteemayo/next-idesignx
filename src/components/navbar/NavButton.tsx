'use client';

import styled from 'styled-components';

import { NavButtonProps } from '@/types';

const NavButton = ({ label, onClick }: NavButtonProps) => {
  return <Button onClick={onClick}>{label}</Button>;
};

const Button = styled.button`
  display: inline-block;
  border: none;
  outline: none;
  font-weight: 300;
  font-size: var(--default-font-size);
  background-color: transparent;
  color: ${({ theme }) => theme.textNav};
  cursor: pointer;
  transition: all 0.2s;

  @media only screen and (max-width: 56.25em) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 1.8rem;
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

  &:hover {
    color: ${({ theme }) => theme.textNavHov};
  }
`;

export default NavButton;

'use client';

import styled from 'styled-components';

interface NavButtonProps {
  label: string;
  onClick(): void;
}

const NavButton: React.FC<NavButtonProps> = ({ label, onClick }) => {
  return <Button onClick={onClick}>{label}</Button>;
};

const Button = styled.button`
  display: inline-block;
  border: none;
  font-weight: 300;
  font-size: var(--default-font-size);
  background-color: transparent;
  color: ${({ theme }) => theme.textNav};
  outline-color: ${({ theme }) => theme.outline};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.textNavHov};
  }
`;

export default NavButton;
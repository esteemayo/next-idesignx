import Link from 'next/link';
import styled from 'styled-components';

interface IMode {
  mode: string;
}

export const IconLink = styled(Link)<IMode>`
  width: 4rem;
  height: 4rem;
  text-decoration: none;
  border-radius: 50%;
  outline-color: ${({ theme }) => theme.outline};
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ mode }) =>
      mode === 'true' ? '#2b3138' : '#f8e5fc'};
  }
`;

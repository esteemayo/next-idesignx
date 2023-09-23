'use client';

import styled from 'styled-components';

const Hamburger = ({ isOpen }) => {
  return (
    <Container>
      <Span type={isOpen}>&nbsp;</Span>
      <Span type={isOpen}>&nbsp;</Span>
      <Span type={isOpen}>&nbsp;</Span>
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  width: 3.2rem;
  height: 2.5rem;
  font-weight: 400;
  background-color: transparent;
  color: var(--clr-purple-light-2);
  cursor: pointer;
`;

const Span = styled.span`
  width: 100%;
  height: 3px;
  background-color: currentColor;
  transform-origin: left;

  &:first-child {
    transform: ${({ type }) => type === true && 'rotate(45deg)'};
  }

  &:nth-child(2) {
    opacity: ${({ type }) => type === true && 0};
    visibility: ${({ type }) => type === true && 'hidden'};
  }

  &:last-child {
    transform: ${({ type }) => type === true && 'rotate(-45deg)'};
  }
`;

export default Hamburger;

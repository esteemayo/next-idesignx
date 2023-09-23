'use client';

import styled from 'styled-components';

const Hamburger = () => {
  return (
    <Container>
      <Span>&nbsp;</Span>
      <Span>&nbsp;</Span>
      <Span>&nbsp;</Span>
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
`;

const Span = styled.span`
  width: 100%;
  height: 1px;
  background-color: currentColor;
`;

export default Hamburger;

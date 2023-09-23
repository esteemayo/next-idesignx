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
  display: inline-block;
  border: none;
  font-weight: 400;
  background-color: transparent;
  color: var(--clr-purple-light-2);
`;

const Span = styled.span``;

export default Hamburger;

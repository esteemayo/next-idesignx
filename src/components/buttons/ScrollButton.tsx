'use client';

import styled from 'styled-components';

const ScrollButton = () => {
  return (
    <Container>
      <Button>^</Button>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  width: 4rem;
  height: 4rem;
  padding: 1.5rem;
  font-size: 2rem;
  background-color: transparent;
  color: var(--clr-purple-light-1);
  backdrop-filter: blur(1rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ScrollButton;

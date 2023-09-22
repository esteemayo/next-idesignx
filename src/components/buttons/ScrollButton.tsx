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
  padding: 1.5rem;
`;

export default ScrollButton;

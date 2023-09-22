'use client';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollButton = () => {
  return (
    <Container>
      <Button>
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>
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
  border: none;
  width: 4rem;
  height: 4rem;
  padding: 1.5rem;
  font-size: 2rem;
  background-color: transparent;
  color: var(--clr-purple-light-1);
  backdrop-filter: blur(1rem);
  border-radius: 0.5rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ScrollButton;

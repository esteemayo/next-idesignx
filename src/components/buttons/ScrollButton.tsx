'use client';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      setIsVisible(window.scrollY > 500 ? true : false);
      return () => (window.onscroll = null);
    };
  }

  const handleScroll = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Container>
      {isVisible && (
        <Button type='button' onClick={handleScroll}>
          <FontAwesomeIcon icon={faArrowUp} />
        </Button>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  left: 50%;
  bottom: 1rem;
  transform: translate(-50%, -1rem);
  z-index: 1000;
`;

const Button = styled.button`
  width: 4rem;
  height: 4rem;
  padding: 1.5rem;
  font-size: 1.5rem;
  background-color: transparent;
  color: var(--clr-purple-light-3);
  backdrop-filter: blur(1rem);
  border: 1px solid var(--clr-purple-light-3);
  border-radius: 0.5rem;
  outline-color: var(--clr-purple-light-3);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: inherit;
    color: currentColor;
  }
`;

export default ScrollButton;

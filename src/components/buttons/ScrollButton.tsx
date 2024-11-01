'use client';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      setIsVisible(window.scrollY > 500 ? true : false);
      return () => (window.onscroll = null);
    };
  }

  const handleScroll = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Container>
      {!!isVisible && (
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

const pulsate = keyframes`
  from {
    transform: scale(1) translateY(1rem);
  }

  to {
    transform: scale(1.03) translateY(-10rem);
  }
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
  animation: ${pulsate} 3s infinite linear;
  animation-fill-mode: both;
  backface-visibility: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 112.5em) {
    width: 4.5rem;
    height: 4.5rem;
    padding: 1.7rem;
    font-size: 1.7rem;
  }

  @media only screen and (min-width: 125em) {
    width: 5rem;
    height: 5rem;
    padding: 2rem;
    font-size: 2rem;
  }

  svg {
    font-size: inherit;
    color: currentColor;
  }
`;

export default ScrollButton;

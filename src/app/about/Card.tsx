'use client';

import styled from 'styled-components';

interface CardProps {
  id: number;
  icon: string;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ icon, text, title }) => {
  return (
    <Container>
      <svg>
        <use xlinkHref={`img/sprite.svg#${icon}`}></use>
      </svg>
      <Heading>{title}</Heading>
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.article`
  display: grid;
  grid-template-columns: min-content 1fr;
  row-gap: 1.5rem;
  column-gap: 2.5rem;

  svg {
    grid-row: 1 / span 2;

    width: 4.5rem;
    height: 4.5rem;
    fill: var(--clr-purple-light-1);
    transform: translateY(-1rem);
    transition: all 0.2s;

    &:hover {
      fill: var(--clr-purple-light-2);
    }
  }
`;

const Heading = styled.h4``;

const Text = styled.p``;

export default Card;

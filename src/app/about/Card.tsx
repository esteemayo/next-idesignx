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
`;

const Heading = styled.h4``;

const Text = styled.p``;

export default Card;

'use client';

import styled from 'styled-components';
import Icon from '@/components/Icon';

interface CardProps {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ icon, desc, title }) => {
  return (
    <Container>
      <Icon icon={icon} />
      <Heading>{title}</Heading>
      <Text>{desc}</Text>
    </Container>
  );
};

const Container = styled.article`
  display: grid;
  grid-template-columns: min-content 1fr;
  row-gap: 1.5rem;
  column-gap: 2.5rem;

  grid-row: 1 / span 2;

  width: 4.5rem;
  height: 4.5rem;
  fill: var(--clr-purple-light-1);
  transform: translateY(-1rem);
  transition: all 0.2s;

  &:hover {
    fill: var(--clr-purple-light-2);
  }
`;

const SVG = styled.svg``;

const Use = styled.use``;

const Heading = styled.h4`
  font-weight: 400;
  font-size: 1.9rem;
  text-transform: capitalize;
  color: var(--clr-gray-dark-3);
`;

const Text = styled.p`
  font-size: 1.7rem;
  line-height: 1.4;
`;

export default Card;

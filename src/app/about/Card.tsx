'use client';

import { FC } from 'react';
import styled from 'styled-components';

import Icon from '@/components/Icon';

interface CardProps {
  readonly id?: number;
  icon: string;
  title: string;
  desc: string;
}

const Card: FC<CardProps> = ({ icon, desc, title }) => {
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

  svg {
    grid-row: 1 / span 2;

    width: 4.5rem;
    height: 4.5rem;
    fill: var(--clr-purple-light-2);
    transform: translateY(-1rem);
    transition: all 0.2s;

    @media only screen and (max-width: 37.5em) {
      width: 4rem;
      height: 4rem;
    }

    &:hover {
      fill: var(--clr-purple-light-1);
    }
  }
`;

const Heading = styled.h4`
  font-weight: 400;
  font-size: 1.9rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.textLight};
`;

const Text = styled.p`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.textSoft};
  line-height: 1.4;
`;

export default Card;

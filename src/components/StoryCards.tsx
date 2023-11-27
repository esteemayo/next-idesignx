'use client';

import styled from 'styled-components';

import Card from '@/app/about/Card';
import { StoryCardsProps } from '@/types';

const StoryCards = ({ data }: StoryCardsProps) => {
  return (
    <Container>
      {data.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 6rem;

  margin: 15rem 0;

  @media only screen and (max-width: 37.5em) {
    margin: 10rem 0;
  }
`;

export default StoryCards;

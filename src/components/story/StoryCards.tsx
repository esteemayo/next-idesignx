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

  @media only screen and (max-width: 51.25em) {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }

  @media only screen and (max-width: 37.5em) {
    margin: 13rem 0;
  }

  @media only screen and (max-width: 30em) {
    margin: 10rem 0;
  }

  @media only screen and (max-width: 26.875em) {
    grid-column: full-start / full-end;
    padding: 0 4rem;
  }

  @media only screen and (max-width: 25em) {
    padding: 0 3.5rem;
  }

  @media only screen and (max-width: 21.5em) {
    margin: 8rem 0;
  }

  @media only screen and (max-width: 18.75em) {
    margin: 6rem 0;
  }

  @media only screen and (max-width: 17.5em) {
    padding: 0 2rem;
  }

  @media only screen and (max-width: 20em) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;

export default StoryCards;

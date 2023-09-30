'use client';

import styled from 'styled-components';

const StoryDetails = () => {
  return (
    <Container>
      <Heading>Who are we</Heading>
      <Text>
        We are a Creative Design, Brand Development and activation firm. We aim
        to present brands in grand style. Focusing on each drop in a massive
        rainfall is a way of life to us, we treat every details with caution to
        set your brand in motion of excellence.
      </Text>
      <Text>
        We treat every details with caution to set your brand in motion of
        excellence.
      </Text>
    </Container>
  );
};

const Container = styled.section`
  grid-column: col-start 1 / col-end 4;
  display: grid;
  align-content: center;

  margin: 10rem 0;
  padding: 4.5rem;

  @media only screen and (max-width: 68.75em) {
    margin: 25rem 0;
  }

  @media only screen and (max-width: 56.25em) {
    grid-row: 2 / 3;
    grid-column: center-start / center-end;
    margin: 8rem 0;
  }

  @media only screen and (max-width: 37.5em) {
    margin: 4rem 0;
  }

  @media only screen and (max-width: 31.25em) {
    grid-column: full-start / full-end;
  }

  @media only screen and (max-width: 25em) {
    margin: 2.5rem 0;
    padding: 3.5rem;
  }
`;

const Heading = styled.h2`
  font-weight: 400;
  font-size: 4rem;
  text-transform: capitalize;
  color: var(--clr-purple-light-1);
  letter-spacing: 1px;
  line-height: 1;
  margin-bottom: 3rem;

  @media only screen and (max-width: 37.5em) {
    font-size: 3.7rem;
    margin-bottom: 2.5rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 3.25rem;
    margin-bottom: 2rem;
  }
`;

const Text = styled.p`
  letter-spacing: 2px;

  &:not(:last-child) {
    margin-bottom: 4rem;

    @media only screen and (max-width: 37.5em) {
      margin-bottom: 3.5rem;
    }
  }
`;

export default StoryDetails;

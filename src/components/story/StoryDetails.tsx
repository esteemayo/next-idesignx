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
        excellence. We offer you the easiest way to get your materials printed
        without breaking a sweat!
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
  color: ${({ theme }) => theme.text};
  letter-spacing: 1px;
  line-height: 1;
  margin-bottom: 3rem;

  @media only screen and (max-width: 64em) {
    font-size: 3.8rem;
  }

  @media only screen and (max-width: 56.25em) {
    font-size: 4rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 4.1rem;
    letter-spacing: 0;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 4rem;
    margin-bottom: 2.5rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 3.8rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 21.5em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 20em) {
    font-size: 2.8rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 2.6rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 4.1rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 4.2rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 4.4rem;
  }
`;

const Text = styled.p`
  font-size: 100%;
  color: ${({ theme }) => theme.textSoft};
  letter-spacing: 0.5px;

  @media only screen and (max-width: 56.25em) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 1.8rem;
    letter-spacing: 0;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 1.9rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 21.5em) {
    font-size: 1.65rem;
  }

  @media only screen and (max-width: 20em) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 1.7rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 2rem;
  }

  &:not(:last-child) {
    margin-bottom: 4rem;

    @media only screen and (max-width: 37.5em) {
      margin-bottom: 3.5rem;
    }

    @media only screen and (max-width: 25em) {
      margin-bottom: 2.5rem;
    }
  }
`;

export default StoryDetails;

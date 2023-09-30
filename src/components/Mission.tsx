'use client';

import styled from 'styled-components';

const Mission = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Custom designs</Heading>
        <Text>
          We are a Creative Design, Brand development and activation firm. We
          aim to present brands in grand style. Focusing on each drop in a
          massive rainfall is a way of life to us.
        </Text>
        <Paragraph>
          We treat every details with caution to set your brand in motion of
          excellence.
        </Paragraph>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  grid-column: col-start 5 / full-end;

  @media only screen and (max-width: 37.5em) {
    grid-column: full-start / full-end;
  }

  padding: 3rem;
  color: var(--clr-white);
  background-image: linear-gradient(
    to bottom,
    var(--clr-purple-light-1),
    var(--clr-purple-dark-1),
    var(--clr-purple-light-2),
    var(--clr-purple-dark-2)
  );
`;

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  gap: 2rem;
  align-items: center;
`;

const Heading = styled.h2`
  grid-row: 2 / 3;
  align-self: self-start;

  font-weight: 400;
  font-size: 4rem;
  text-transform: capitalize;
  color: currentColor;
  letter-spacing: 0.5px;
  line-height: 1;

  @media only screen and (max-width: 50em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 43.75em) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 2.8rem;
    letter-spacing: 3px;
  }

  @media only screen and (max-width: 20em) {
    font-size: 2rem;
    letter-spacing: 2px;
  }
`;

const Text = styled.p`
  grid-row: 3 / 4;
  width: 75%;
  letter-spacing: 2px;

  @media only screen and (max-width: 56.25em) {
    width: 90%;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 43.75em) {
    width: 100%;
    letter-spacing: 1px;
  }
`;

const Paragraph = styled.p`
  grid-row: 4 / 5;
  width: 75%;
  letter-spacing: 2px;

  @media only screen and (max-width: 56.25em) {
    width: 90%;
    font-size: 1.5rem;
  }
`;

export default Mission;

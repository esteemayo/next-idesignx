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
  padding: 3rem;
  background-image: linear-gradient(
    to bottom,
    var(--clr-purple-light-1),
    var(--clr-purple-dark-1),
    var(--clr-purple-light-2),
    var(--clr-purple-dark-2)
  );
  color: var(--clr-white);
`;

const Wrapper = styled.div`
  height: 100%;
  /* margin: 15rem 0; */

  /* display: flex;
  flex-direction: column; */
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  gap: 2rem;
  align-items: center;
`;

const Heading = styled.h2`
  font-weight: 400;
  font-size: 4rem;
  text-transform: capitalize;
  color: currentColor;
  letter-spacing: 0.5px;
  line-height: 1;
`;

const Text = styled.p`
  width: 75%;
  letter-spacing: 2px;
  /* margin: 2rem 0; */
`;

const Paragraph = styled.p`
  width: 75%;
  letter-spacing: 2px;
`;

export default Mission;

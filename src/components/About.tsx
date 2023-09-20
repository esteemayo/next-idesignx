'use client';

import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <Heading>
        We are all about <span>xpressing brands</span>
      </Heading>
    </Container>
  );
};

const Container = styled.section`
  background-color: var(--clr-white);
  grid-column: col-start 1 / col-end 4;
  margin: calc(16rem - 8rem) 0;
  color: var(--clr-gray-dark);
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Heading = styled.h2``;

const Text = styled.p``;

export default About;

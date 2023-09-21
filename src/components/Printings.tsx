'use client';

import styled from 'styled-components';
import Card from './Card';

const Printings = () => {
  return (
    <Container>
      <Heading>
        We produce the best <b>printing</b>
        <span>
          and <b>design</b> services
        </span>
      </Heading>
      <Wrapper>
        <Card />
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  grid-column: full-start / full-end;
  padding: 7rem;
  background-image: linear-gradient(rgba(9, 9, 9, 0.5), rgba(9, 9, 9, 0.5)),
    url(../img/woman-2.jpg);
  color: var(--clr-white);
  background-size: cover;
  background-position: center;
`;

const Heading = styled.h4`
  font-weight: 400;
  font-size: 3rem;
  text-transform: none;
  line-height: 1.1;
`;

const Wrapper = styled.div``;

export default Printings;

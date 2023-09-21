'use client';

import styled from 'styled-components';

const Printings = () => {
  return (
    <Container>
      <Heading>
        We produce the best <b>printing</b>
        <span>
          and <b>design</b> services
        </span>
      </Heading>
    </Container>
  );
};

const Container = styled.section`
  background-color: red;
  grid-column: full-start / full-end;
`;

const Heading = styled.h4``;

export default Printings;

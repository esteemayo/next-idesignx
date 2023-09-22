'use client';

import styled from 'styled-components';

const Statement = () => {
  return (
    <Container>
      <Paragraph>
        Need a custom design and professional printing services?
      </Paragraph>
    </Container>
  );
};

const Container = styled.section`
  grid-column: full-start / full-end;
  background-color: darkslateblue;
`;

const Paragraph = styled.p``;

export default Statement;

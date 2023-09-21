'use client';

import styled from 'styled-components';

const SeenOn = () => {
  return (
    <Container>
      <Text>As seen on</Text>
      <LogoContainer></LogoContainer>
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
  background-color: var(--clr-white);
  margin-top: -14rem;
`;

const Text = styled.div``;

const LogoContainer = styled.div``;

export default SeenOn;

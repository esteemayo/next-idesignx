'use client';

import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>Sidebar</Wrapper>
    </Container>
  );
};

const Container = styled.aside`
  width: 45rem;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--clr-purple-light-1);
  color: var(--clr-white);
`;

const Wrapper = styled.div``;

export default Sidebar;

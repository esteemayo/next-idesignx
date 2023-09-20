'use client';

import styled from 'styled-components';

const Home = () => {
  return (
    <main>
      <h1>Home page</h1>
    </main>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 80vh repeat(4, min-content);
`;

export default Home;

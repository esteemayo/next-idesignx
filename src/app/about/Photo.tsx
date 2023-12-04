'use client';

import styled from 'styled-components';

const Photo = () => {
  return <Container>&nbsp;</Container>;
};

const Container = styled.section`
  grid-column: full-start / full-end;

  background-color: ${({ theme }) => theme.bgImg};
  background-image: url(/img/about-bg.jpg);
  background-size: cover;
  background-position: center;
`;

export default Photo;

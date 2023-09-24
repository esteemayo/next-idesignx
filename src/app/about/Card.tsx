'use client';

import styled from 'styled-components';

const Card = () => {
  return (
    <Container>
      <svg>
        <use xlinkHref='img/sprite.svg#icon-pencil'></use>
      </svg>
      <Heading>Our vision</Heading>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        distinctio necessitatibus pariatur voluptatibus.
      </Text>
    </Container>
  );
};

const Container = styled.article``;

const Heading = styled.h4``;

const Text = styled.p``;

export default Card;

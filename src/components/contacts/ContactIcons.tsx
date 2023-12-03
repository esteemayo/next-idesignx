'use client';

import styled from 'styled-components';

import SocialIcon from '../icons/SocialIcon';

const ContactIcons = () => {
  return (
    <Container>
      <SocialIcon icon='facebook' />
      <SocialIcon icon='twitter' />
      <SocialIcon icon='instagram' />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
`;

export default ContactIcons;

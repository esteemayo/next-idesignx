'use client';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { InfoContactProps } from '@/types';

const InfoContact = ({ icon, text }: InfoContactProps) => {
  return (
    <Container>
      <FontAwesomeIcon icon={icon} />
      <Details>{text}</Details>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media only screen and (max-width: 30em) {
    gap: 0.5rem;
  }

  svg {
    font-size: 1.3rem;
    color: currentColor;

    @media only screen and (max-width: 30em) {
      font-size: 1.25rem;
    }
  }
`;

const Details = styled.span``;

export default InfoContact;

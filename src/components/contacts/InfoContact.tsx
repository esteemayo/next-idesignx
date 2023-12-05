'use client';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoContact = ({ icon, text }) => {
  return (
    <PhoneWrapper>
      <FontAwesomeIcon icon={icon} />
      <PhoneNumber>{text}</PhoneNumber>
    </PhoneWrapper>
  );
};

const PhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PhoneNumber = styled.span``;

export default InfoContact;

'use client';

import styled from 'styled-components';

import { ContactDetailProps } from '@/types';

const ContactDetail = ({
  title,
  address,
  state,
  email1,
  email2,
  phone1,
  phone2,
}: ContactDetailProps) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      {address && (
        <Text>
          {address}
          <Br />
          {state}
        </Text>
      )}
      {email1 && <Text>{email1}</Text>}
      {email2 && <Text>{email2}</Text>}
      {phone1 && <Text>{phone1}</Text>}
      {phone2 && <Text>{phone2}</Text>}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 3rem;
`;

const Heading = styled.h3`
  text-transform: capitalize;
  font-weight: lighter;
  font-size: 2rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 56.25em) {
    font-size: 1.85rem;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;

  @media only screen and (max-width: 56.25em) {
    font-size: 1.65rem;
  }
`;

const Br = styled.br``;

export default ContactDetail;

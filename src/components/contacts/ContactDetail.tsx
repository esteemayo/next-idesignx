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
    font-size: 2.1rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 2.2rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 2.3rem;
  }

  @media only screen and (max-width: 31.25em) {
    font-size: 2.2rem;
  }

  @media only screen and (max-width: 30em) {
    font-size: 2.1rem;
  }

  @media only screen and (max-width: 27.5em) {
    font-size: 1.95rem;
  }

  @media only screen and (max-width: 26.875em) {
    font-size: 2.2rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 22.5em) {
    font-size: 1.85rem;
  }

  @media only screen and (max-width: 20em) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 16.875em) {
    font-size: 1.65rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 2.1rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 2.3rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 2.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;

  @media only screen and (max-width: 56.25em) {
    font-size: 1.9rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 2.1rem;
  }

  @media only screen and (max-width: 31.25em) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 30em) {
    font-size: 1.9rem;
  }

  @media only screen and (max-width: 27.5em) {
    font-size: 1.75rem;
  }

  @media only screen and (max-width: 26.875em) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.85rem;
  }

  @media only screen and (max-width: 22.5em) {
    font-size: 1.65rem;
  }

  @media only screen and (max-width: 20em) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 16.875em) {
    font-size: 1.45rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 1.9rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 2.2rem;
  }
`;

const Br = styled.br``;

export default ContactDetail;

'use client';

import styled from 'styled-components';

import ContactIcons from './ContactIcons';
import ContactDetail from './ContactDetail';

import { contactDetails } from '@/data';

const ContactInfo = () => {
  return (
    <Container>
      {contactDetails.map((item) => {
        return <ContactDetail key={item.id} {...item} />;
      })}
      <ContactIcons />
    </Container>
  );
};

const Container = styled.section`
  grid-column: col-start 5 / col-end 8;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.bgLoc};
  color: ${({ theme }) => theme.textSoft};
  margin: 15rem 0;
  padding: 5rem;
  line-height: 1.4;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  @media only screen and (max-width: 68.75em) {
    padding: 4.5rem;
  }

  @media only screen and (max-width: 64em) {
    grid-row: 3 / 4;
    grid-column: col-start 2 / col-end 7;

    margin: 5rem 0 10rem;
    border-radius: 1rem;
  }

  @media only screen and (max-width: 59.375em) {
    grid-column: col-start 3 / col-end 6;
    margin: 3.5rem 0 7rem;
  }

  @media only screen and (max-width: 45em) {
    grid-column: col-start 2 / col-end 7;
    padding: 3.5rem;
  }

  @media only screen and (max-width: 34.375em) {
    grid-column: col-start 1 / col-end 8;
  }

  @media only screen and (max-width: 31.25em) {
    padding: 2.5rem;
  }

  @media only screen and (max-width: 30em) {
    margin: 3rem 0 6rem;
  }

  @media only screen and (max-width: 27.5em) {
    padding: 2rem;
  }

  @media only screen and (max-width: 26.875em) {
    grid-column: full-start / full-end;
    margin: 2.5rem 3rem 5rem;
  }

  @media only screen and (max-width: 23.4375em) {
    margin: 2.5rem 2.5rem 5rem;
  }

  @media only screen and (max-width: 18.75em) {
    margin: 2rem 2rem 4rem;
    padding: 1.5rem;
  }

  @media only screen and (max-width: 18.125em) {
    margin: 1.5rem 1.5rem 3rem;
  }
`;

export default ContactInfo;

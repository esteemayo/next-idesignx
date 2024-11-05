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
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  @media only screen and (max-width: 57.5em) {
    grid-row: 3 / 4;
    grid-column: col-start 3 / col-end 6;

    margin: 5rem 0;
    border-radius: 1rem;
  }

  @media only screen and (max-width: 45em) {
    grid-column: col-start 2 / col-end 7;
    padding: 4rem;
  }

  @media only screen and (max-width: 34.375em) {
    grid-column: col-start 1 / col-end 8;
  }

  @media only screen and (max-width: 31.25em) {
    margin-top: 3rem;
    padding: 4rem 3rem;
  }

  @media only screen and (max-width: 26.875em) {
    grid-column: full-start / full-end;
    margin: 2rem 3rem 5rem;
  }

  @media only screen and (max-width: 23.4375em) {
    margin: 2rem 2.5rem 5rem;
  }
`;

export default ContactInfo;

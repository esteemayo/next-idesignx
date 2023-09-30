import styled from 'styled-components';

export const FormGroup = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 2rem;

    @media only screen and (max-width: 50em) {
      margin-bottom: 1.5rem;
    }
  }
`;

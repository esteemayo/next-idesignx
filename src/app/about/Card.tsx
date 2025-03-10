'use client';

import styled from 'styled-components';

import { StoryCardProps } from '@/types';
import Icon from '@/components/icons/Icon';

const Card = ({ icon, desc, title }: StoryCardProps) => {
  return (
    <Container>
      <Icon icon={icon} />
      <Heading>{title}</Heading>
      <Text>{desc}</Text>
    </Container>
  );
};

const Container = styled.article`
  display: grid;
  grid-template-columns: min-content 1fr;
  row-gap: 1.5rem;
  column-gap: 2.5rem;

  svg {
    grid-row: 1 / span 2;

    width: 4.5rem;
    height: 4.5rem;
    fill: var(--clr-purple-light-2);
    transform: translateY(-1rem);
    transition: all 0.2s;

    @media only screen and (max-width: 56.25em) {
      width: 4.7rem;
      height: 4.7rem;
    }

    @media only screen and (max-width: 50em) {
      width: 4.8rem;
      height: 4.8rem;
    }

    @media only screen and (max-width: 37.5em) {
      height: 4.3rem;
    }

    @media only screen and (max-width: 34.375em) {
      height: 4rem;
    }

    @media only screen and (max-width: 30em) {
      height: 3.8rem;
    }

    @media only screen and (max-width: 26.875em) {
      height: 3.5rem;
    }

    @media only screen and (max-width: 25em) {
      height: 3.25rem;
    }

    @media only screen and (max-width: 21.5em) {
      width: 3rem;
      height: 3rem;
    }

    @media only screen and (max-width: 18.75em) {
      width: 2.8rem;
      height: 2.8rem;
    }

    @media only screen and (min-width: 106.25em) {
      width: 5rem;
      height: 5rem;
    }

    @media only screen and (min-width: 112.5em) {
      width: 5.5rem;
      height: 5.5rem;
    }

    @media only screen and (min-width: 125em) {
      width: 6rem;
      height: 6rem;
    }

    &:hover {
      fill: var(--clr-purple-light-1);
    }
  }
`;

const Heading = styled.h4`
  font-weight: 400;
  font-size: 1.9rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.textLight};

  @media only screen and (max-width: 56.25em) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 2.1rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.85rem;
  }

  @media only screen and (max-width: 21.5em) {
    font-size: 1.75rem;
  }

  @media only screen and (max-width: 20em) {
    font-size: 1.7rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 2.1rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 2.2rem;
  }
`;

const Text = styled.p`
  font-size: 100%;
  color: ${({ theme }) => theme.textSoft};
  line-height: 1.4;

  @media only screen and (max-width: 56.25em) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 1.75rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 21.5em) {
    font-size: 1.65rem;
  }

  @media only screen and (max-width: 20em) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 1.9rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 2rem;
  }
`;

export default Card;

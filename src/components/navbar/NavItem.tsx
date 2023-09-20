import Link from 'next/link';
import styled from 'styled-components';

interface NavItemProps {
  url: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ url, label }) => {
  return (
    <Container>
      <Link href={url}>{label}</Link>
    </Container>
  );
};

const Container = styled.li`
  color: var(--clr-purple-light-3);

  a {
    &:link,
    &:visited {
      text-decoration: none;
      text-transform: capitalize;
      font-weight: 300;
      font-size: 1.6rem;
      color: currentColor;
      outline-color: #eee;
      transition: all 0.2s;
    }

    &:hover,
    &:active {
      color: var(--clr-purple-light-2);
    }
  }
`;

export default NavItem;

import { Outlet, useLocation } from 'react-router-dom';
import { Container, Header, NaviLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  const location = useLocation();

  return (
    <Container>
      <Header>
        <nav>
          <NaviLink to="/" state={{ from: location }}>
            Home
          </NaviLink>
          <NaviLink to="/_____">_____</NaviLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
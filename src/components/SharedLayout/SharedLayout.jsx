import { Outlet, useLocation } from 'react-router-dom';
import { Header, NaviLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  const location = useLocation();

  return (
    <>
      <Header>
        <nav>
          <NaviLink to="/" state={{ from: location }}>
            Home
          </NaviLink>
          <NaviLink to="/_____">_____</NaviLink>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};

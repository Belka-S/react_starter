import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const Home = () => {
  const [goBack, setGoBack] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  setTimeout(() => {
    setGoBack(true);
  }, 3000);

  return (
    <main>
      <h1 style={{ textAlign: 'center' }}>React Template</h1>
      {goBack && <Navigate to={backLinkHref} replace />}
    </main>
  );
};

export default Home;

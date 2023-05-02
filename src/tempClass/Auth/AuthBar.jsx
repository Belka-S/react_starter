import { useContext } from 'react';
import authContext from './context';
import { Section } from '../Section/Section';
import css from '../Button/Button.module.scss';

export const AuthBar = () => {
  const { user, isLoggedIn, onLogIn, onLogOut } = useContext(authContext);
  console.log('createContext, useContext');

  return (
    <Section title="Auth">
      <header>
        <nav>
          {isLoggedIn ? (
            <>
              <button className={css.Button} type="button" onClick={onLogOut}>
                {user}
              </button>
              <span style={{ marginLeft: '20px' }}>Push to log out!</span>
            </>
          ) : (
            <button className={css.Button} type="button" onClick={onLogIn}>
              Log In
            </button>
          )}
        </nav>
      </header>
    </Section>
  );
};

// export const AppBar = () => {
//   return (
//     <authContext.Consumer>
//       {({ user, isLoggedIn, onLogIn, onLogOut }) => (
//         <header>
//           <nav>
//             {isLoggedIn ? (
//               <div user={user} onLogOut={onLogOut}></div>
//             ) : (
//               <button type="button" onClick={onLogIn}>
//                 LogIn
//               </button>
//             )}
//           </nav>
//         </header>
//       )}
//     </authContext.Consumer>
//   );
// };

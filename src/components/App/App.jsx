import { Routes, Route, Navigate } from 'react-router-dom';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home';
// import _____ from 'components/_____';

export const App = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      {/* <Route path="/_____" element={<_____ />} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
);

// ---------------------------------------- //
// -----------App Class Template----------- //
// ---------------------------------------- //

// import { Component } from 'react';

// export class AppClass extends Component {
//   // ---------------State--------------- //
//   state = {};

//   // ---------LifeCycle Methods--------- //
//   componentDidMount() {}

//   componentDidUpdate(prevProps, prevState) {}

//   componentWillUnmount() {}

//   // -----------Custom Methods---------- //

//   // -----------Render Method----------- //
//   render() {
//     return <Section title=""></Section>;
//   }
// }

import { Routes, Route, Navigate } from 'react-router-dom';

import { SharedLayout } from 'temp/SharedLayout/SharedLayout';
import Home from 'temp/Home';
import AppHook from 'temp/Hook/App/AppHook';
import AppClass from 'temp/Class/App/AppClass';
import AppImgFinder from 'temp/ImageFinder/App/AppImgFinder';

export const AppTemp = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="/tempClass" element={<AppClass />} />
      <Route path="/tempHook" element={<AppHook />} />
      <Route path="/imgFinder" element={<AppImgFinder />} />
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

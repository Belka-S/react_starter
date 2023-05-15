import { configureStore } from '@reduxjs/toolkit';
// import { imgFinderReducer } from './imgFinder/reducer';
import { imgFinderReducer } from './imgFinder/slice';

// ----------------configureStore---------------- //

export const store = configureStore({
  reducer: { imgFinder: imgFinderReducer },
});

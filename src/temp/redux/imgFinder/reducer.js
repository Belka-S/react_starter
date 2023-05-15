import { createReducer, createAction } from '@reduxjs/toolkit';

// import { is } from 'temp/ImgFinder/services/constants';
import {
  IDLE,
  PENDING,
  RESOLVED,
  REJECTED,
} from 'temp/imgFinder/services/constants';

const initialState = {
  status: IDLE,
  error: null,
  normData: [],
  pageCount: 1,
  isLastPage: false,
  searchOptions: {
    searchQuery: '',
    image_type: 'all',
    orientation: 'horizontal',
    per_page: 24,
    page: 1,
  },
};

// ------------------------createAction------------------------ //

export const newSearch = createAction('imgFinder/newSearch');
export const incrementPage = createAction('imgFinder/incrementPage');
export const idle = createAction('imgFinder/idle');
export const pending = createAction('imgFinder/pending');
export const rejected = createAction('imgFinder/rejected');
export const resolved = createAction('imgFinder/resolved');

// ------------------------createReducer------------------------ //

export const imgFinderReducer = createReducer(initialState, {
  [newSearch]: (state, action) => ({
    ...state,
    searchOptions: { ...state.searchOptions, page: 1, ...action.payload },
    normData: [],
    pageCount: 1,
  }),

  [incrementPage]: state => ({
    ...state,
    searchOptions: {
      ...state.searchOptions,
      page: state.searchOptions.page + 1,
    },
  }),

  [idle]: (state, action) => ({
    status: IDLE,
    error: null,
    normData: [],
    pageCount: 1,
    isLastPage: false,
    searchOptions: {
      ...state.searchOptions,
      page: 1,
      ...action.payload,
    },
  }),

  [pending]: state => ({
    ...state,
    status: PENDING,
    error: null,
  }),

  [rejected]: (state, action) => ({
    ...state,
    status: REJECTED,
    isLastPage: true,
    error: action.payload,
  }),

  [resolved]: (state, action) => ({
    ...state,
    status: RESOLVED,
    pageCount: state.pageCount + 1,
    ...action.payload,
  }),
});

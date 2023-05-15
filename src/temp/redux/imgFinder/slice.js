import { createSlice } from '@reduxjs/toolkit';

import { is } from 'temp/ImageFinder/services/constants';

const initialState = {
  status: is.IDLE,
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

// ------------------------createSlice------------------------ //

const imgFinderSlice = createSlice({
  name: 'imgFinder',
  initialState,
  reducers: {
    newSearch: (state, action) => ({
      ...state,
      searchOptions: { ...state.searchOptions, page: 1, ...action.payload },
      normData: [],
      pageCount: 1,
    }),

    incrementPage: state => {
      state.searchOptions.page += 1;
    },

    idle: (state, action) => ({
      status: is.IDLE,
      error: null,
      normData: [],
      pageCount: 1,
      isLastPage: false,
      searchOptions: { ...state.searchOptions, page: 1, ...action.payload },
    }),

    pending: state => {
      state.status = is.PENDING;
      state.error = null;
    },

    rejected: (state, action) => {
      state.status = is.REJECTED;
      state.isLastPage = true;
      state.error = action.payload;
    },

    resolved: (state, action) => ({
      ...state,
      status: is.RESOLVED,
      pageCount: state.pageCount + 1,
      ...action.payload,
    }),
  },
});

export const { newSearch, incrementPage, idle, pending, rejected, resolved } =
  imgFinderSlice.actions;

export const imgFinderReducer = imgFinderSlice.reducer;

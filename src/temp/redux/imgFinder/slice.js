import { createSlice } from '@reduxjs/toolkit';

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
      status: IDLE,
      error: null,
      normData: [],
      pageCount: 1,
      isLastPage: false,
      searchOptions: { ...state.searchOptions, page: 1, ...action.payload },
    }),

    pending: state => {
      state.status = PENDING;
      state.error = null;
    },

    rejected: (state, action) => {
      state.status = REJECTED;
      state.isLastPage = true;
      state.error = action.payload;
    },

    resolved: (state, action) => ({
      ...state,
      status: RESOLVED,
      pageCount: state.pageCount + 1,
      ...action.payload,
    }),
  },
});

export const { newSearch, incrementPage, idle, pending, rejected, resolved } =
  imgFinderSlice.actions;

export const imgFinderReducer = imgFinderSlice.reducer;

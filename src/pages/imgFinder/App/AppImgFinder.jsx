import { useReducer, useEffect } from 'react';

import { Searchbar } from 'pages/imgFinder/Searchbar/Searchbar';
import * as imageAPI from 'pages/imgFinder/services/image-api';
import { normalize } from 'pages/imgFinder/services/normalize';
import { Gallery } from 'pages/imgFinder/Gallery/Gallery';
import { Button } from 'pages/imgFinder/Button/Button';
import { Loader } from 'pages/imgFinder/Loader/Loader';
import { Toast, notifyOk, notifyEnd } from 'pages/imgFinder/Notification/Toast';
import css from '../styles/Styles.module.scss';

const IDLE = 'idle';
const PENDING = 'pending';
const REJECTED = 'rejected';
const RESOLVED = 'resolved';

// const reducer = (state, action) => ({ ...state, ...action });
const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'NEW_SEARCH':
      return {
        ...state,
        searchOptions: { ...state.searchOptions, page: 1, ...payload },
        normData: [],
        pageCount: 1,
      };

    case 'INCREMRNT_PAGE':
      return {
        ...state,
        searchOptions: {
          ...state.searchOptions,
          page: state.searchOptions.page + 1,
        },
      };

    case IDLE:
      return {
        status: IDLE,
        error: null,
        normData: [],
        pageCount: 1,
        isLastPage: false,
        searchOptions: {
          ...state.searchOptions,
          page: 1,
          ...payload,
        },
      };

    case PENDING:
      return { ...state, status: PENDING, error: null };

    case REJECTED:
      return { ...state, status: REJECTED, isLastPage: true, payload };

    case RESOLVED:
      return {
        ...state,
        status: RESOLVED,
        pageCount: state.pageCount + 1,
        ...payload,
      };

    default:
      throw new Error(`Unsupported action type${type}`);
  }
};

const AppImgFinder = () => {
  const [state, dispatch] = useReducer(reducer, {
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
  });

  const { status, isLastPage, normData, pageCount, searchOptions } = state;
  const { searchQuery, page } = state.searchOptions;

  // const controller = useRef();
  useEffect(() => {
    if (searchQuery === '' || pageCount > page) return;
    const controller = new AbortController();

    async function fetch() {
      // controller.current && controller.current.abort();
      // controller.current = new AbortController();
      try {
        dispatch({ type: PENDING });
        const fetchedData = await imageAPI.fetchImage(
          searchOptions,
          controller.signal
        );

        const normData = [...state.normData, ...normalize(fetchedData)];
        const isLastPage = fetchedData.length === 0;

        dispatch({ type: RESOLVED, payload: { isLastPage, normData } });
        isLastPage ? notifyEnd(normData.length) : notifyOk(normData.length);
      } catch (error) {
        dispatch({ type: REJECTED, payload: error });
        normData[0] && notifyEnd(normData.length);
      }
    }
    fetch();

    return () => {
      controller.abort();
    };
  }, [normData, page, pageCount, searchOptions, searchQuery, state.normData]);

  const handleSubmit = ({ searchQuery }) =>
    dispatch({ type: IDLE, payload: { searchQuery } });

  const handleSelect = ({ value }, { name }) => {
    dispatch(
      name !== 'category'
        ? { type: 'NEW_SEARCH', payload: { [name]: value } }
        : { type: 'NEW_SEARCH', payload: { searchQuery: value } }
    );
  };

  const handleClick = () => dispatch({ type: 'INCREMRNT_PAGE' });

  return (
    <section className={css.Grid}>
      <Searchbar
        handleSubmit={handleSubmit}
        handleSelect={handleSelect}
        isLoading={status === PENDING}
        searchQuery={searchQuery}
      />
      <Gallery normData={normData} />
      {status === PENDING && <Loader />}
      {!isLastPage && status === RESOLVED && (
        <Button handleClick={handleClick} />
      )}
      <Toast />
    </section>
  );
};

export default AppImgFinder;

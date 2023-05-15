import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Searchbar } from 'temp/ImageFinder/Searchbar/Searchbar';
import * as imageAPI from 'temp/ImageFinder/services/image-api';
import { normalize } from 'temp/ImageFinder/services/normalize';
import { Gallery } from 'temp/ImageFinder/Gallery/Gallery';
import { Button } from 'temp/ImageFinder/Button/Button';
import { Loader } from 'temp/ImageFinder/Loader/Loader';
import { Toast } from 'temp/ImageFinder/Notification/Toast';
import { notifyOk, notifyEnd } from 'temp/ImageFinder/Notification/Toast';
import { idle, pending, rejected, resolved } from 'temp/redux/imgFinder/slice'; // slice
import { newSearch, incrementPage } from 'temp/redux/imgFinder/slice'; //  reducer
import { is } from 'temp/ImageFinder/services/constants';
import css from '../styles/Styles.module.scss';

const AppImgFinder = () => {
  const state = useSelector(state => state.imgFinder);
  const dispatch = useDispatch();
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
        dispatch(pending());
        const fetchedData = await imageAPI.fetchImage(
          searchOptions,
          controller.signal
        );

        const normData = [...state.normData, ...normalize(fetchedData)];
        const isLastPage = fetchedData.length === 0;

        dispatch(resolved({ isLastPage, normData }));
        isLastPage ? notifyEnd(normData.length) : notifyOk(normData.length);
      } catch (error) {
        dispatch(rejected(error));
        normData[0] && notifyEnd(normData.length);
      }
    }
    fetch();

    return () => {
      controller.abort();
    };
  }, [
    dispatch,
    normData,
    page,
    pageCount,
    searchOptions,
    searchQuery,
    state.normData,
  ]);

  return (
    <section className={css.Grid}>
      <Searchbar
        isLoading={status === is.PENDING}
        searchQuery={searchQuery}
        handleSubmit={({ searchQuery }) => dispatch(idle({ searchQuery }))}
        handleSelect={({ value }, { name }) =>
          dispatch(
            name !== 'category'
              ? newSearch({ [name]: value })
              : newSearch({ searchQuery: value })
          )
        }
      />
      <Gallery normData={normData} />
      {status === is.PENDING && <Loader />}
      {!isLastPage && status === is.RESOLVED && (
        <Button handleClick={() => dispatch(incrementPage())} />
      )}
      <Toast />
    </section>
  );
};

export default AppImgFinder;

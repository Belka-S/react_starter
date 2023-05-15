import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Searchbar } from 'temp/imgFinder/Searchbar/Searchbar';
import * as imageAPI from 'temp/imgFinder/services/image-api';
import { normalize } from 'temp/imgFinder/services/normalize';
import { Gallery } from 'temp/imgFinder/Gallery/Gallery';
import { Button } from 'temp/imgFinder/Button/Button';
import { Loader } from 'temp/imgFinder/Loader/Loader';
import { Toast, notifyOk, notifyEnd } from 'temp/imgFinder/Notification/Toast';
import { idle, pending, rejected, resolved } from 'temp/redux/imgFinder/slice'; // slice
import { newSearch, incrementPage } from 'temp/redux/imgFinder/slice'; //  reducer
// import { is } from 'temp/ImgFinder/services/constants';
import { PENDING, RESOLVED } from 'temp/imgFinder/services/constants';
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
        isLoading={status === PENDING}
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
      {status === PENDING && <Loader />}
      {!isLastPage && status === RESOLVED && (
        <Button handleClick={() => dispatch(incrementPage())} />
      )}
      <Toast />
    </section>
  );
};

export default AppImgFinder;

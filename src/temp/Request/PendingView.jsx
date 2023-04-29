import { IconSpinner } from '../Loader/Loader';
import { SearchView } from './SearchView';
import pendingImage from 'img/mark-question.png';

import { Div } from './All.styled';

export const PendingView = ({ searchQuery }) => {
  const data = {
    name: null,
    sprites: { other: { 'official-artwork': { front_default: pendingImage } } },
    stats: [],
  };

  return (
    <Div role="alert">
      <IconSpinner size="16" message={`Loading: ${searchQuery}`} />
      <SearchView fetchedData={data} />
    </Div>
  );
};

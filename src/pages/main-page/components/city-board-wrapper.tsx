import BeatLoader from 'react-spinners/BeatLoader';
import { CityBoard } from './city-board';
import { EmptyCityBoard } from './empty-city-board';
import { useAppSelector } from '../../../store/hooks';
import { CSSProperties } from 'react';

const override: CSSProperties = {
  display: 'block',
  margin: '150px auto',
  borderColor: 'red',
};

export function CityBoardWrapper(): JSX.Element {
  const { offers } = useAppSelector((state) => ({
    offers: state.cityOffers,
  }));

  const loading = useAppSelector((store) => store.isLoading);

  const boardContent = offers.length === 0 ? <EmptyCityBoard /> : <CityBoard />;

  return (
    <div className="cities">
      {loading ? (
        <BeatLoader
          loading={loading}
          color={'#4481c3'}
          cssOverride={override}
          size={20}
        />
      ) : (
        boardContent
      )}
    </div>
  );
}

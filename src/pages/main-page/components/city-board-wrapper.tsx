import { useAppSelector } from '../../../store/hooks';
import { CityBoard } from './city-board';
import { EmptyCityBoard } from './empty-city-board';

export function CityBoardWrapper(): JSX.Element {
  const { offers } = useAppSelector((state) => ({
    offers: state.cityOffers,
  }));

  const isEmpty = offers.length === 0;

  return (
    <div className="cities">
      {isEmpty ?
        <EmptyCityBoard />
        : <CityBoard />}
    </div>
  );
}

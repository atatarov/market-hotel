import { City, FavoritesOffers } from '../../types/types';
import { LocationItem } from '../location-item/location-item';

type FavoritesListProps = {
    favoritesOffers: FavoritesOffers;
}

export function FavoritesList(props: FavoritesListProps): JSX.Element {
  const { favoritesOffers } = props;

  const favoritesLocations = Object.keys(favoritesOffers).map((key) => {
    const offers = favoritesOffers[key as City];
    return (offers.length !== 0) && (<LocationItem cityName={key} offers={offers} />);
  });

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {favoritesLocations}
      </ul>
    </section>
  );
}

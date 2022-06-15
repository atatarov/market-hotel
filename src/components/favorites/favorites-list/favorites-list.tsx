import { City, FavoritesOffers } from '../../../types/types';
import { LocationItem } from '../location-item/location-item';

interface IFavoritesListProps {
  favoritesOffers: FavoritesOffers;
}

export function FavoritesList({
  favoritesOffers,
}: IFavoritesListProps): JSX.Element {
  const favoritesLocations = Object.keys(favoritesOffers).map((key) => {
    const offers = favoritesOffers[key as City];
    return (
      offers.length !== 0 && <LocationItem cityName={key} offers={offers} />
    );
  });

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">{favoritesLocations}</ul>
    </section>
  );
}

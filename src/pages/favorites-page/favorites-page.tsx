import { IOffer } from '../../interfaces/interfaces';
import { FavoritesList } from '../../components/favorites/favorites-list/favorites-list';
import { filter } from '../../utils';

interface IFavoritesPageProps {
  offers: IOffer[];
}

export function FavoritesPage({ offers }: IFavoritesPageProps): JSX.Element {
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);

  const filteredOffers = filter(favoritesOffers);

  const favoritesIsEmpty = (
    <section className="favorites favorites--empty">
      <h1 className="visually-hidden">Favorites (empty)</h1>
      <div className="favorites__status-wrapper">
        <b className="favorites__status">Nothing yet saved.</b>
        <p className="favorites__status-description">
          Save properties to narrow down search or plan your future trips.
        </p>
      </div>
    </section>
  );

  const favorites =
    favoritesOffers.length > 0 ? (
      <FavoritesList favoritesOffers={filteredOffers} />
    ) : (
      favoritesIsEmpty
    );

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">{favorites}</div>
    </main>
  );
}

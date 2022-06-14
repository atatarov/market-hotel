import { IOffer } from '../../interfaces/interfaces';
import { Link } from 'react-router-dom';
import { FavoritesCard } from '../favorites-card/favorites-card';

type LocationItemProps = {
    offers: IOffer[],
    cityName: string,
}

export function LocationItem(props: LocationItemProps): JSX.Element {
  const { cityName, offers } = props;

  const favoritesCards = offers.map((offer) => <FavoritesCard key={offer.id} offer={offer} />);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#">
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoritesCards}
      </div>
    </li>
  );
}

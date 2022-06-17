import { IOffer } from '../../../interfaces/interfaces';
import { Link } from 'react-router-dom';
import { PlaceCard } from '../../place-card/place-card';
import { CardType } from '../../../const';

interface ILocationItemProps {
  offers: IOffer[];
  cityName: string;
}

export function LocationItem({
  cityName,
  offers,
}: ILocationItemProps): JSX.Element {
  const favoritesCards = offers.map((offer) => (
    <PlaceCard key={offer.id} offer={offer} cardType={CardType.Favorites} />
  ));
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="/">
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">{favoritesCards}</div>
    </li>
  );
}

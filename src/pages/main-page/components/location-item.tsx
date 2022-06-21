import { Link } from 'react-router-dom';
import { City } from '../../../types/types';

interface ILocationItemProps {
  city: City;
  isActive: boolean;
}

export function LocationItem({
  city,
  isActive,
}: ILocationItemProps): JSX.Element {
  const activeItemClass = isActive ? 'tabs__item--active' : '';

  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${activeItemClass}`}
        to="/"
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

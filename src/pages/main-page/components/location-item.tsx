import { Link } from 'react-router-dom';
import { activeCity } from '../../../store/action';
import { useAppDispatch } from '../../../store/hooks';
import { City } from '../../../types/types';

interface ILocationItemProps {
  city: City;
  isActive: boolean;
}

export function LocationItem({
  city,
  isActive,
}: ILocationItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const activeItemClass = isActive ? 'tabs__item--active' : '';

  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${activeItemClass}`}
        to="/"
        onClick={(event)=>{
          event.preventDefault();
          dispatch(activeCity(city));
        }}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

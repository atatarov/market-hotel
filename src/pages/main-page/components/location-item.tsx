import { Link } from 'react-router-dom';

interface ILocationItemProps {
  name: string;
}

export function LocationItem({ name }: ILocationItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <Link className="locations__item-link tabs__item" to="#">
        <span>{name}</span>
      </Link>
    </li>
  );
}

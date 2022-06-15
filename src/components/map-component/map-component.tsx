import { MapType } from '../../const';

interface IMapComponentProps {
  type?: MapType;
}

export function MapComponent({ type }: IMapComponentProps): JSX.Element {
  const mapTypeClass =
    type === MapType.Property ? 'property__map' : 'cities__map';
  return <section className={`${mapTypeClass} map`}></section>;
}

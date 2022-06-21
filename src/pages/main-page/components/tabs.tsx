import { LocationItem } from './location-item';
import { citiesDict } from '../../../const';
import { createKeyValue } from '../../../utils';
import { useAppSelector } from '../../../store/hooks';
import { City } from '../../../types/types';

export function Tabs(): JSX.Element {

  const currentCity = useAppSelector((store) => store.city);

  const locations = Object.values(citiesDict).map((city, index) => {
    const keyValue = createKeyValue(city as string, index);
    const isActive = city as City === currentCity;
    return <LocationItem key={keyValue} city={city as City} isActive={isActive} />;
  });
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">{locations}</ul>
      </section>
    </div>
  );
}

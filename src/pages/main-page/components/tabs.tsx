import { LocationItem } from './location-item';
import { citiesDict } from '../../../const';
import { createKeyValue } from '../../../utils';
import { City } from '../../../types/types';

interface TabsProps {
  activeCity: City;
}

export function Tabs({activeCity}: TabsProps): JSX.Element {
  const locations = Object.values(citiesDict).map((city, index) => {
    const keyValue = createKeyValue(city as string, index);
    const isActive = city as City === activeCity;
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

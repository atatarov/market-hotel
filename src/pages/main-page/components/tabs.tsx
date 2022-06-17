import { LocationItem } from './location-item';
import { citiesDict } from '../../../const';
import { createKeyValue } from '../../../utils';

export function Tabs(): JSX.Element {
  const locations = Object.values(citiesDict).map((city, index) => {
    const keyValue = createKeyValue(city as string, index);
    return <LocationItem key={keyValue} name={city} />;
  });
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">{locations}</ul>
      </section>
    </div>
  );
}

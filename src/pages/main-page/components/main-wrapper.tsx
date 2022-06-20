import { MapComponent } from '../../../components/map-component/map-component';
import { PlacesBoard } from '../../../components/places-board/places-board';
import { MapType } from '../../../const';
import { IOffer } from '../../../interfaces/interfaces';
import { City } from '../../../types/types';
import { Tabs } from './tabs';

interface IMainWrapperProps {
  offers: IOffer[];
  placeCount: string;
  city: City;
}

export function MainWrapper({
  offers,
  placeCount,
  city,
}: IMainWrapperProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs activeCity={city}/>
      <div className="cities">
        <div className="cities__places-container container">
          <PlacesBoard
            offers={offers}
            placeCount={placeCount}
            city={'Amsterdam'}
          />
          <div className="cities__right-section">
            <MapComponent type={MapType.Cities} city={city} offers={offers} activeOffer={offers[0]}/>
          </div>
        </div>
      </div>
    </main>
  );
}

import { MapComponent } from '../../../components/map-component/map-component';
import { PlacesBoard } from '../../../components/places-board/places-board';
import { IOffer } from '../../../interfaces/interfaces';
import { Tabs } from './tabs';

interface IMainWrapperProps {
  offers: IOffer[];
  placeCount: string;
}

export function MainWrapper({
  offers,
  placeCount,
}: IMainWrapperProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <div className="cities">
        <div className="cities__places-container container">
          <PlacesBoard
            offers={offers}
            placeCount={placeCount}
            city={'Amsterdam'}
          />
          <div className="cities__right-section">
            <MapComponent />
          </div>
        </div>
      </div>
    </main>
  );
}

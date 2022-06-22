import { MapComponent } from '../../../components/map-component/map-component';
import { PlacesBoard } from '../../../components/places-board/places-board';
import { MapType } from '../../../const';
import { useAppSelector } from '../../../store/hooks';
import { City } from '../../../types/types';

export function CityBoard(): JSX.Element {
  const { placeCount, offers, city, activeOffer } = useAppSelector((state) => ({
    placeCount: String(state.cityOffers.length),
    offers: state.cityOffers,
    city: state.city as City,
    activeOffer: state.activeOffer,
  }));

  return (
    <div className="cities__places-container container">
      <PlacesBoard offers={offers} placeCount={placeCount} city={city} />
      <div className="cities__right-section">
        <MapComponent
          type={MapType.Cities}
          city={city}
          offers={offers}
          activeOffer={activeOffer}
        />
      </div>
    </div>
  );
}

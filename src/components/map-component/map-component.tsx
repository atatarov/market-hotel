import { Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { citiesLocations, MapType } from '../../const';
import { IOffer } from '../../interfaces/interfaces';
import { City } from '../../types/types';
import { flyToWithDebounce } from '../../utils';
import { currentCustomIcon, defaultCustomIcon } from './const';
import { useMap } from './hooks/useMap';

interface IMapComponentProps {
  city: City;
  activeOffer: IOffer;
  offers?: IOffer[];
  type?: MapType;
}

export function MapComponent({
  type,
  city,
  offers,
  activeOffer,
}: IMapComponentProps): JSX.Element {
  const mapRef = useRef(null);
  const currentCity = citiesLocations[city];
  const map = useMap(mapRef, currentCity);

  useEffect(() => {
    flyToWithDebounce(map, activeOffer);
  }, [map, activeOffer]);

  useEffect(() => {
    if (map && offers) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            activeOffer !== undefined && offer.id === activeOffer.id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);

  const mapTypeClass =
    type === MapType.Property ? 'property__map' : 'cities__map';
  return <section className={`${mapTypeClass} map`} ref={mapRef}></section>;
}

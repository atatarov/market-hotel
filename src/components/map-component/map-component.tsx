import { Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { citiesLocations, MapType } from '../../const';
import { IOffer } from '../../interfaces/interfaces';
import { City } from '../../types/types';
import { currentCustomIcon, defaultCustomIcon } from './const';
import { useMap } from './hooks/useMap';

interface IMapComponentProps {
  type?: MapType;
  city: City;
  offers: IOffer[];
  activeOffer: IOffer;
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
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            activeOffer !== null && offer.id === activeOffer.id
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

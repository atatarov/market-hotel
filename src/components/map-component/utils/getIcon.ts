import { Icon } from 'leaflet';

const ICON_SIZE = 40;

export const getIcon = (url: string) =>
  new Icon({
    iconUrl: url,
    iconSize: [ICON_SIZE, ICON_SIZE],
    iconAnchor: [ICON_SIZE / 2, ICON_SIZE],
  });

import { IOffer } from '../interfaces/interfaces';

export type ApartamentType = 'apartment' | 'room' | 'house' | 'hotel';

export type ApartamentDict = {
  [key in ApartamentType]: string;
};

export type City =
  | 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Amsterdam'
  | 'Hamburg'
  | 'Dusseldorf';

export type CitiesDict = {
  [key in City]: string;
}

export type FavoritesOffers = { [key in City]: IOffer[] };

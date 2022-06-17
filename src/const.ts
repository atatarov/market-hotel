import { IRateFragment } from './interfaces/interfaces';
import { ApartamentDict, CitiesDict } from './types/types';

export const apartamentDict: ApartamentDict = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel',
};

export const citiesDict: CitiesDict = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
};

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  RoomId = '/offer/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const rateFragments: IRateFragment[] = [
  {
    id: '5-stars',
    value: '5',
  },
  {
    id: '4-stars',
    value: '4',
  },
  {
    id: '3-stars',
    value: '3',
  },
  {
    id: '2-stars',
    value: '2',
  },
  {
    id: '1-stars',
    value: '1',
  },
];

export enum CardType {
  Cities = 'Cities',
  Near = 'Near',
  Favorites = 'Favorites',
}

export enum MapType {
  Property = 'property',
  Cities = 'cities'
}

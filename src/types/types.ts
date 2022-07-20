import { ICity, IOffer } from '../interfaces/interfaces';

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
};

export type FavoritesOffers = { [key in City]: IOffer[] };

export type CitiesLocations = {
  [key in City]: ICity;
};

export interface IUserData {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
}

export interface IServerUserData {
  avatar_url: string;
  email: string;
  id: number;
  is_pro: boolean;
  name: string;
  token: string;
}

export type ErrorType = unknown;

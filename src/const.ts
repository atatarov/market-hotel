import { IRateFragment } from './interfaces/interfaces';

export enum AppRoute {
    Main = '/',
    SignIn = '/login',
    Favorites = '/favorites',
    Room = '/offer/:id',
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

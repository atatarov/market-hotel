import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortType } from '../const';
import { IOffer } from '../interfaces/interfaces';
import { City, IUserData } from '../types/types';

export const setActiveCity = createAction('main/activeCity', (value: City) => ({
  payload: value,
}));

export const setAuthStatus = createAction(
  'global/authStatus',
  (value: AuthorizationStatus) => ({ payload: value }),
);

export const setActiveOffer = createAction(
  'main/activeOffer',
  (value: IOffer) => ({ payload: value }),
);

export const sortOffers = createAction(
  'main/sortOffers',
  (value: SortType) => ({ payload: value }),
);

export const setUserData = createAction('user/data', (value: IUserData) => ({
  payload: value,
}));

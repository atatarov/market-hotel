import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortType } from '../const';
import { IOffer } from '../interfaces/interfaces';
import { City } from '../types/types';

export const activeCity = createAction('main/activeCity', (value: City) => ({
  payload: value,
}));

export const authStatus = createAction(
  'global/authStatus',
  (value: AuthorizationStatus) => ({ payload: value }),
);

export const activeOffer = createAction(
  'main/activeOffer',
  (value: IOffer) => ({ payload: value }),
);

export const sortOffers = createAction(
  'main/sortOffers',
  (value: SortType) => ({ payload: value }),
);

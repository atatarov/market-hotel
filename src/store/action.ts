import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus, SortType } from '../const';
import { IOffer, IUserData } from '../interfaces/interfaces';
import { City } from '../types/types';

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

export const setOffers = createAction('data/offers', (value: IOffer[]) => ({
  payload: value,
}));

export const setLoading = createAction('data/loading', (value: boolean) => ({
  payload: value,
}));

export const redirectToRoute = createAction(
  'global/redirect',
  (value: AppRoute) => ({
    payload: value,
  }),
);

export const setSelectedOffer = createAction(
  'data/offerRoom',
  (value: IOffer) => ({ payload: value }),
);

import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { City } from '../types/types';

export const activeCity = createAction('main/activeCity', (value: City) => ({
  payload: value,
}));

export const authStatus = createAction(
  'global/authStatus',
  (value: AuthorizationStatus) => ({ payload: value }),
);

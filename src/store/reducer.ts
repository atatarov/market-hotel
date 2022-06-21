import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, citiesDict } from '../const';
import { offers } from '../mocks/offers';
import { filter } from '../utils';
import { activeCity, authStatus } from './action';

const filtereddOffers = filter(offers);

const initialState = {
  city: citiesDict['Paris'],
  cityOffers: filtereddOffers['Paris'],
  authStatus: AuthorizationStatus.NoAuth,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(activeCity, (state, action) => {
      state.city = action.payload;
      state.cityOffers = filtereddOffers[action.payload];
    })
    .addCase(authStatus, (state, action) => {
      state.authStatus = action.payload;
    });
});

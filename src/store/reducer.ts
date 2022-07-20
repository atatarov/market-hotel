import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, citiesDict, SortType } from '../const';
import { offers } from '../mocks/offers';
import { City, IUserData } from '../types/types';
import { filter, sort } from '../utils';
import {
  setActiveCity,
  setActiveOffer,
  setAuthStatus,
  setUserData,
  sortOffers
} from './action';

const filtereddOffers = filter(offers);

const initialState = {
  city: citiesDict['Paris'] as City,
  cityOffers: filtereddOffers['Paris'],
  authStatus: AuthorizationStatus.NoAuth,
  activeOffer: filtereddOffers['Paris'][0],
  sortType: SortType.Popular,
  userData: {} as IUserData,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
      state.cityOffers = filtereddOffers[action.payload];
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(sortOffers, (state, action) => {
      state.sortType = action.payload;
      state.cityOffers = sort(action.payload, filtereddOffers[state.city]);
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});

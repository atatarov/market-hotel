import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, citiesDict, SortType } from '../const';
import { IOffer, IUserData } from '../interfaces/interfaces';
import { offers } from '../mocks/offers';
import { City } from '../types/types';
import { filter, sort } from '../utils';
import {
  setActiveCity,
  setActiveOffer,
  setAuthStatus,
  setLoading,
  setOffers,
  setSelectedOffer,
  setUserData,
  sortOffers
} from './action';

const filteredOffers = filter(offers);

const initialState = {
  city: citiesDict['Paris'] as City,
  offers: {} as IOffer[],
  authStatus: AuthorizationStatus.NoAuth,
  activeOffer: filteredOffers['Paris'][0],
  sortType: SortType.Popular,
  userData: {} as IUserData,
  cityOffers: [] as IOffer[],
  isLoading: false,
  selectedOffer: {} as IOffer,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
      state.cityOffers = filter(state.offers)[action.payload];
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(sortOffers, (state, action) => {
      state.sortType = action.payload;
      state.cityOffers = sort(action.payload, filter(state.offers)[state.city]);
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
      state.cityOffers = filter(state.offers)[state.city];
    })
    .addCase(setLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload;
    });
});

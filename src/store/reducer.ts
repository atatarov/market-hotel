import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, citiesDict, SortType } from '../const';
import { offers } from '../mocks/offers';
import { City } from '../types/types';
import { filter, sort } from '../utils';
import { activeCity, activeOffer, authStatus, sortOffers, loadOffers } from './action';

const filtereddOffers = filter(offers);

const initialState = {
  city: citiesDict['Paris'] as City,
  cityOffers: filtereddOffers['Paris'],
  authStatus: AuthorizationStatus.NoAuth,
  activeOffer: filtereddOffers['Paris'][0],
  sortType: SortType.Popular,
  offers: offers,
  filtereddOffers: filtereddOffers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(activeCity, (state, action) => {
      state.city = action.payload;
      state.cityOffers = filtereddOffers[action.payload];
    })
    .addCase(authStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(activeOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(sortOffers, (state, action) => {
      state.sortType = action.payload;
      state.cityOffers = sort(action.payload, filtereddOffers[state.city]);
    })
    .addCase(loadOffers, (state, action)=>{
      state.offers = action.payload;
      state.filtereddOffers = filter(action.payload);
    });
});

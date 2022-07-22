import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus } from '../const';
import { IServerOffer } from '../interfaces/interfaces';
import { handleError } from '../services/handle-error';
import { adaptOffersToClient, adaptUserDataToClient } from '../utils';
import { setAuthStatus, setOffers, setUserData } from './action';
import { api, store } from './store';

export const checkAuthAction = createAsyncThunk('user/checkAuth', async () => {
  try {
    const { data } = await api.get(APIRoute.Login);
    store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
    store.dispatch(setUserData(adaptUserDataToClient(data)));
  } catch (error) {
    handleError(error);
    store.dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
  }
});

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const { data } = await api.get<IServerOffer[]>(APIRoute.Offers);
      store.dispatch(setOffers(adaptOffersToClient(data)));
    } catch (error) {
      handleError(error);
    }
  },
);

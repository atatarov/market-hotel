import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { IServerOffer, IServerUserData } from '../interfaces/interfaces';
import { handleError } from '../services/handle-error';
import { saveToken } from '../services/token';
import { adaptOffersToClient, adaptUserDataToClient } from '../utils';
import { redirectToRoute, setAuthStatus, setLoading, setOffers, setUserData } from './action';
import { api, store } from './store';

interface IAuthData {
  email: string;
  password: string;
}
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
    store.dispatch(setLoading(true));
    try {
      const { data } = await api.get<IServerOffer[]>(APIRoute.Offers);
      store.dispatch(setOffers(adaptOffersToClient(data)));
    } catch (error) {
      handleError(error);
    }
    store.dispatch(setLoading(false));
  },
);

export const authAction = createAsyncThunk<void, IAuthData>(
  'user/auth',
  async ({ email, password }: IAuthData) => {
    try {
      const { data } = await api.post<IServerUserData>(APIRoute.Login, {
        email,
        password,
      });
      saveToken(data.token);
      store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
      store.dispatch(setUserData(adaptUserDataToClient(data)));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      handleError(error);
      store.dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    }
  },
);

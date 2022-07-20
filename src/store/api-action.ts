import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus } from '../const';
import { handleError } from '../services/handle-error';
import { adaptUserDataToClient } from '../utils';
import { setAuthStatus, setUserData } from './action';
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

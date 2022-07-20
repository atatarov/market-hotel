import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus } from '../const';
import { adaptUserDataToClient } from '../utils';
import { setAuthStatus, setUserData } from './action';
import { useAppDispatch } from './hooks';
import { api } from './store';

export const checkAuthAction = createAsyncThunk('user/checkAuth', async () => {
  const dispatch = useAppDispatch();
  try {
    const { data } = await api.get(APIRoute.Login);
    dispatch(setAuthStatus(AuthorizationStatus.Auth));
    dispatch(setUserData(adaptUserDataToClient(data)));
  } catch (error) {
    dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
  }
});

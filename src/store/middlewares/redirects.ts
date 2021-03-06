import { Middleware } from 'redux';
import browserHistory from '../../services/browser-history';
import { reducer } from '../reducer';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) => (next) => (action) => {
    if (action.type === 'global/redirect') {
      browserHistory.push(action.payload);
    }

    return next(action);
  };

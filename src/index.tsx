import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import { reviews } from './mocks/reviews';
import { store } from './store/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { checkAuthAction, fetchOffersAction } from './store/api-action';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App reviews={reviews} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

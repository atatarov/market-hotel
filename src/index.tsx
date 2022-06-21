import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { store } from './store/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} reviews={reviews} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

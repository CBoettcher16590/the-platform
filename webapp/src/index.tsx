import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ThePlatform from './ThePlatform';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';


import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './pages/subscriptions/checkoutformMonth'
const stripePromise = loadStripe('pk_test_51Im6u3JQKiiOEQTIDHIIljaL0YS7CGvSKB9oOpFHF0jxdpSPRAVVPvJOLqq4uXe9kTh7GToiomCtLAgF1W06d84i00u2OkaPCB');


ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <ThePlatform />
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

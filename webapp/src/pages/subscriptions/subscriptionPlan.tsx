import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Card, CardGroup, Button, Container, Jumbotron, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import FavoriteArticles from '../../components/article/favoriteArticle';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import api from '../../api';
import { useHistory } from 'react-router';
import {CardElement} from '@stripe/react-stripe-js';


/*  Stripe Messing Around. Until it works and there is no time to add a better version :) */

// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';

// const stripePromise = loadStripe('pk_test_51Im6u3JQKiiOEQTIDHIIljaL0YS7CGvSKB9oOpFHF0jxdpSPRAVVPvJOLqq4uXe9kTh7GToiomCtLAgF1W06d84i00u2OkaPCB');

//These should be moved to the app screen. 

/*
const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <MyCheckoutForm />
    </Elements>
  );
}; //just a reference for later.
*/






export default function SubscriptionPlan() {


  const history = useHistory();


  function goHome() {
    history.push('/checkout');

  }
  function goHomeY() {
    history.push('/_checkout');

  }


  // invoke a stripe mock.

  return <>

    <div className="subscriptionMake">
      <div className="subscriptionPlanOrganizer">
        <h1 className="subscriptionPlantextOffset"> Subscription Plans</h1>
        <div className="subscriptionButtonOffset">
          <Button variant="info" size="lg" block onClick={goHome}>
            Monthly

            $5/month
             </Button>{''}

        </div>
        <br />
        <br />
        <div>
          <Button variant="info" size="lg" block onClick={goHomeY}>
            Annualy 
            
            $60/year
             </Button>{''}
        </div>
      </div>
    </div>

    

  </>
}
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useHistory } from 'react-router';
//import {CardElement} from '@stripe/react-stripe-js';


export default function SubscriptionPlan() {


  const history = useHistory();


  function goHome() {
    history.push('/checkoutmonthly');

  }
  function goHomeY() {
    history.push('/checkoutyearly');

  }

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
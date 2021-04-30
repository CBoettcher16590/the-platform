import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Card, CardGroup, Button, Container, Jumbotron, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import FavoriteArticles from '../../components/article/favoriteArticle';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import api from '../../api';
import { useHistory } from 'react-router';



export default function SubscriptionPlan() {


  const history = useHistory();


  function goHome() {
    history.push('/');

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
          <Button variant="info" size="lg" block onClick={goHome}>
            Annualy 
            
            $60/year
             </Button>{''}
        </div>
      </div>
    </div>

  </>
}
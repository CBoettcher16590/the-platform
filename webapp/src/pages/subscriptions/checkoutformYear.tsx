import React from "react";
import {CardElement, useStripe, useElements,Elements} from '@stripe/react-stripe-js';
import './style.css'
import { useHistory } from "react-router";




export default function CheckoutFormYear() {

    const stripe = useStripe();
    const elements = useElements();
    
    const history = useHistory();
  
  
  
  
    
    const handleSubmit = async (event:any) => {
      // Block native form submission.
      event.preventDefault();
      
  
      history.push('/');
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const cardElement = elements.getElement(CardElement)!; //this exclamation mark is very very important :)
            //something something asserting magic.
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (error) {
        console.log('[error]', error);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }
    };
  
    return (
  
      
      <div className="payMain">
        <div className="checkoutCenterText"> <p className="checkoutCenterTextP">  65$ Yearly    </p></div>
        <div className="checkoutCenter">
  
        <form className="checkoutForm" onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <button className="checkoutButton" type="submit" disabled={!stripe}>
            Pay 
          </button>
        </form>
        </div>
      </div>
    );
  };
  
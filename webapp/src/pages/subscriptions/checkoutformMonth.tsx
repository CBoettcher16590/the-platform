import React from "react";
import {CardElement, useStripe, useElements,Elements} from '@stripe/react-stripe-js';
import './style.css'
import { useHistory } from "react-router";




//test cards - https://stripe.com/docs/testing
// No authentication (default U.S. card): 4242 4242 4242 4242.




// const CARD_OPTIONS = {
//   iconStyle: "solid",
//   style: {
//     base: {
//       iconColor: "#c4f0ff",
//       color: "#fff",
//       fontWeight: 500,
//       fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//       fontSize: "16px",
//       fontSmoothing: "antialiased",
//       ":-webkit-autofill": {
//         color: "#fce883"
//       },
//       "::placeholder": {
//         color: "#87bbfd"
//       }
//     },
//     invalid: {
//       iconColor: "#ffc7ee",
//       color: "#ffc7ee"
//     }
//   }
// };




const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883"
      },
      "::placeholder": {
        color: "#87bbfd"
      }
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee"
    }
  }
};





export default function CheckoutFormMonth() {

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
      <div className="checkoutCenterText"> <p className="checkoutCenterTextP">  5$ Monthly    </p></div>
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




/*
<div className="panel">
    <form action="payment.php" method="POST" id="paymentFrm">
        <div className="panel-body">
      
            <p>   Payment form   </p>
            <div className="form-group">
                <label>CARD NUMBER</label>
                <div id="card_number" className="c"></div>
            </div>

            <div className="form-group">
                <label>EXPIRY DATE</label>
                <div id="card_expiry" className="field"></div>
            </div>

            <div className="form-group">
                <label>CVC CODE</label>
                <div id="card_cvc" className="field"></div>
            </div>


            <button type="submit" className="btn btn-success" id="payBtn">Submit Payment</button>
        </div>
        <div id="paymentResponse"></div>
    </form>
</div>


*/









/*
<form onSubmit={handleSubmit}>
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
<button type="submit" disabled={!stripe}>
  Pay
</button>
</form>

*/















  /*
  
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event:any) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

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
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );

};



*/








// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     // Block native form submission.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return;
//     }

//     // Get a reference to a mounted CardElement. Elements knows how
//     // to find your CardElement because there can only ever be one of
//     // each type of element.
//     const cardElement = elements.getElement(CardElement);

//     // Use your card Element with other Stripe.js APIs
//     const {error, paymentMethod} = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     });

//     if (error) {
//       console.log('[error]', error);
//     } else {
//       console.log('[PaymentMethod]', paymentMethod);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: '16px',
//               color: '#424770',
//               '::placeholder': {
//                 color: '#aab7c4',
//               },
//             },
//             invalid: {
//               color: '#9e2146',
//             },
//           },
//         }}
//       />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// };

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

// const App = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// };

// export default App;

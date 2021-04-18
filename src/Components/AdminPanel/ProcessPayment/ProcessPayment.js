import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51Ie0qOJOGm0fCGMWv4lqN3X6QbLTqU1jXJgpbHMB7JNLj8gWrjqnYEkXUJ23oM7jXtZqKDeqBbxIIO0oWKsfikxW00QSvhEG4G');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <CheckOutForm handlePayment={handlePayment} ></CheckOutForm>
        </Elements>
    );
};

export default ProcessPayment;
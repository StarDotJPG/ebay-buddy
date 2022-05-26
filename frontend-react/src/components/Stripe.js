import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PayForm from './PayForm'

const PUBLIC_KEY = 'pk_test_51L3NlJIbWCRjsLJPFbFlXJX4OHmzP88f6AqMqJ2xdUTTMQXykoGIgGvVoV5XfxBHCkmQkKf0LCtwRm9efh0WTxTF00Z1mAqgeD'
const stripePromise = loadStripe(PUBLIC_KEY)

export default function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      <PayForm />
    </Elements>
  )
}

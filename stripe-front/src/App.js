import './App.css';
import React, {useState} from 'react';
import StripeCheckout from 'react-stripe-checkout'

function App() {

  const [donation, setDonation] = useState({
    name: 'Donation: $5',
    price: 5
  })

  const makeDonation = token => {
    const body = {
      token,
      donation
    }
    const headers = {
      'Content-Type': 'application/json'
    }
    return fetch(`http://localhost:3001/donate`, {  //stripe will only work on httpS
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log('RESPONSE', response)
      const {status} = response;
      console.log('STATUS', status)
    }).catch(error => console.log(error))
  }

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <StripeCheckout stripeKey='pk_test_51L3NlJIbWCRjsLJPg9Oew0LGLMS3vhlEQjb3Gs20yY0UCzvBLBdLSQqdFHKpdT2zXQsMO59uZrP1Pr4pmVF9OXiZ00wiD8sf8t' 
                        token={makeDonation} 
                        name='Donate'
                        amount={donation.price * 100}>
          <button className='donateBtn'>DONATE {donation.price}</button>
        </StripeCheckout>
      </header>
    </div>
  );
}

export default App;

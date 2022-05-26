import './App.css';
import Stripe from './components/Stripe';
import fiveDollar from './assets/5dollar.webp'
// import tenDollar from './assets/ten.jpg'
import { useState } from 'react';

function App() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
      <h1>Donate</h1>
        <div className='donateOptions'>
          {showItem ? <Stripe/> : <> <h3>$5.00</h3> <img id='five' src={fiveDollar} 
          alt='five dollar donation'/>
          <button onClick={()=> setShowItem(true)}>Donate $5</button></>}
          {/* {showItem ? <Stripe/> : <> <h3>$10.00</h3> <img id='ten' src={tenDollar} 
          alt='ten dollar donation'/>
          <button onClick={()=> setShowItem(true)}>Donate $10</button></>} */}
        </div>
    </div>
  );
}

export default App;

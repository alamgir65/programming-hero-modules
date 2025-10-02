import './App.css'
import Navbar from './Conponents/Navbar/Navbar'
import { Suspense } from 'react';
import PricingOptions from './Conponents/PricingOptions/PricingOptions';

function App() {

  const pricingPromise = fetch('/Pricing.json').then(res => res.json());

  return (
    <>

      <Navbar></Navbar>
      <main className='bg-slate-200'>
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <PricingOptions pricingPromise = {pricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  )
}

export default App

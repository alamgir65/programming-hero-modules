import './App.css'
import Navbar from './Conponents/Navbar/Navbar'
import { Suspense } from 'react';
import PricingOptions from './Conponents/PricingOptions/PricingOptions';
import Charts from './Conponents/Charts/Charts';
import axios from 'axios';
import MarksChart from './Conponents/Charts/MarksChart';

function App() {

  const pricingPromise = fetch('/Pricing.json').then(res => res.json());
  const marksPromise = axios.get('MarksData.json');

  return (
    <>

      <Navbar></Navbar>
      <main className='bg-slate-200'>
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <PricingOptions pricingPromise = {pricingPromise}></PricingOptions>
        </Suspense>
        <Charts></Charts>

        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
      </main>
    </>
  )
}

export default App

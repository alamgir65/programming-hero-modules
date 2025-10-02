import React, { use } from 'react';
import PriceCard from './PriceCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
    console.log(pricingData);
    return (
        <div>
            <h1 className='text-4xl px-10 py-5 font-bold'>Pricing...</h1>
            <div className='px-5 py-3 grid md:grid-cols-3 gap-5'>
                {
                    pricingData.map(pricing => <PriceCard key={pricing.id} pricing={pricing} ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;
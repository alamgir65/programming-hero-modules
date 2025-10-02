import React from 'react';
import Feature from './Feature';

const PriceCard = ({ pricing }) => {
    // console.log(pricing);
    const { name, price, features,description } = pricing;
    return (
        <div className='bg-white rounded-xl p-5 flex flex-col'>
            <h2 className='text-2xl font-bold mb-2'>{name}</h2>
            <h4 className='text-xl font-semibold'>{price}</h4>
            <div className='mt-5 flex-1'>
                <p className='opacity-70 mb-2'>{description}</p>
                <div className='space-y-2 bg-slate-50 p-3 rounded-lg'>
                    {
                        features.map(feature => <Feature feature={feature}></Feature>)
                    }
                </div>
            </div>
            <button className='btn btn-primary w-full mt-4'>Subscribe</button>
        </div>
    );
};

export default PriceCard;
import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {

    const user = useLoaderData();
    console.log('loaded user data', user);
    
    return (
        <div>
            <h1>Datails page.........</h1>
        </div>
    );
};

export default Details;
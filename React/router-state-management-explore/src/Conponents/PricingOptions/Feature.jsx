import React from 'react';
import { CircleCheck } from 'lucide-react';

const Feature = ({feature}) => {
    return (
        <p className='flex gap-2'><CircleCheck></CircleCheck> {feature} </p>
    );
};

export default Feature;
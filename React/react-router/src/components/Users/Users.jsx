import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h4>This is Users Component.</h4>
        </div>
    );
};

export default Users;
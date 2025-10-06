import React from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h4>This is Users Component.</h4>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;
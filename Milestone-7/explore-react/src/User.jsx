import React, { use } from 'react';
import Single from './Single';

const User = ({userFetch}) => {
    const users = use(userFetch);
    console.log(users);
    return (
        <div style={{border:'2px solid yellow',margin : '10px', padding : '5px',borderRadius : '5px', justifyContent : 'center'}}>
            <h1>Users : {users.length}</h1>

            <div style={{display : 'flex' , gap: '10px' , flexWrap : 'wrap'}}>
                {
                    users.map(user => <Single user={user}></Single>)
                }
            </div>
        </div>
    );
};

export default User;
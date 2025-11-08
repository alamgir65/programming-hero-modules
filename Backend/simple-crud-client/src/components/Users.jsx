import React, { use } from 'react';


const Users = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log(users);
    return (
        <div>
            <h1>All users</h1>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Users;
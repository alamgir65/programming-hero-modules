import React, { use } from 'react';
import User from './User';

const Users = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log(users);

    const submitHandler = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = {name, email};
        // console.log(name,email);
        fetch('http://localhost:3000/users', {
            method : 'POST',
            headers : {
                'Content-Type' : "application/json"
            },
            body: JSON.stringify(user) 
        })
            .then(res => res.json())
            .then(data => {
                console.log('After fetch......', data);
                e.target.reset();
            })
    }

    return (
        <div>
            <div>
                <h1>Create a user</h1>
                <form onSubmit={submitHandler}>
                    <input type="text" name="name" placeholder='Name' id="" /> <br />
                    <input type="email" name="email" placeholder='Email' id="" /> <br />
                    <button type="submit">Create</button>
                </form>
            </div>
            <h1>Users: {users.length}</h1>
            <div>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;
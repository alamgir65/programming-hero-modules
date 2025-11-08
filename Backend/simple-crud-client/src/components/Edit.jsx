import React from 'react';
import { useLoaderData } from 'react-router';

const Edit = () => {
    const user = useLoaderData();
    console.log('loaded user data for edit', user);

    const handleUpdate = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedUser = { name, email };
        console.log('updating user', updatedUser);

        fetch(`http://localhost:5000/users/${user._id}`,{
            method : 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after updating user', data);
            })
    }
    return (
        <div>
            <h1>Update user........</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" defaultValue={user.name} name="name" placeholder='Name'/>
                <br />
                <input type="eamil" name="email" defaultValue={user.email} placeholder='Email'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Edit;
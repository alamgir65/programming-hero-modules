import React, { use, useState } from 'react';
import { Link } from 'react-router';

const UserForm = ({ usersPromise }) => {

    const initialUsers = use(usersPromise);
    const [users,setUsers] = useState(initialUsers);
    console.log(initialUsers);

    const submitHandler = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = { name, email };
        console.log(newUser);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after saving data  ', data)
                if (data.insertedId) {
                    newUser._id = data.insertedId;
                    setUsers([...users,newUser]);
                    e.target.reset();
                } else {
                    console.log('something went wrong.')
                }
            })
    }


    const removeHandler = (id) => {
        console.log('id to be deleted', id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log('after deleting', data);
                if(data.deletedCount){
                    alert('User deleted successfully');
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining);
                }
            })
    }

    const detailsHandler = (id) => {
        fetch(`http://localhost:5000/users/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log('user details', data);
            })
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name="name" placeholder='Name'/>
                <br />
                <input type="eamil" name="email" placeholder='Email'/>
                <br />
                <input type="submit" value="Submit" />
            </form>


            <div>
                <h1>All users</h1>
                <div>
                    {
                        users.map(user => 
                        <p key={user._id}>{user.name} : {user.email} <br />
                        <button onClick={()=>removeHandler(user._id)}>x</button>
                        <br />
                        <Link to={`/users/${user._id}`}>details</Link>
                        <Link to={`/users/update/${user._id}`}>Edit</Link>
                        </p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default UserForm;
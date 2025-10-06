import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);

    const userDetailsStyle = {
        border: '2px solid green',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }

    const navigate = useNavigate();


    return (
        <div>
            <h1>This is user details..</h1>

            <div style={userDetailsStyle}>
                <h3>Name: {user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>Company: {user.company.name}</p>
                <p>City: {user.address.city}</p>

                <button onClick={() => navigate(-1)}>Goback</button>
            </div>
        </div>
    );
};

export default UserDetails;
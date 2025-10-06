import { Link, useNavigate } from "react-router";

const User = ({user}) => {
    const userStyle = {
        border: '2px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/users/${user.id}`);
    }
    return (
        <div style={userStyle}>
            <h3>Name : {user.name} </h3>
            <p>Email : {user.email} </p>
            <small>Phone : {user.phone}</small>  <br />
            <Link to={`/users/${user.id}`} style={{marginBottom : "20px"}}>Show Details</Link>
            <br />
            <button onClick={handleNavigate}>Details Button</button>
        </div>
    );
};

export default User;
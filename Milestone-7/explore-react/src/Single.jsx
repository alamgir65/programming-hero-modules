import React from 'react';

const Single = ({user}) => {
    return (
        <div style={{border:'1px solid green',margin : '10px', padding : '5px',borderRadius : '5px'}}>
            <h4>Name : {user.name}</h4>
            <p>Email : {user.email} </p>
        </div>
    );
};

export default Single;
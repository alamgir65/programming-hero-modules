import React from 'react';

const ActionForm = () => {
    const handleAction = (FormData) => {
        console.log(FormData.get('name'));
        console.log(FormData.get('email'));
    }
    return (
        <div>
            <form action={handleAction}>
                <input type="text" name="name" placeholder="Your Name" />
                <br />
                <input type="email" name="email" placeholder="Your Email" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ActionForm;
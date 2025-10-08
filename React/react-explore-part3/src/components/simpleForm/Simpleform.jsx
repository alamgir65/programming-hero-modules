import React from 'react';

const Simpleform = () => {

    const handleForm = (event) => {
        event.preventDefault();
        console.log('Form submitted');
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" name="name" placeholder="Your Name" />
                <br />
                <input type="email" name="email" placeholder="Your Email" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Simpleform;
import React, { useState } from 'react';

const AddNewUser = (props) => {
    const initialState = { id: null, name: "", username: "" }
    const [user, setUser] = useState(initialState);

    const handleUserInput = event => {
        const { name, value } = event.target;

        setUser({ ...user, [name]: value });
    }

    return (
        <form onSubmit={event => {
            event.preventDefault();

            props.addNewUser(user)
        }}
        >
            <label>Name</label>
            <input name="name" value={user.name} onChange={handleUserInput}></input>
            <label>Username</label>
            <input name="username" value={user.username} onChange={handleUserInput}></input>
            <button>Add New User</button>
        </form>
    );
}

export default AddNewUser;
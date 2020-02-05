import React, { useState, useEffect } from 'react';

const EditCurrentUser = (props) => {
    const [currentUser, setCurrentUser] = useState(props.currentUser);

    useEffect(() => {
        setCurrentUser(props.currentUser);
    }, [props]);

    const handleUserInput = event => {
        const { name, value } = event.target;

        setCurrentUser({ ...currentUser, [name]: value });
    }

    return (
        <form onSubmit={event => {
            event.preventDefault();

            props.updateUser(currentUser.id, currentUser)
        }}
        >
            <label>Name</label>
            <input name="name" value={currentUser.name} onChange={handleUserInput}></input>
            <label>Username</label>
            <input name="username" value={currentUser.username} onChange={handleUserInput}></input>
            <button>Update User</button>
            <button onClick={() => props.setIsEditing(false)}>Cancel</button>
        </form>
    );
}

export default EditCurrentUser;
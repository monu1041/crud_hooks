import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AddNewUser from './components/AddNewUser';
import EditCurrentUser from './components/EditCurrentUser';
import UserTable from './tables/UserTable'

function App() {

  const dummyUsers = [
    { id: 1, name: "Raj", username: "Kumar" },
    { id: 2, name: "Raj2", username: "Kumar2" },
    { id: 3, name: "Raj3", username: "Kumar3" }
  ]
  const [idCount, setIdCount] = useState(dummyUsers.length);
  const [users, setUsers] = useState(dummyUsers);
  const [isEditing, setIsEditing] = useState(false);
  const initialState = { id: null, name: "", username: "" }
  const [currentUser, setCurrentUser] = useState(initialState);

  const addNewUsers = user => {
    setIdCount(idCount + 1);
    user.id = idCount;
    console.log(user);
    setUsers([...users, user]);

  }

  const editRow = (user) => {
    setIsEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  }
  const deleteRow = (id) => {
    setIsEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  }

  const updateUser = (id, updatedUser) => {
    setIsEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="App">
      <div>
        <div>
          {isEditing ? (
            <EditCurrentUser currentUser={currentUser}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              updateUser={updateUser}
            />

          ) : (
              <AddNewUser addNewUser={addNewUsers} />

            )}
        </div>
      </div>
      <div>
        <UserTable users={users} editRow={editRow} deleteUser={deleteRow} />
      </div>
    </div>
  );
}

export default App;

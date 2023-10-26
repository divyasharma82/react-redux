import React from 'react';
import './user.css';

const User = ({ users }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>username</th>
          <th>email</th>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default User;

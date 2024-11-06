import React from 'react';

const UserManagement = () => (
  <div>
    <h1>User Management</h1>
    <button className="add-user-btn">+ Add User</button>
    <table className="user-table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>john_doe</td>
          <td>john@example.com</td>
          <td>Admin</td>
          <td>
            <button className="edit-icon">Edit</button>
            <button className="delete-icon">Delete</button>
          </td>
        </tr>
        {/* Additional rows can go here */}
      </tbody>
    </table>
  </div>
);

export default UserManagement;

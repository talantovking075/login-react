import React from 'react';
import './Users.css';

const Users = () => {
  const users = [
    { id: 1, name: 'Behruz Talantov', email: 'behruz@mail.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jasur Ahmedov', email: 'jasur@example.com', role: 'Editor', status: 'Inactive' },
    { id: 3, name: 'Dilnoza Olimova', email: 'dilnoza@test.uz', role: 'User', status: 'Active' },
    { id: 4, name: 'Anvar Karimov', email: 'anvar@dev.com', role: 'User', status: 'Pending' },
  ];

  return (
    <div className="users-card">
      <div className="card-header">
        <h2>Foydalanuvchilar</h2>
        <button className="add-btn">+ Yangi qo'shish</button>
      </div>
      <table className="users-table">
        <thead>
          <tr>
            <th>Foydalanuvchi</th>
            <th>Roli</th>
            <th>Holati</th>
            <th>Amallar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="user-info">
                  <div className="user-name">{user.name}</div>
                  <div className="user-email">{user.email}</div>
                </div>
              </td>
              <td>{user.role}</td>
              <td>
                <span className={`status-badge ${
                  user.status === 'Active' ? 'status-active' : 
                  user.status === 'Inactive' ? 'status-inactive' : 'status-pending'
                }`}>
                  {user.status}
                </span>
              </td>
              <td>
                <button className="action-btn edit-btn">Tahrirlash</button>
                <button className="action-btn delete-btn">O'chirish</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
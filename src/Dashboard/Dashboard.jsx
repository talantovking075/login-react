import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, Settings, BarChart3, LogOut } from 'lucide-react';
import './Dashboard.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-logo">Control.io</div>
        
        <nav style={{ flexGrow: 1 }}>
          <NavLink to="main" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
            <LayoutDashboard size={20} /> Dashboard
          </NavLink>

          <NavLink to="users" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
            <Users size={20} /> Foydalanuvchilar
          </NavLink>
        </nav>

        <div className="menu-item logout" onClick={() => navigate('/login')}>
          <LogOut size={20} /> Chiqish
        </div>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>

      
    </div>
  );
};

export default Dashboard;
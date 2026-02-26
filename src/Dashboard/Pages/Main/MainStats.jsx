import React from 'react'
import './MainStats.css'
const MainStats = () => {
  return (
    <div>
      <h2>Asosiy Statistika</h2>
      <div className="stats-container">
        <div className="stat-card">
          <h3>Foydalanuvchilar</h3>
          <p>1500</p>
        </div>
        <div className="stat-card">
          <h3>Yangi Ro'yxatdan O'tganlar</h3>
          <p>200</p>
        </div>
        <div className="stat-card">
          <h3>Faol Foydalanuvchilar</h3>
          <p>1200</p>
        </div>
      </div>
      <div className="stats-footer">
        <button className="btn">Ko'proq Ma'lumot</button>
      </div>
      
    </div>
  )
}

export default MainStats

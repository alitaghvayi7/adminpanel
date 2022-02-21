import React from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import "./layout.css";
export default function Layout({children}) {
  return (
    <div className='appContainer'>
        <Navbar />
        <div className="app">
            <Sidebar />
            <div className="mainContent">
                {children}
            </div>
        </div>
    </div>
  )
}

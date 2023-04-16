import React from 'react'
import { Avatar } from '@mui/material';
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser).user;
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="https://images.unsplash.com/photo-1680978560866-481aff9fd6f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />    
            <Avatar className='sidebar_avatar' src={user.photoURL}>{user.displayName[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>2,543</p>
            </div>

            <div className="sidebar_stat">
                <p>Views on post</p>
                <p className='sidebar_statNumber'>4,323</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("programming")}
            {recentItem("design")}
            {recentItem("php")}
            {recentItem("developer")}
        </div>
    </div>
  )
}

export default Sidebar
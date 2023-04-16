import React from 'react'
import './HeaderOption.css';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function HeaderOption({Icon, avatar, title, onClick}) {
  const user = useSelector(selectUser).user;
  return (
    <div className='headerOption' onClick={onClick}>
        {Icon && <Icon className="headerOption_icon"/>}
        {avatar && <Avatar className='headerOption_icon' src={user?.photoURL}>{user?.displayName[0]}</Avatar>
}
        <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption;
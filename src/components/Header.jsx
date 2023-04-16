import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
// icons 
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { logout, selectUser } from '../features/userSlice';

function Header() {
  const user = useSelector(selectUser).user;
  const dispatch = useDispatch();
  const logOutOfApp = () => {
    dispatch(logout())
    signOut(auth)
  }

  return (
    <div className='header'>  
      <div className="header_left">
          <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />

          <div className="header_search">
              <SearchIcon />
              <input type="text" placeholder='Search'/>
          </div>
      </div>

      <div className="header_right">
          <HeaderOption title={"Home"} Icon={HomeIcon}/>
          <HeaderOption title={"My Network"} Icon={SupervisorAccountIcon}/>
          <HeaderOption title={"Jobs"} Icon={BusinessCenterIcon}/>
          <HeaderOption title={"Messaging"} Icon={ChatIcon}/>
          <HeaderOption title={"Notifications"} Icon={NotificationsIcon}/>
          <HeaderOption title={"Me"} avatar={true} onClick={logOutOfApp}/>
      </div>
    </div>
  )
}

export default Header
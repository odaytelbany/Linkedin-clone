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

function Header() {
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
          <HeaderOption title={"Me"} avatar="https://yt3.ggpht.com/yti/AHXOFjXMQ5SoDF0vkckfwctKAqsxBxbiYikfIgapHN8I1g=s108-c-k-c0x00ffffff-no-rj"/>
      </div>
    </div>
  )
}

export default Header
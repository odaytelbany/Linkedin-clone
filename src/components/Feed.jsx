import React from 'react'
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalenderViewDayIcon from '@mui/icons-material/CalendarViewDayRounded'
import InputOption from './InputOption';

function Feed() {
  return (
    <div className="feed">
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon />
                <form>
                    <input type="text" />
                    <button type='submit'>Send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOption title="Photo" color="#7085f9" Icon={ImageIcon}/>
                <InputOption title="Video" color="#E7a33e" Icon={SubscriptionIcon}/>
                <InputOption title="Event" color="#c0cbcd" Icon={EventNoteIcon}/>
                <InputOption title="Write article" color="#7fc15e" Icon={CalenderViewDayIcon}/>
            </div>
        </div>
    </div>
  )
}

export default Feed
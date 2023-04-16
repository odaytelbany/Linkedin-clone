import './Post.css'
import React,{ forwardRef } from 'react';
import InputOption from './InputOption';
// material ui icons
import { Avatar } from '@mui/material'
import LikeIcon from "@mui/icons-material/ThumbUpAltOutlined"
import CommentIcon from "@mui/icons-material/ChatOutlined"
import ShareIcon from "@mui/icons-material/Share"
import SendIcon from "@mui/icons-material/SendOutlined"
// firebase
import { getDocs, collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    const user = useSelector(selectUser).user;
  return (
    <div ref={ref} className="post">
        <div className="post_header">
            <Avatar src={photoUrl}> {name[0]} </Avatar>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post_body">
            <p>{message}</p>
        </div>

        <div className="post_buttons">
            <InputOption title="Like" color="grey" Icon={LikeIcon}/>
            <InputOption title="Comment" color="grey" Icon={CommentIcon}/>
            <InputOption title="Share" color="grey" Icon={ShareIcon}/>
            <InputOption title="Send" color="grey" Icon={SendIcon}/>
        </div>
    </div>
  )
})

export default Post
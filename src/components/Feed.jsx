import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalenderViewDayIcon from "@mui/icons-material/CalendarViewDayRounded";
import InputOption from "./InputOption";
import Post from "./Post";
// firebase
// import 'firebase/firestore';
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy
} from "firebase/firestore";
import { db, auth } from "../config/firebase";

function Feed() {
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const postsCollection = collection(db, "Posts");


  const getPosts = () => {
      onSnapshot(query(postsCollection, orderBy("timestamp", "desc")), (snapshot) => {
        const allPosts = [];
        snapshot.forEach((doc) =>
        allPosts.push({
          id: doc.id,
          ...doc.data(),
        })
      );
      setPosts(allPosts);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    addDoc(postsCollection, {
      name: "oday",
      description: "web developer",
      photoUrl: "",
      message: message,
      timestamp: serverTimestamp(),
    });

    setMessage("");
    getPosts();
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption title="Photo" color="#7085f9" Icon={ImageIcon} />
          <InputOption title="Video" color="#E7a33e" Icon={SubscriptionIcon} />
          <InputOption title="Event" color="#c0cbcd" Icon={EventNoteIcon} />
          <InputOption
            title="Write article"
            color="#7fc15e"
            Icon={CalenderViewDayIcon}
          />
        </div>
      </div>

      {
        // view posts
        posts.map((post) => {
          return (
            <Post
              key={post.id}
              name={post.name}
              description={post.description}
              message={post.message}
              photoUrl={post.photoUrl}
            />
          );
        })
      }
    </div>
  );
}

export default Feed;

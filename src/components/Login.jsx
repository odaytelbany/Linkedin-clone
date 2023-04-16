import React, { useState } from "react";
import "./Login.css";
import { auth } from "../config/firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      dispatch(
        login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL
        })
      )
    })
    .catch(err => alert(err))
  };

  // const logoutApp = (e) => {
  //   e.preventDefault();
  //   signOut(auth);
  // }


  const register = async () => {
    try{
      if (!name) {
        return alert("Please enter the full name!")
      }
      const {user} = await createUserWithEmailAndPassword(auth,email,password)
      
      await updateProfile(user, {
        displayName: name,
        photoURL: photo
      })
      .then(() => {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: name,
            photoURL: photo
          })
        )
      })
    }catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
        alt=""
      />

      <form>
        <input
          type="text"
          placeholder="Full name (required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Photo picture URL (optional)"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;

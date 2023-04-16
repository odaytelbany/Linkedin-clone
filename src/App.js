import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';

function App() {
  const user = useSelector(selectUser).user;
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user){
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          })
        )
      }else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="App">
      {
        !user ? (
          <Login />
          ):
          (
            <>
              <Header />
              <div className="app_body">
                <Sidebar />
                <Feed />
              </div>
            </>
          )
      }
    </div>
  );
}

export default App;

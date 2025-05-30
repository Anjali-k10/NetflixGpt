import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import { NetflixLogo } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); 
  const user = useSelector((store) => store.user);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      } else {
        dispatch(removeUser());
      }
      setLoading(false); // Only allow rendering after checking auth
    });

    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    if (!loading) { 
      if (user.email !== null && (location.pathname === "/signup" || location.pathname === "/")) {
        navigate("/browse"); 
        // console.log("Navigated to browse");
      }
    }
  }, [user, navigate, loading, location]);
  
  if (loading) return <div className="text-white text-center mt-10">Loading...</div>;
  const imageHeight = location.pathname === "/browse" ? "h-12" : "w-48";
  return (
    <div className='w-full px-8 py-2 absolute bg-gradient-to-b from-black z-10 '>
      <img className={` ${imageHeight}`} src={NetflixLogo} alt='logo'/>
    </div>
  );
}

export default Header;

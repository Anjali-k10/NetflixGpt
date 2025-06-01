import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import { NetflixLogo, SupportedLang } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
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
      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
      if (user?.email && (location.pathname === "/signup" || location.pathname === "/")) {
        navigate("/browse");
      }
    }
  }, [user, navigate, loading, location]);
 
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  if (loading) return <div className="text-white text-center mt-10">Loading...</div>;

  const logoSize = location.pathname === "/browse" ? "h-16" : "w-52";
  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView());
  };
  const handleLangChange=(e)=>{
    // console.log(e.target.value)
    dispatch( changeLanguage(e.target.value));

  }
  return (
    <div className='w-full px-16 py-2 absolute bg-gradient-to-b from-black z-10 flex justify-between items-center'>
      <img className={`${logoSize}`} src={NetflixLogo} alt='logo' />
      {user && location.pathname === "/browse" && (
        <div>
      { showGptSearch && (    <select 
          className='w-24 p-2 m-2  text-white bg-gray-900 rounded-lg border-none ' 
           onChange={handleLangChange}
           >
            {SupportedLang.map((lang)=> (
               <option key={lang.identifier} value={lang.identifier}>{lang.name}
               </option>)
              )}
          </select>)}
          <button
           className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'
          onClick={handleGptSearchClick}
          >{showGptSearch?"Homepage":"Gpt Search"}
          </button>
       
        <div className="absolute top-2 right-6 flex flex-col items-center">
          <img
            className="h-10 w-10 rounded-full object-cover -mt-2"
            src={user?.photoURL}
            alt="Profile"
          />
          <button
            className="bg-red-700 rounded-md px-4 py-1 text-white text-sm mt-1"
            onClick={handleSignOut}
          >
            Log out
          </button>
        </div>
        </div>
      )}
    </div>
  );
};

export default Header;




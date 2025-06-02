import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { NetflixLogo, SupportedLang } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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
    if (
      !loading &&
      user?.email &&
      (location.pathname === "/signup" || location.pathname === "/")
    ) {
      navigate("/browse");
    }
  }, [user, navigate, loading, location]);

  useEffect(() => {
    if (location.pathname === "/search" && !showGptSearch) {
      dispatch(toggleGptSearchView());
    } else if (location.pathname === "/browse" && showGptSearch) {
      dispatch(toggleGptSearchView());
    }
  }, [location.pathname, dispatch, showGptSearch]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => console.error("Sign-out error:", error));
  };

  const handleGptSearchClick = () => {
    if (showGptSearch) {
      navigate("/browse");
    } else {
      navigate("/search");
    }
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  if (loading)
    return <div className="text-white text-center mt-10">Loading...</div>;

  const logoSize =
    location.pathname === "/browse" || location.pathname === "/search"
      ? "h-16"
      : "w-52";

  return (
    <div className="fixed top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between items-center">
      <img className={`${logoSize}`} src={NetflixLogo} alt="logo" />

      {user && (
        <div className="ml-auto flex items-center gap-4 pr-2">
          {showGptSearch && (
            <select
              className="w-24 p-2 text-white bg-gray-900 rounded-lg border-none"
              onChange={handleLangChange}
            >
              {SupportedLang.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>

          <div className="flex items-center gap-3">
            <button
              className="bg-red-700 rounded-md px-4 py-2 text-white text-sm"
              onClick={handleSignOut}
            >
              Log out
            </button>
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={user?.photoURL}
              alt="Profile"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

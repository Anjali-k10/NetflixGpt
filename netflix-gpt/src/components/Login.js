

import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { isValidLogin, isValidSignup } from "../utils/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
import { backgroundImg, defaultPhoto } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleForm = () => {
    setErrorMsg(null);
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignIn) {
      const message = isValidLogin(email.current.value, password.current.value);
      if (message) return setErrorMsg(message);
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
        console.log(userCredential.user);
        navigate("/browse");
      } catch (error) {
        setErrorMsg(`${error.code} - ${error.message}`);
      }
    } else {
      const message = isValidSignup(name.current?.value, email.current.value, password.current.value);
      if (message) return setErrorMsg(message);
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: name.current.value,
          photoURL: defaultPhoto,
        });
        await user.reload();
        const { uid, email: userEmail, displayName, photoURL } = auth.currentUser;
        dispatch(addUser({ uid, email: userEmail, displayName, photoURL }));
        navigate("/browse");
      } catch (error) {
        setErrorMsg(`${error.code} - ${error.message}`);
      }
    }
  };

  return (
    <div className="flex-col overflow-hidden">
      <Header />
      <div className="absolute bg-gradient-to-b from-black -z-10">
        <img className="h-screen w-screen object-cover" src={backgroundImg} alt="background img" />
      </div>
      <form onSubmit={handleSubmit} className="absolute text-white my-32 p-10 bg-black bg-opacity-80 w-[27rem] h-auto rounded-md mx-auto left-0 right-0">
        <h1 className="w-11/12 mx-28 mt-6 text-left font-bold text-3xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input
            ref={name}
            className="w-11/12 mx-4 mt-8 text-left p-4 bg-black bg-opacity-50 border border-gray-500 rounded-[0.2rem]"
            type="text"
            placeholder="Enter your name"
            onChange={() => setErrorMsg(null)}
          />
        )}
        <input
          ref={email}
          className="w-11/12 mx-4 mt-4 text-left p-4 bg-black bg-opacity-50 border border-gray-500 rounded-[0.2rem]"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          onChange={() => setErrorMsg(null)}
          />
        <input
          ref={password}
          className="w-11/12 mx-4 my-4 text-left p-4 bg-black bg-opacity-50 border border-gray-500 rounded-[0.2rem]"
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          onChange={() => setErrorMsg(null)}
        />
        {errorMsg && (
          <p className="w-11/12 mx-4 my-4 text-left p-4 text-red-500">{errorMsg}</p>
        )}
        <button
          type="submit"
          className="w-11/12 mx-4 p-2 bg-red-700 font-semibold rounded-[0.2rem] text-center"
          >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="w-11/12 mx-4 my-4 text-left">
          <label className="flex items-center cursor-pointer">
            <input className="w-4 h-4 rounded-md" type="checkbox" id="rememberMe" name="rememberMe" />
            <span className="ml-2">Remember Me</span>
          </label>
        </div>
        <h3 className="w-11/12 mx-4 my-2 text-left">
          {isSignIn ? (
            <>
              New to Netflix?{" "}
              <span onClick={toggleForm} className="cursor-pointer font-semibold hover:underline">
                Sign Up Now
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={toggleForm} className="cursor-pointer font-semibold hover:underline">
                Sign In
              </span>
            </>
          )}
        </h3>
        <p className="w-11/12 mx-4 my-4 text-xs">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <Link
            className="cursor-pointer ml-1 text-blue-600 font-semibold hover:underline"
            to=""
          >
            Learn more.
          </Link>
        </p>
      </form>
    </div>
  );  
};

export default Login;



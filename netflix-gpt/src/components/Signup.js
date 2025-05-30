import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link,  useNavigate } from "react-router-dom";
import { isValidSignup } from "../utils/validate";
import { createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
// import profile from '../assets/profile.jpg';
import {backgroundImg,defaultPhoto}  from "../utils/constants"
const Signup = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const onClickValidate = () => {
    const message = isValidSignup(
      name.current.value,
      email.current.value,
      password.current.value
    );
    if (message) {
      setErrorMsg(message);
      return;
    }

    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user
        updateProfile(user, {
          displayName: name.current.value, photoURL: defaultPhoto
          
        }).then(async() => { 
           await user.reload();
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          // console.log("1" + { uid, email, displayName, photoURL });
          // console.log(profile)
          navigate("/browse")
        }).catch((error) => {
          setErrorMsg(`${error.code} - ${error.message}`);
        });
      })
      .catch((error) => {
        setErrorMsg(`${error.code} - ${error.message}`);
      });
  };

  return (
    <div className="flex-col">
      <Header />
      <div className="absolute bg-gradient-to-b from-black">
        <img
          className="h-screen w-screen"
          src={backgroundImg}
          alt="background img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute text-white my-32 p-10 bg-black bg-opacity-80 w-[27rem] h-auto rounded-md mx-auto left-0 right-0"
      >
        <h1 className="w-11/12 mx-28 mt-6 text-left font-bold text-3xl">Sign Up</h1>
        <input
          ref={name}
          className="w-11/12 mx-4 mt-8 text-left p-4 bg-black bg-opacity-50 border-[1.5px] rounded-[0.2rem]"
          type="text"
          placeholder="Enter your name"
          onChange={() => setErrorMsg(null)}
        />
        <input
          ref={email}
          className="w-11/12 mx-4 mt-4 text-left p-4 bg-black bg-opacity-50 border-[1.5px] rounded-[0.2rem]"
          type="email"
          placeholder="Enter your email or phone number"
          onChange={() => setErrorMsg(null)}
        />
        <input
          ref={password}
          className="w-11/12 mx-4 my-4 text-left p-4 bg-black bg-opacity-50 border-[1.5px] rounded-[0.2rem]"
          type="password"
          placeholder="Set a password"
          onChange={() => setErrorMsg(null)}
        />
        {errorMsg && (
          <p className="w-11/12 mx-4 my-4 text-left p-4 text-red-500">{errorMsg}</p>
        )}
        <button
          type="button"
          onClick={onClickValidate}
          className="w-11/12 mx-4  p-2 bg-red-700 font-semibold rounded-[0.2rem] text-center"
        >
          Sign Up
        </button>
        <div className="w-11/12 mx-4 my-4 text-left">
          <label className="flex items-center cursor-pointer">
            <input
              className="w-4 h-4 rounded-md"
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
            />
            <span className="ml-2">Remember Me</span>
          </label>
        </div>
        <h3 className="w-11/12 mx-4 my-2 text-left">
          Already have an account?{" "}
          <Link className="cursor-pointer font-semibold hover:underline" to="/">
            Sign In Now
          </Link>
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


export default Signup;

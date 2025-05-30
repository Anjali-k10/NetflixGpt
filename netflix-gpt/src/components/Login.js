import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link,  useNavigate } from "react-router-dom";
import { isValidLogin } from "../utils/validate";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import profile from '../assets/profile.jpg';
import {backgroundImg} from "../utils/constants"

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const [errorMsg, SetErrorMsg] = useState(null);
  const navigate = useNavigate()

  const checkValidate = () => {
    const message = isValidLogin(email.current.value, password.current.value);
    SetErrorMsg(message);
  
    if(message===null){
    signInWithEmailAndPassword(auth,email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      navigate("/browse")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      SetErrorMsg(`${errorCode} - ${errorMessage}`);
    
    });
  }

  };

  return (
    <div className="flex-col">
      <Header />
      <div className="absolute    bg-gradient-to-b from-black">
        <img
          src={backgroundImg}
          alt="background img"
        />
      </div>
      <form
        onSubmit={(e) =>e.preventDefault()}
        className=" absolute text-white  my-32 p-10 bg-black bg-opacity-80 w-[27rem] h- rounded-md mx-auto left-0 right-0 "
      >
        <h1 className="w-11/12 mx-28 mt-6 text-left font-bold text-3xl">
          Sign In
        </h1>
        <input
          ref={email}
          className="w-11/12 mx-4 mt-8 text-left  p-4 bg-black bg-opacity-50 border-[1.5px] rounded-[0.2rem]"
          type="email"
          id="email"
          name="email"
          autoComplete="email" 
          placeholder="Enter your email"
        />
        <input
          ref={password}
          className="w-11/12 mx-4 mt-4 text-left p-4 bg-black bg-opacity-50 border-[1.5px] rounded-[0.2rem]"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
        />
        <p className="w-11/12 mx-4  text-left p-4 text-red-600">
          {errorMsg}
        </p>
        <div
          onClick={checkValidate}
          className="w-11/12 mx-4 mb-2 p-2 bg-red-700 font-semibold rounded-[0.2rem] text-center"
        >
          <button type="submit">Sign In</button>
        </div>
        <h3 className="m-4 flex justify-center text-gray-400 font-semibold">
          OR
        </h3>
        <div className="w-11/12 mx-4 my-1 p-2 bg-white bg-opacity-20 rounded-[0.2rem] font-semibold text-center">
          <button type="submit">Use a sign-in code</button>
        </div>
        <div className="w-11/12 mx-4 my-1 p-2 font-medium  text-center">
          <button className=" " type="submit">
            Forget password?
          </button>
        </div>
        <div className="w-11/12 mx-4 my-4  text-left">
          <label className=" flex items-center cursor-pointer">
            <input
              className="w-4 h-4 rounded-md"
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
            />
            <span className="ml-2">Remember Me</span>{" "}
          </label>
        </div>
        <h3 className="w-11/12 mx-4 my-2  text-left" >
          New to Netflix?{" "}
          <Link
            className="cursor-pointer font-semibold hover:underline"
            to="/signup"
          >
            Sign Up Now
          </Link>
        </h3>
        <p className="w-11/12 mx-4 my-4 text-xs">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <Link
            className="cursor-pointer ml-1 text-blue-600 font-semibold hover:underline "
            to=""
          >
            Learn more.
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;

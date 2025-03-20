import React from "react";
import { useState } from "react";
import { login } from "../../Reducers/Slice/AuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const dispatch=useDispatch();
   const navigator=useNavigate();
    const [userInfo,setUserInfo]=useState({
      email: "",
      password:"",
    });
   async function handleSubmit(){

       const response=await dispatch(login(userInfo));
     
       console.log("login submit response",response);
       
       const getislogin=localStorage.getItem("auth");
       if(getislogin){
        setTimeout(()=>{
             navigator('/');
        },3000)
       }
       

    }
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
            <div className="flex justify-center">
            <h1 className="card-title text-2xl mb-2 ">Login</h1>
            </div>
         
          <input 
            type="email"
            placeholder="📨 Email" 
            className="input input-accent"  
            value={userInfo.email} 
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          />
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>

            <input
              type="password"
              required
              placeholder="Password"
              minlength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              value={userInfo.password} 
              onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
            />
          </label>
    
          <div className="card-actions justify-end">
          <div className="flex justify-center w-full">
            <button className="btn hover:bg-gray-700" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

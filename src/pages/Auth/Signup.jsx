import React, { useState } from "react";
import axiosInstance from "../../config/axiosInstance";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    name: "",
    clientName: "",
    userType: "",
    userStatus: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(userInfo);
    try {
      const response = await axiosInstance.post("/auth/signup", userInfo);
      console.log(response);
      if (response) {
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
      defaultValue();
    } catch (error) {
      console.error("Signup failed:", error);
    }
  }

  function defaultValue() {
    setUserInfo({
      email: "",
      password: "",
      name: "",
      clientName: "",
      userType: "",
      userStatus: "",
    });
  }

  function handleUserTypeSelection(e) {
    const type = e.target.textContent.trim().toLowerCase(); // Remove any extra spaces
    setUserInfo((prev) => ({
      ...prev,
      userType: type,
      userStatus: type.toUpperCase() === "CUSTOMER" ? "approved" : "suspended",
    }));
  }

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <div className="flex justify-center">
            <h1 className="card-title text-2xl mb-2">Signup</h1>
          </div>
          <input
            type="text"
            placeholder="Name"
            className="input input-accent"
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-accent"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
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
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
            />
          </label>
          <div className="card-actions mt-3 mb-3">
            <div className="dropdown dropdown-right dropdown-center">
              <div tabIndex={0} role="button" className="btn m-1">
                {userInfo.userType ? userInfo.userType.toUpperCase() : "USER TYPE"}
              </div>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>
                  <button onClick={handleUserTypeSelection}>CUSTOMER</button>
                </li>
                <li>
                  <button onClick={handleUserTypeSelection}>ENGINEER</button>
                </li>
                <li>
                  <button onClick={handleUserTypeSelection}>ADMIN</button>
                </li>
              </ul>
            </div>
          </div>

          <input
            type="text"
            placeholder="Client Name"
            className="input input-accent"
            value={userInfo.clientName}
            onChange={(e) =>
              setUserInfo({ ...userInfo, clientName: e.target.value })
            }
          />
          <div className="card-actions justify-end">
            <div className="flex justify-center w-full">
              <button className="btn hover:bg-gray-700" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

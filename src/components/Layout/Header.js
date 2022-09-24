import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authReducer";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const islogin = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [id, setId] = useState(false);

  const logOutHandler = () => {
    localStorage.removeItem("idToken");
    dispatch(authActions.logout());
    navigate("/login");
  };
  
  useEffect(()=>{
    setId(localStorage.getItem("idToken"));
  }, [id])

  return (
    <div className="header">
      <div className="welcome">{ id && islogin && <span>Welcome to Expense tracker</span>}</div>
      {!islogin && <Link to="/login">Login</Link>}
      {!islogin && <Link to="/signup">Sign up</Link>}
      { id && islogin && <button className="bnt" onClick={logOutHandler}>Logout</button>}
      <div className="profile">
        {id && islogin && <Link to="/completeprofile">Complete Profile</Link>}
      </div>
    </div>
  );
};

export default Header;

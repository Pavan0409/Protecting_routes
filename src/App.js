import React, { useEffect, useState } from "react";
import SignUp from "./components/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Welcome from "./components/Welcome";
import Header from "./components/Layout/Header";
import Profile from "./components/Profile/Profile";
import PasscodeReset from "./components/Pages/CreatingPasscode/PasscodeReset";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import DarkThemeProvider from "./components/Layout/themeProvider";
import styled from "styled-components";
import theme from "styled-theming";
// import Expenses from "./components/Expenses/Expenses";
import { authActions } from "./components/store/authReducer";

export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  ${
    "" /* align-items: clearInterval;
  justify-content: clearInterval; */
  }
  font-family: san-serif;
  background-color: ${backgroundColor};
  color: ${textColor};
`;

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const [id, setId] = useState(false);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(authActions.login());
    setId(localStorage.getItem("idToken"));
  }, [id]);

  return (
    <DarkThemeProvider>
      <Container>
        <Header />
        <Routes>
          <Route exact path="/signup" element={<SignUp />} />
          {isAuth && id && <Route exact path="/welcome" element={<Welcome />} />}
          {/* { isAuth && <Route exact path="/welcome" element={<Expenses />} />} */}
          {!isAuth && <Route exact path="/login" element={<Login />} />}
          {isAuth && (
            <Route exact path="/completeprofile" element={<Profile />} />
          )}
          {<Route exact path="/resetpasscode" element={<PasscodeReset />} />}
          {<Route exact path="*" element={<Login />} />}
        </Routes>
      </Container>
    </DarkThemeProvider>
  );
}

export default App;

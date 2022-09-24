import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Expenses from "./Expenses/Expenses";
import { authActions } from "./store/authReducer"

const Welcome = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState(false);

  useEffect(() => {
    dispatch(authActions.login());
  }, [id]);

  return (
    <>
      {<Expenses />}
    </>
  );
};

export default Welcome;

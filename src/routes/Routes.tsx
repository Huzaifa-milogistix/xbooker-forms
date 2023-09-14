import React from "react";
// import { BrowserRouter as Router, Route, Routes as Switch, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Route, Routes as Switch } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "@/store";
import { Login, Register, Dashboard } from "@/pages";

export const Routes: React.FC = () => {
  const user = useRecoilValue(userState);

  return (
    <Switch>
      <Route path="/login" element={user ? <Dashboard /> : <Login />} />
      <Route path="/register" element={user ? <Dashboard /> : <Register />} />
      <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} />
      <Route path="/" element={user ? <Dashboard /> : <Login />} />
    </Switch>
  );
};

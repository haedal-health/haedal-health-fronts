import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import KakkoLogin from "./pages/KakkoLogin";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import ApiTest from "./pages/ApiTest";
import Proxy from "./pages/Proxy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/apis" element={<ApiTest />}></Route>
        <Route path="/kakkoLogin" element={<KakkoLogin />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/proxy" element={<Proxy />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

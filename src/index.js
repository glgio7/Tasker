import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { GlobalCSS } from "./cssreset";
import Home from "./pages/Home";
import Note from "./pages/Note";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalCSS />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/notepad" element={<Note/>} />
    </Routes>
  </BrowserRouter>
);

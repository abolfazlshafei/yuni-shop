import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/template/Layout";
import Home from "./components/page/Home";
import Clothes from "./components/page/Clothes";
import Sidebar from "./components/page/Sidebar";
import Login from "./components/page/Login";
function App() {
  return (
    <div className=" bg-black">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sidebar" element={<Sidebar />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

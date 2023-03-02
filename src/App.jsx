import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import HomePage from "./components/views/HomePage/HomePage";
import RegisterPage from "LoginPageMFE/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "LoginPageMFE/LoginPage";
import Aboutus from "./components/views/Aboutus/Aboutus";
import Centerlizer from "LoginPageMFE/Centerlizer";
import SingleProductPage from 'ProductPageMFE/SingleProductCard';
import Navbar from "./components/views/Navbar/Navbar";
const App = () => (
  <>
    <BrowserRouter>
   
     <Navbar/>
      <Routes>
     
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signIn" element={<RegisterPage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path='/product' element={<SingleProductPage/>}/>
        
      </Routes>
      
    </BrowserRouter>
    {/* <RoutingComponant path='/' element='<HomePage/>'/> */}
    {/* <RoutingComponant routes={routes} path={'/'} element={<HomePage />} /> */}
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));

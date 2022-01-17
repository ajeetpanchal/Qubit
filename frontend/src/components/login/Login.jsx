import React from "react";
import Forgotpassword from "./Forgotpassword";
import Userlogin from "./Userlogin";
import { BrowserRouter as Router,  Route,  Routes } from 'react-router-dom';
import Home from "./Home";



export default function Login() {
    return (
        <Routes>
        <Route path="/home" element={<Home/>} />
            <Route path="/" element={<Userlogin />} />
            <Route path="/forgot" element={<Forgotpassword />} />
        </Routes>
    );
}

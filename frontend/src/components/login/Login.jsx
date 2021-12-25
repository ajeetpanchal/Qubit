import React from "react";
import Forgotpassword from "./Forgotpassword";
import Userlogin from "./Userlogin";
import { BrowserRouter as Router,  Route,  Routes } from 'react-router-dom';



export default function Login() {
    return (
        <Routes>
            <Route path="/" element={<Userlogin />} />
            <Route path="/forgot" element={<Forgotpassword />} />
        </Routes>
    );
}

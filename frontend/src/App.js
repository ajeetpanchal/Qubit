import "./App.css";
import Login from "./components/login/Login";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Post from "./components/Post/Post";
import Setting from "./components/Setting/Settings";
import Home from "./components/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
}

export default App;

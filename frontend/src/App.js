import './App.css';
import Login from './components/login/Login';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/login/Navbar';
import Post from './components/login/Post';
import Setting from './components/login/Settings';
function App() {
  return (
    <BrowserRouter>
    <Login/>
    </BrowserRouter>
  );
}

export default App;

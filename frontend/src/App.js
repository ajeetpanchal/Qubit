import "./App.css";
import { Route, Routes } from "react-router-dom";
import Userlogin from "./components/login/Userlogin";
import Forgotpassword from "./components/login/Forgotpassword";
import ChatPage from "./components/message/ChatPage";
import Home from "./components/login/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Userlogin />} exact />
        <Route path="/forgot" element={<Forgotpassword />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/chats" element={<ChatPage />} exact />
      </Routes>
    </div>
  );
}

export default App;

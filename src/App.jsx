import Home from "./pages/home/Home.jsx";
import TopBar from "./components/topbar/TopBar.jsx";
import Single from "./pages/Single/Single.jsx";
import Write from "./pages/write/Write.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {

  const user = false;
  return (
    <Router>
     <TopBar />
     
     <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/register" element={user ? <Home />:<Register />} />
          <Route  path="/login" element={user ? <Home />:<Login />} />
          <Route  path="/write" element={user ? <Write/> : <Register />} />
          <Route  path="/settings" element={user ? <Settings/> : <Register />} />
          <Route  path="/post/:postId" element={<Single />} />
          

      </Routes>
   
    </Router>
  
  );
}

export default App;

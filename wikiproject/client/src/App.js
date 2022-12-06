import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import LogInpage from "./pages/LogInpage";
import Register from "./pages/Register";
import SignInPage from "./pages/SignInPage";
import PostGenerator from "./pages/PostGenerator";
import Feed from "./pages/Feed";
import MainBar from "./components/MainBar";
import { useState } from "react";

function App() {

  const [isLogged, setIsLogged] = useState(true);

  return (
    <div className="min-h-screen bg-slate-300">
      <Router>
        <MainBar isLogged={isLogged} setIsLogged={setIsLogged}/>
        <NavBar isLogged={isLogged}/>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/signin" element={<LogInpage setIsLogged={setIsLogged}/>}></Route>
          <Route exact path="/home" element={<Feed isLogged={isLogged}/>}></Route>
          <Route exact path="/test" element={<SignInPage />}></Route>
          <Route exact path="/create" element={<PostGenerator isLogged={isLogged}/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

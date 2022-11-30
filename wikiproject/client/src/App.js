import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import LogInpage from "./pages/LogInpage";
import Register from "./pages/Register";
import SignInPage from "./pages/SignInPage";
import PostGenerator from "./pages/PostGenerator";
import Feed from "./pages/Feed";

function App() {
  return (
    <div className="bg-slate-300 h-screen">
      <Router>
        <NavBar />
        <Footer />
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/signin" element={<LogInpage />}></Route>
          <Route exact path="/home" element={<Feed />}></Route>
          <Route exact path="/test" element={<SignInPage />}></Route>
          <Route exact path="/create" element={<PostGenerator />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

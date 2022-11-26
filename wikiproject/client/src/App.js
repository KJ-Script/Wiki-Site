import react from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import LogInpage from "./pages/LogInpage";
import Register from "./pages/Register";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <div className="bg-slate-300 h-screen">
      <Router>
        <NavBar />
        <Footer />
        <Routes>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/signin" element={<LogInpage />}></Route>
          <Route exact path="/signup" element={<LandingPage />}></Route>
          <Route exact path="/test" element={<SignInPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

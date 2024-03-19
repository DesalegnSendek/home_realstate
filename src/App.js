import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from  "./pages/Home";
import { Offers } from "./pages/Offers";
import { Profile } from  "./pages/Profile";
import { Signup } from  "./pages/Signup";
import { SignIn } from  "./pages/SignIn";
import { ForgotPassword } from "./pages/ForgotPassword";

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import  {About_Us}  from './pages/About_Us';




function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about-us" element={<About_Us />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

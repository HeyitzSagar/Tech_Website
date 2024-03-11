import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact-us" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

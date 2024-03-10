import "./App.css";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Banner2 from "./components/HeroSection/Banner2";
import Banner3 from "./components/HeroSection/Banner3";
import HeroSection1 from "./components/HeroSection/HeroSection1";

function App() {
  return (
    <div>
      <Header/>
      <HeroSection1/>
      <Banner2/>
      <Banner3/>
      <Footer/>
    </div>
  );
}

export default App;

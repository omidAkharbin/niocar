import {useEffect, useState} from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Menu from "./Components/Menu/Menu";
import Hero from "./Components/Hero/Hero";
import {HeroDataItem} from "./types";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import "./index.css";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const heroData: HeroDataItem[] = [
    {text1: "Dive into", text2: "what you love"},
    {text1: "Experience", text2: "the luxury"},
    {text1: "Discover", text2: "innovation"},
  ];

  const [heroCount, setHeroCount] = useState<number>(0);
  const [playState, setPlayState] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    // Prevent scrolling when menu is open
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // showing slideshow
    if (!playState) {
      const interval = setInterval(() => {
        setHeroCount((count) => (count === 2 ? 0 : count + 1));
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [playState, menuOpen]);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <div className="app-container">
        <Background playStatepas={playState} heroCountpas={heroCount} />
        <Navbar onMenuToggle={handleToggleMenu} menuOpen={menuOpen} />
        <Menu isOpen={menuOpen} onClose={handleCloseMenu} />

        <div className="content-container">
          <Routes>
            <Route
              path="/"
              element={
                <Home>
                  <Hero
                    setPlayState={setPlayState}
                    setheroCount={setHeroCount}
                    PlayState={playState}
                    heroCount={heroCount}
                    heroData={heroData[heroCount]}
                  />
                </Home>
              }
            />

            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

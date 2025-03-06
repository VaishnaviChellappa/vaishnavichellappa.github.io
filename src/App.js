import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WorkExperience from "./components/WorkExperience.js";
import CustomCursor from "./components/CustomCursor"; 
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode === null || storedMode === "true"; // Default: Dark Mode
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const [isPlaying, setIsPlaying] = useState(false); 

  useEffect(() => {
    const audio = document.getElementById("background-music");
    if (audio) {
      audio.volume = 0.5;
      audio.muted = true;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => console.log("Autoplay prevented:", error));
      }
    }
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById("background-music");
    if (audio) {
      if (isPlaying) {
        audio.muted = true;
        audio.pause();
      } else {
        audio.muted = false;
        audio.play().catch((error) => console.log("Play failed:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      
      {/* Custom Cursor Component */}
      <CustomCursor />

      <Router>
        <div className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/work-experience">Work Experience</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Background Music Element */}
        <audio id="background-music" loop>
          <source src="/background-music.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        {/* Mute/Unmute Music Button */}
        <button className="music-toggle-btn" onClick={toggleMusic}>
          {isPlaying ? "🔊" : "🔇"}
        </button>

        {/* Circular Floating Dark Mode Toggle Button */}
        <button className="toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? "🌞" : "🌙"}
        </button>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Hero from "./components/Hero/Hero";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
const App =()=>{
  return(
    <>

    <NavBar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    
  

    </>
  )
}

export default App
import logo from './logo.svg';
import Hero from './components/sections/Hero';
import Navbar from './components/sections/Navbar';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import AboutMe from './components/sections/AboutMe';


function App() {
  return (
    <div class="scroll-smooth">
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;

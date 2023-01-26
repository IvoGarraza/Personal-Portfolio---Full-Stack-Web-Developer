import logo from './logo.svg';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

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

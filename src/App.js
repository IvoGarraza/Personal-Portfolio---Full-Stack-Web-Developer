import logo from './logo.svg';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Project2 from './components/Projects2';

function App() {
  return (
    <div class="scroll-smooth">
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      {/* <Project2></Project2> */}
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;

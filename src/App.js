
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/footer';
import Head from './component/header';
import Hero from './component/hero';
import Projects from './component/Projects';
import Resume from './component/Resume';

function App() {
  return (
    <div>
    
    <Head/>
    <Hero/>
    <About/>
    <Projects/>
    <Resume/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;

import './css/style.css';
import 'aos/dist/aos.css'
import Aos from "aos";
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import Tools from './components/Tools';
import { useEffect } from 'react';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <div className='background-helper'>
      <Presentation />
      <Projects />
      </div>
      <Tools />
      <Contact />
    </div>
  );
}

export default App;

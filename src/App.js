import './css/style.css';
import 'aos/dist/aos.css'
import Aos from "aos";
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Presentation />
      <Projects />
    </div>
  );
}

export default App;

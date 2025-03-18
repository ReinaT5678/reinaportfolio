import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';


function App() {
  return (
    <div className='App'>
      <Navigation />
      <div id = "home">
        <Home />
      </div>
      <div id = "about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
     
    </div>
  );
}

export default App;

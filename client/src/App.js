import React from 'react';
import ClassComponent from './components/ClassComponent';
import GraphStretch from './components/GraphStretch';
import { useDarkMode } from './hooks/useDarkMode';
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useDarkMode('dark');

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <h1>Women's World Cup</h1>
      <button 
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
          >
          Dark Mode
      </button>
      <GraphStretch />
      <ClassComponent />
    </div>
  );
}

export default App;

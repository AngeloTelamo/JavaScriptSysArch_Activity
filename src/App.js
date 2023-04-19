import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './Components/Hello';
import Navigations from './Components/Navigations';




function App() {
  return (
    <div className="App">
      <Navigations/>
      <Hello/>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import IndexRouter from './pages/indexRouter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <IndexRouter />
        </Router>
      </header>
    </div>
  );
}

export default App;

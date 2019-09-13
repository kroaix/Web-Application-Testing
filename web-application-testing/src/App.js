import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [ballCount, setBallCount] = useState(0);
  const [strikeCount, setStrikeCount] = useState(0);

  return (
    <div className="App">
      <CssBaseline />
      <h1>Baseball Scoreboard</h1>
      <Display 
        ballCount={ballCount}
        strikeCount={strikeCount}
      />
      <Dashboard 
        ballCount={ballCount}
        strikeCount={strikeCount}
        setBallCount={setBallCount}
        setStrikeCount={setStrikeCount}
      />
    </div>
  );
}

export default App;

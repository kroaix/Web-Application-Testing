import React, { useState } from 'react';
import { 
  Container, 
  Card, 
  CardHeader,
  CardContent, 
  Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

const useStyles = makeStyles({
  card: {
    marginTop: '20px',
    textAlign: 'center',
  },
});

function App() {
  const classes = useStyles();

  const [ballCount, setBallCount] = useState(0);
  const [strikeCount, setStrikeCount] = useState(0);

  return (
    <Container maxWidth="sm">
      <Card className={classes.card}>
        <CardHeader title="Baseball Scoreboard" />
        <hr/>
        <CardContent>
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
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;

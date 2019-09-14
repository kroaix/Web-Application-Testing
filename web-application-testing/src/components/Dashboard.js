import React from 'react';
import {
  Button,
  CardActions
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  cardActions: {
    textAlign: 'center',
    margin: '20px auto 10px',
    display: 'inline-block'
  },
});

const Dashboard = ({ ballCount, setBallCount, strikeCount, setStrikeCount }) => {
  const ballCountHandler = () => {
    if (ballCount === 3){
      setBallCount(0)
      setStrikeCount(0)
    } else {
      setBallCount(ballCount + 1)
    }
  }

  const strikeCountHandler = () => {
    if (strikeCount === 2){
      setBallCount(0)
      setStrikeCount(0)
    } else {
      setStrikeCount((strikeCount) => strikeCount + 1)
    }
  }

  const foulCountHandler = () => {
    if (strikeCount < 2){
      setStrikeCount(strikeCount + 1)
    }
  }
  
  const hitCountHandler = () => {
    setBallCount(0)
    setStrikeCount(0)
  }
  const classes = useStyles();
  return (
    <CardActions className={classes.cardActions}>
      <Button variant="outlined" color="primary" onClick={ballCountHandler}>Ball <AddIcon fontSize="small" /></Button>
      <Button variant="outlined" color="primary" onClick={strikeCountHandler}>Strike <AddIcon fontSize="small" /></Button>
      <Button variant="outlined" color="primary" onClick={foulCountHandler}>Foul <AddIcon fontSize="small" /></Button>
      <Button variant="outlined" color="primary" onClick={hitCountHandler}>Hit <AddIcon fontSize="small" /></Button>
    </CardActions>
  )
}

export default Dashboard;
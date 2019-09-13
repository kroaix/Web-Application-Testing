import React from 'react';

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

  return (
    <div>
      <button onClick={ballCountHandler}>Balls</button>
      <button onClick={strikeCountHandler}>Strikes</button>
      <button onClick={foulCountHandler}>Fouls</button>
      <button onClick={hitCountHandler}>Hits</button>
    </div>
  )
}

export default Dashboard;
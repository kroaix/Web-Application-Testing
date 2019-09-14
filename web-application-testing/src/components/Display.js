import React from 'react';
import {
  Box,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  box: {
    margin: '0 20px',
  },
});

const Display = ({ballCount, strikeCount}) => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box className={classes.box}>
        <Typography variant="h6">Balls</Typography>
        <Typography variant="h5">{ballCount}</Typography>
      </Box>
      <Box className={classes.box}>
        <Typography variant="h6">Strikes</Typography>
        <Typography variant="h5">{strikeCount}</Typography>
      </Box>
    </Box>
  )
}

export default Display;
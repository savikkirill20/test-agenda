
import React from 'react';
import { makeStyles } from '@material-ui/core';
import styles from './style';

const useStyles = makeStyles(styles);

function HomePage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.hero}>
        
      </div>
    </>
  );
}

export default HomePage;
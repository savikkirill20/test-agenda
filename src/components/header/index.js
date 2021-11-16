
import React from 'react';
import { Container, Button, makeStyles } from '@material-ui/core';
import Link from '../../Link';
import styles from './style';

const useStyles = makeStyles(styles);

export default function Header() {
  const classes = useStyles();

  
  return (
    <Container className={classes.root} maxWidth="xl">
      <div>
        <Link href="/">
          <img src="favicon.ico" alt="Logo" width="40px" />
        </Link>
        <div className={classes.linkPanel}>
          <Link href="/agenda">List</Link>
        </div>
      </div>
    </Container>
  );
}
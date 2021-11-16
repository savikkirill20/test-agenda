import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from '../../Link';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core';
import { getAgenda } from "../../services/service";
import styles from './style';

const useStyles = makeStyles(styles);

const AgendaDetails = () => {
  const classes = useStyles();
  const router = useRouter();

  const [expanded, setExpanded] = useState('panel1');
  const [agenda, setAgenda] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAgenda(router.query.id).then(res => {
      setAgenda(res.data);
      setIsLoading(false);
    });
  }, [router.query.id]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  if (isLoading) {
    return <LinearProgress />;
  } else {
    return (
      <div className={classes.detail}>
        <Link href="/agenda">Go Back</Link>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Agenda details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'span'}>
              <div>Title: {agenda.title}</div>
              <div>Description: {agenda.description}</div>
              <div>Status: {agenda.status}</div>
              <div>Created At: {agenda.created}</div>
              <div>Updated At: {agenda.updated}</div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }

};
export default AgendaDetails;

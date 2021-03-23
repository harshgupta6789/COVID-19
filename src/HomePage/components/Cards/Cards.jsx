import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

// const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
//   if (!confirmed) {
//     return 'Loading...';
//   }
const Info = () => {

  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">Global</Typography>
        <p></p>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={101010}
          lastUpdate={202020}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={11111}
          lastUpdate={11111}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={11111}
          lastUpdate={11111}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;

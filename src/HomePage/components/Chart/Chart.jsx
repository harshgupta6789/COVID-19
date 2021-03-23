import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

// const Chart = ({ data: { confirmed, recovered, deaths }}) => {
const Chart = () => {

  const barChart = (
    <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [100101, 200202, 11111],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${"United States"}` },
        }}
      />
    );

  return (
    <div className={styles.container}>
      { barChart }
    </div>
  );
};

export default Chart;

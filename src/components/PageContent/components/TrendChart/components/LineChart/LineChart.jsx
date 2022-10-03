import { useState } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export default function LineChart({regionalData, stateData, nationalData, startYear, endYear, yAxesText='Percent Change'}) {
    const createYearArray = () => {
      let yearArray = [];
      for (let i = startYear; i <= endYear; i++) {
          yearArray.push(i);
      }
      return yearArray;
  }

  const getTrendData = (jobTotalArray) => {
      let trendDataArray = [];
      for (let i = 0; i < jobTotalArray.length; i++) {
          trendDataArray.push((jobTotalArray[i]-jobTotalArray[0]) / jobTotalArray[0] * 100);
      }
      return trendDataArray;
  }

  const [labels, setLabels] = useState(createYearArray());
  const [data, setData] = useState({
      labels,
      datasets: [
        {
          label: 'Region',
          data: getTrendData(regionalData),
          borderColor: 'rgb(4, 18, 56)',
          backgroundColor: 'rgb(4, 18, 56)',
        },
        {
          label: 'State',
          data: getTrendData(stateData),
          borderColor: 'rgb(5, 48, 176)',
          backgroundColor: 'rgb(5, 48, 176)',
        },
        {
          label: 'Nation',
          data: getTrendData(nationalData),
          borderColor: 'rgb(5, 91, 176)',
          backgroundColor: 'rgb(5, 91, 176)',
        },
      ],
    })

  
  const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
      scales: {
          y: {
              display: true,
              title: {
                  display: true,
                  text: yAxesText,
              }
          },
      }
  };

  return (
    <Line options={options} data={data} />
  )
  }
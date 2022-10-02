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
  
  export default function TrendChart( {trendComparisonData}) {

    const createYearArray = () => {
        let yearArray = [];
        for (let i = trendComparisonData.start_year; i <= trendComparisonData.end_year; i++) {
            yearArray.push(i);
        }
        return yearArray;
    }

    const getTrendData = (jobTotalArray) => {
        let trendDataArray = [];
        for (let i = 0; i < jobTotalArray.length; i++) {
            if (i === 0) {
                trendDataArray.push(0);
                continue;
            }
            trendDataArray.push(jobTotalArray[i] / jobTotalArray[i-1])
        }
        return trendDataArray;
    }

    const [labels, setLabels] = useState(createYearArray());
    const [data, setData] = useState({
        labels,
        datasets: [
          {
            label: 'Region',
            data: getTrendData(trendComparisonData.regional),
            borderColor: 'rgb(4, 18, 56)',
            backgroundColor: 'rgb(4, 18, 56)',
          },
          {
            label: 'State',
            data: getTrendData(trendComparisonData.state),
            borderColor: 'rgb(5, 48, 176)',
            backgroundColor: 'rgb(5, 48, 176)',
          },
          {
            label: 'Nation',
            data: getTrendData(trendComparisonData.nation),
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
                    text: 'Percent Change',
                }
            },
        }
    };

    return (
    <div>
        <h3 className="font-medium">Regional Trends</h3>
        <div className="bg-gray-300 h-0.5 mb-4"></div>
        <Line options={options} data={data} />
    </div>);
  }
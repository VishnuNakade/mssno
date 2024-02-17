// LineChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ timestampData }) => {
  // Extracting timestamps and corresponding battery voltages
  const timestamps = Object.keys(timestampData);
  const batteryVoltages = timestamps.map((timestamp) => timestampData[timestamp].batteryVoltage);

  // Creating the data object for the chart
  const data = {
    labels: timestamps,
    datasets: [
      {
        label: 'Battery Voltage',
        data: batteryVoltages,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
    },
  };

  return (
    <div>
      <h2>Timestamp Data Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;

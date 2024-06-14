import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import axios from 'axios';
const TemperatureChart = ({xAxis,name}) => {
  // const [temp_time]=useState([]);
  const [timeStamp,setTimeStamp]=useState([]);
  useEffect(()=>{
    // console.log(xAxis);
    
    axios.get('http://localhost:3000/api/v1/sensor-data')
    .then(response => {
      // const time_mp=response.data.data.map((d)=>d.timestamp);
      // const dateObjects = time_mp.map(dateString => new Date(dateString));
      
      // console.log(dateObjects);
      // setTimeStamp(dateObjects)

      const length = xAxis.length;
  
      const newArray = Array.from({ length }, (_, index) => index + 1);

      setTimeStamp(newArray)
      
    })
    .catch(error => {
        console.error('Error fetching sensor data:', error);
    });    
  },[])
  return (
    <div><Line
    data={{
      labels: timeStamp,
      datasets: [
        {
          label: name,
          data: xAxis,
          backgroundColor: "#064FF0",
          borderColor: "#064FF0",
        },
        
      ],
    }}
    options={{
      elements: {
        line: {
          tension: 0.5,
        },
      },
      plugins: {
        title: {
          text: `${name}v/s time`,
        },
      },
    }}
  />
  
  </div>
  )
}

export default TemperatureChart
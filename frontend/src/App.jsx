import React, { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios';
import tmp from "./assets/temperature.png"
import humi from "./assets/humidity.png"

function App() {
  const [temperature,setTemperature]=useState(0);
  const [humidity,setHumidity]=useState(0);
  useEffect(() => {
    axios.get('http://localhost:3000/sensor-data')
        .then(response => {
            setTemperature(response.data.temperature);
            setHumidity(response.data.humidity);
            
            // console.log(response.data);
        })
        .catch(error => {
            console.error('Error fetching sensor data:', error);
        });
  }, []);
  
  return (
<div class="flex justify-center items-center mt-[-15rem] mr-10 w-full p-8">
    <div class="bg-blue-200 h-64 rounded-lg p-8 flex justify-center items-center">
        <div class="w-72 m-0 p-0 flex">
          <div className='p-4 mr-0 ml-0'>
          <h2 class="text-3xl font-semibold mb-4 text-black">Temperature</h2>
            <p class="text-xl text-gray-700 ">{temperature}°C</p>
          </div>
            
            <img src={tmp} alt="" width={100} />
        </div>
    </div>
    <div class="bg-green-200 h-64 rounded-lg p-8 flex items-center ml-8">
    <div class="w-72 flex">
          <div className='p-6 mr-0 ml-0'>
          <h2 class="text-3xl font-semibold mb-4 text-black">Humidity</h2>
            <p class="text-xl text-gray-700">{humidity}%</p>
          </div>
            
            <img src={humi} alt="" width={100} />
        </div>
    </div>
</div>




  );
}

export default App;

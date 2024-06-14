import React,{useState,useEffect} from 'react'
import axios from 'axios';
import tmp from "./assets/temperature.png";
import humi from "./assets/humidity.png";
import co2 from "./assets/co2.png";
import ppmm from "./assets/ppm.png"
import Box from './Box';
import TemperatureChart from './TemperatureChart';
const LiveMonitering = () => {
  const [temperature,setTemperature]=useState(0);
  const [humidity,setHumidity]=useState(0);
  const [co2_level,setCO2]=useState(0);
  const [ppm,setPpm]=useState(0);
  const [tempArr,setTemp]=useState([]);

const [humidiArr,setHumidi]=useState([]);
const [co2Arr,setCo2]=useState([]);
const [ppmArr,setPpmArr]=useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/sensor-data/top')
        .then(response => {
            setTemperature(response.data.data[0].temperature);
            setHumidity(response.data.data[0].humidity);
            setCO2(response.data.data[0].co2_level);
            setPpm(response.data.data[0].ppm);
        })
        .catch(error => {
            console.error('Error fetching sensor data:', error);
        });

        axios.get('http://localhost:3000/api/v1/sensor-data')
        .then(response => {
            // console.log(dataa);
            const tmp_mp=response.data.data.map((d)=> d.temperature);
            setTemp(tmp_mp);
            
            // console.log(time_mp,tmp_mp);

            const humi_mp=response.data.data.map((d)=>d.humidity);

            setHumidi(humi_mp);

            const co2_mp=response.data.data.map((d)=>d.co2_level);
            setCo2(co2_mp);

            const ppm_mp=response.data.data.map((d)=>d.ppm);
            setPpmArr(ppm_mp);

            // console.log(ppm_mp,co2_mp,humi_mp,time_mp,tmp_mp);
        })
        .catch(error => {
            console.error('Error fetching sensor data:', error);
        });
  }, []);
  return (
    
    <>
    <div className="flex justify-center items-center mt-[-2rem] ml-32 mr-10 w-full p-8">
      <div className='p-4'>
      <Box name="Temperature" val={temperature} imgg={tmp} unit="°C"/>
      </div>
    
    <div className='p-4'>
    <Box name="Humidity" val={humidity} imgg={humi} unit="%"/>
    </div>
    
    
</div>
<div className="flex justify-center items-center mt-[-2rem] ml-32 mr-10 w-full p-8">
      <div className='p-4 mr-24'>
     <TemperatureChart xAxis={tempArr} name="Temperature"/>
      </div>
    
    <div className='p-4'>
    <TemperatureChart xAxis={humidiArr} name="Humidity" />
    </div>
    
    
</div>
<div className="flex justify-center items-center mt-[-4rem] ml-32 mr-10 w-full p-8">
  <div  className='p-4'>
    <Box  name="Co2 Level" imgg={co2} val={co2_level} unit="ppm"/>
  </div>
    
    <div className='p-4 '>
    <Box name="Particulate Matter" val={ppm} imgg={ppmm} unit ="µg/m³"/>
    </div>
    
   
    
</div>

<div className="flex justify-center items-center mt-[-2rem] ml-32 mr-10 w-full p-8">
      <div className='p-4 mr-24'>
        
     <TemperatureChart xAxis={co2Arr}  name="Co2 Level"/>
      </div>
    
    <div className='mr-4 pr-4'>
    <TemperatureChart xAxis={ppmArr} name="Particulate Matter"/>
    </div>
    
    
</div>

    
    </>
  )
}

export default LiveMonitering
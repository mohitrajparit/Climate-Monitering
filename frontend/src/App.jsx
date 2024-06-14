import React, { useEffect,useState } from 'react';
import './App.css';
import LiveTime from './LiveTime';
import LiveMonitering from './LiveMonitering';
function App() {
  
  
  return (<>
      {/* clock */}
      <div className=" flex flex-col   bg-gray-800 ml-[16rem] w-[45rem]">
      <LiveTime /> 
    </div>
    {/* data  */}
    <LiveMonitering/>
  
  </>
  );
}

export default App;

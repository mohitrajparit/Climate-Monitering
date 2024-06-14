import React from 'react'

const Box = ({name,imgg,val,unit}) => {
  return (
    <div className="bg-blue-200 h-64 rounded-lg p-8 flex justify-center items-center">
        <div className="w-72 m-0 p-0 flex">
          <div className='p-4 mr-0 ml-0'>
          <h2 className="text-3xl font-semibold mb-4 text-black">{name}</h2>
            <p className="text-xl text-gray-700 ">{val}{unit}</p>
          </div>
            
            <img src={imgg} alt="" width={100} />
        </div>
    </div>
  )
}

export default Box
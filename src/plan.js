import React from 'react'

const Plan = (props) =>{
  return(
    <>
      <div className="mb-2 flex justify-between items-center p-2 shadow-xl shadow-black bg-white rounded">
      <li className=' list-none text-xl'>{props.value}</li>
      <button className="px-3 py-1 bg-red-700" onClick={() => {props.sendData(props.id)}}>X</button>
        </div>
    </>
  )
}

export default Plan;
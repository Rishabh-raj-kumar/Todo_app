import React from 'react'

const Plan = (props) =>{
  return(
    <>
      <div className="flex justify-between p-2">
      <li>{props.value}</li>
      <button className="px-3 py-1 bg-red-700" onClick={() => {props.sendData(props.id)}}>X</button>
        </div>
    </>
  )
}

export default Plan;
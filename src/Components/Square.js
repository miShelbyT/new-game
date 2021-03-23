import React from 'react'


function Square({value, onClick}) {


  return (
    <button className="square" onClick={() => onClick()}> 
    {/* also acceptable, either pass REFERENCE to function, or wrap in a thunk: onClick={props.onClick} */}
      {value}
    </button>
  )

}

export default Square
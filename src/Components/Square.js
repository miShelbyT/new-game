import React from 'react'


function Square(props) {


  return (
    <button className="square" onClick={() => props.onClick()}> 
    {/* also acceptable, either pass REFERENCE to function, or wrap in a thunk: onClick={props.onClick} */}
      {props.value}
    </button>
  )

}

export default Square
import React, { useState } from 'react'
import Square from './Square'
import { Button } from 'semantic-ui-react'

function Board() {

  // TODO create/display scorecard/history for 💎s vs 🧁s

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [status, setStatus] = useState('Next player: ' + (xIsNext ? '💎' : '🧁'))
  const [wins, setWins] = useState({'💎': 0, '🧁': 0})
  // working on scorecard


  // function passes Square component and props
  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  }


  // look for tic tac toe winner via arrays below!
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function determineStatus(i) {
    const winner = calculateWinner(squares);
    const updatedSquares = squares.slice()
    if (winner) {
      setStatus('We Have A Winner!!! Congrats to ' + winner);
      
      alert('Congrats to ' + winner)
    } else if (!updatedSquares.includes(null)) {
      alert("There is no winner this time. Please try again!")
    } else {
      setStatus('Next player: ' + (xIsNext ? '🧁' : '💎'));
    }
  }

  function handleClick(i) {
    determineStatus()
    setXIsNext(!xIsNext)
    const updatedSquares = squares.slice()
    // console.log("what is this:", calculateWinner(updatedSquares))
    // console.log("and what is this:", updatedSquares[i])
    // if one of the below conditions return a value (i.e., are not null), then we return/exit
    if (calculateWinner(updatedSquares) || updatedSquares[i]) return
    updatedSquares[i] = xIsNext ? '💎' : '🧁'
    setSquares(updatedSquares)
  }

  function handleRefresh() {
    setSquares((Array(9).fill(null)))
    setXIsNext(true)
    setStatus('Next player: 💎')
  }


  return (
    <div className='board'>
      <div className="status" style={{ fontSize: 24 }}>{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <br></br>
      <Button color='blue' onClick={handleRefresh}>
        Start A New Game!
      </Button> <br></br><br></br>
    <div className="status" style={{ fontSize: 24, border: 'solid grey 1px', padding: "0.5em" }}>
      Score Card <br></br>
      <p className="players">
      💎: <br></br>
      🧁:
        </p>
    </div>
    </div>
  );



}


export default Board

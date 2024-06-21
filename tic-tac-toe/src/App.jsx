
import { useState } from 'react';
import './App.css'


// wining cases

function calculateWinner(square){
  const winningCombination=[
    
    // horizontal
    [0,1,2],
    [3,4,5],
    [6,7,8],

    //vertical
    [0,3,6],
    [1,4,7],
    [2,5,8],

    //diagonal
    [0,4,8],
    [2,4,6],
  ];

    for(let i =0 ;i<winningCombination.length ; i++){
      const [a,b,c]=winningCombination[i];

      if(square[a] && square[a]===square[b] && square[a]===square[c] ){
        return square[a];
      }
    };
    return null;
}


function Square({ value, onSquareClick }) {





  return <button onClick={onSquareClick}
    className='square'>{" "}{value}{" "}</button>;
}

function Board() {


  const [square, setSquare] = useState(Array(9).fill(null));

  const[xisNext, setXisNext]=useState(true);


  function handleClick(i) {
    
    
    // creating copy of the squre state
    if(square[i]  || calculateWinner(square)) return ;
    const updatedSquares=square.slice();

    if(xisNext){
      updatedSquares[i]='X';
    }else{
      updatedSquares[i]='O';
    }

    setXisNext(!xisNext);

    setSquare(updatedSquares);
  }

  const winner=calculateWinner(square);
  let status;

  if(winner){
    status=`Winner is ${winner}`;
  }else{
    status=`Next player is ${xisNext  ? 'X' :'O'}`
  }
  return (
    <>
      
      <div className='status'>{status}</div>
      <div className='board-Row'>

        <Square value={square[0]} onSquareClick={() => handleClick(0)} />
        <Square value={square[1]} onSquareClick={() => handleClick(1)} />
        <Square value={square[2]} onSquareClick={() => handleClick(2)} />


      </div>
      <div className='board-Row'>

        <Square value={square[3]} onSquareClick={() => handleClick(3)} />
        <Square value={square[4]} onSquareClick={() => handleClick(4)} />
        <Square value={square[5]} onSquareClick={() => handleClick(5)} />


      </div>
      <div className='board-Row'>

        <Square value={square[6]} onSquareClick={() => handleClick(6)} />
        <Square value={square[7]} onSquareClick={() => handleClick(7)} />
        <Square value={square[8]} onSquareClick={() => handleClick(8)} />


      </div>




    </>
  );
}
function App() {


  return (

    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      {/* <div className='Ayush'>Made By Ayush Luthra</div> */}
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>


  )
}

export default App

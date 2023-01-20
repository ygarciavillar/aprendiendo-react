import { useState } from "react";
import { Board } from "./components/Board";
import { Square } from "./components/Square";
import { ModalResultGame } from "./components/ModalResultGame";
import { TURNS } from "./constants";
import { checkWinner, checkEndGame } from "./logic/board";
import confetti from 'canvas-confetti';

function App() {

  const [board, setBoard] = useState(
    localStorage.getItem('board') 
    ? JSON.parse(localStorage.getItem('board'))
    :Array(9).fill(null));

  const [actualTurn, setActualTurn] = useState(
    localStorage.getItem('turn') || TURNS.X
  );

  const [winner, setWinner] = useState(null);

  const updateBoard = function(index) {
    
    if(board[index]) return;
    
    board[index] = actualTurn;
    const updateBoard = [...board];
    const newTurn = actualTurn === TURNS.X ? TURNS.O : TURNS.X;
    setActualTurn(newTurn);
    setBoard(updateBoard);

    localStorage.setItem('board', JSON.stringify(updateBoard ));
    localStorage.setItem('turn', newTurn);

    const newWinner = checkWinner(updateBoard);
    if(newWinner){
      confetti();
      setWinner(newWinner);
      return;
    }
  
    if(checkEndGame(updateBoard)){
      setWinner(false);
      return;
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setActualTurn(TURNS.X);
    setWinner(null);
    localStorage.removeItem('board');
    localStorage.removeItem('turn');

  }

 
   
  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame} className='button'>Reset Game</button>
      <section className="game">
        <Board board={board} updateBoard={updateBoard}></Board>
      </section>

      <section className="turn">
         <Square isSelected={actualTurn ===TURNS.X }>{TURNS.X}</Square>
         <Square isSelected={actualTurn ===TURNS.O }>{TURNS.O}</Square>
      </section>

       <ModalResultGame winner={winner} resetGame={resetGame}></ModalResultGame>

     
    </main>
    
  )
}

export default App

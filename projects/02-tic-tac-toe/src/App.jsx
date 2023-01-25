import { useState } from 'react'
import { Board } from './components/Board'
import { Square } from './components/Square'
import { ModalResultGame } from './components/ModalResultGame'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board'
import confetti from 'canvas-confetti'

function Game () {
  const [history, setHistory] = useState(
    window.localStorage.getItem('board')
      ? JSON.parse([window.localStorage.getItem('board')])
      : [Array(9).fill(null)])

  const [actualTurn, setActualTurn] = useState(
    window.localStorage.getItem('turn') || TURNS.X
  )

  const currentBoard = history[history.length - 1]

  const [winner, setWinner] = useState(null)

  const handlePlay = function (board) {
    const newWinner = checkWinner(board)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
      return
    }
    if (checkEndGame(board)) {
      setWinner(false)
      return
    }
    const newTurn = actualTurn === TURNS.X ? TURNS.O : TURNS.X
    const currentBoard = [...history, board]
    setActualTurn(newTurn)
    setHistory(currentBoard)

    window.localStorage.setItem('board', JSON.stringify(currentBoard))
    window.localStorage.setItem('turn', newTurn)
  }

  const resetGame = () => {
    setHistory([Array(9).fill(null)])
    setActualTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const moves = history.map((board, index) => {
    let description
    if (index > 0) {
      description = 'Go to move#' + description
    } else {
      description = 'Go to game start'
    }
    return (
      <li key={index}>
        <button>{description}</button>
      </li>
    )
  })

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame} className='button'>Reset Game</button>
      <section className='game'>
        <Board actualTurn={actualTurn} board={currentBoard} onPlay={handlePlay} />
      </section>

      <section className='turn'>
        <Square isSelected={actualTurn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={actualTurn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <ModalResultGame winner={winner} resetGame={resetGame} />

      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </main>

  )
}

export default Game

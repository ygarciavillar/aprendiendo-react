import { Square } from './Square'
import { checkWinner } from '../logic/board'

export const Board = ({ actualTurn, board, onPlay }) => {
  function handelClick (index) {
    if (board[index] || checkWinner(board)) {
      return
    }
    board[index] = actualTurn
    const updateBoard = [...board]
    onPlay(updateBoard)
  }

  return (
    board.map((square, index) => {
      return (
        <Square key={index} index={index} onSquareClick={() => handelClick(index)}>
          {square}
        </Square>
      )
    })
  )
}

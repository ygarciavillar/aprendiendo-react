import { Square } from './Square'

export const ModalResultGame = ({ winner, resetGame }) => {
  if (!winner) return

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{
              winner === false
                ? 'Empate'
                : 'Ganó'
              }
        </h2>
        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame} className='button'>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}

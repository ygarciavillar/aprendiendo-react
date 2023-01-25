export function Square ({ children, isSelected, onSquareClick }) {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  return (
    <div className={className} onClick={onSquareClick}>
      {children}
    </div>
  )
}

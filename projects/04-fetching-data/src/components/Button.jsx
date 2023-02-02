const Button = ({ name, isActive, handleClick }) => {
  return (
    <button className={isActive ? 'isActive' : ''} onClick={handleClick}>{name}</button>
  )
}

export default Button

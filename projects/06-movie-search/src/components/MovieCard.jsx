export function MovieCard ({ movie }) {
  return (
    <div className='movieCard'>
      <div className='cardDescription'>
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
      </div>
      <img src={movie.poster} alt={movie.title} />
    </div>
  )
}

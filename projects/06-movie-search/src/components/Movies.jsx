import { MovieCard } from './MovieCard'

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <MovieList movies={movies} />
      : <NoMoviesResults />
  )
}

function NoMoviesResults () {
  return (
    <p>No movies found for this search</p>
  )
}

function MovieList ({ movies }) {
  return (
    <ul className='movieList'>
      {movies.map(movie => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      )
      )}
    </ul>
  )
}

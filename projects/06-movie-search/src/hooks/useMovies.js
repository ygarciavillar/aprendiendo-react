import { useState, useMemo } from 'react'
import { searchMovies, searchMoviesPromises } from '../services/movie.js'

export function useMovies ({ sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const getMovies = async (query) => {
    try {
      setLoading(true)
      const newMovies = await searchMovies(query)
      setMovies(newMovies)
    } catch (error) {

    } finally {
      setLoading(false)
    }
  }

  // const getMovies = (query) => {
  //   searchMoviesPromises(query).then(
  //     newMovies => setMovies(newMovies)
  //   )
  // }

  const sortedMovies = useMemo(() => {
    console.log('memoSortedMovies')
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}

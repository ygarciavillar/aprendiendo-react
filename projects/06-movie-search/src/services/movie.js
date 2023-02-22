import { API_SEARCH_URL } from '../constants.js'
import withResults from '../mock/search-results.json'
import noResults from '../mock/search-no-result.json'

// With Async/Await
export const searchMovies = async (query) => {
  if (!query) {
    return null
  }

  try {
    const movieResult = await fetch(`${API_SEARCH_URL}${query}`)
    const json = await movieResult.json()
    const movies = json?.Search
    return mapMovies(movies)
  } catch (error) {
    throw Error('Some occurs in the search')
  }
}

// With Promises
export const searchMoviesPromises = (query) => {
  if (!query) {
    return null
  }

  return fetch(`${API_SEARCH_URL}${query}`)
    .then(resp => resp.json())
    .then(json => {
      const movies = json?.Search
      return mapMovies(movies)
    })
    .catch(error => console.log(error))
}

function mapMovies (responseMovies) {
  return responseMovies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
}

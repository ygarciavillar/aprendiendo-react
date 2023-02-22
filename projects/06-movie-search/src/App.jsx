
import { useState } from 'react'
import './App.css'

import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { useDebounce } from './hooks/useDebounce'

function App () {
  const [sort, setSort] = useState(false)
  const { error, handleSearch, search } = useSearch()
  const { movies, getMovies, loading } = useMovies({ sort })
  const { debounce } = useDebounce()

  const moviesDebounce = debounce(getMovies, 1000)

  const handleSubmit = (event) => {
    event.preventDefault()
    const { query } = Object.fromEntries(new window.FormData(event.target))
    if (query !== search) {
      getMovies(query)
    }
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    handleSearch(newQuery)
    moviesDebounce(newQuery)
  }

  return (
    <div className='App'>
      <header>
        <h1>Movie Search</h1>
        <form onSubmit={handleSubmit}>
          <input name='query' onChange={handleChange} placeholder='Avatar, Avenger, The Matrix..' />
          <button type='submit'>Search</button>
        </form>
        {error && (
          <p style={{ color: 'red' }}>{error}</p>
        )}
        {loading && (
          <p>Searching...</p>
        )}
      </header>
      <div>
        <label htmlFor='sort'>Sort</label>
        <input type='checkbox' name='sort' onChange={() => setSort(!sort)} checked={sort} />
      </div>
      <main>
        <Movies movies={movies} />
      </main>

    </div>
  )
}

export default App

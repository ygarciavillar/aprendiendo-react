import { useState, useRef } from 'react'

export function useSearch () {
  const searchRef = useRef('')
  const [error, setError] = useState(null)

  const handleSearch = (query) => {
    searchRef.current = query
    if (query === '') {
      setError("The input search can't be empty")
      return
    }
    if (query.length < 3) {
      setError('The search text should be at least of 3 characters')
    } else {
      setError('')
    }
  }
  return { error, handleSearch, search: searchRef.current }
}

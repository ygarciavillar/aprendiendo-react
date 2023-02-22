import { useRef } from 'react'

export function useDebounce () {
  const timeoutRef = useRef(null)

  function debounce (func, duration) {
    return function (...args) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        func.apply(this, args)
      }, duration)
    }
  }

  return { debounce }
}

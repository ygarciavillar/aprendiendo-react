
import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button'
import CONFIG from './config'
import fetchItems from './fetchData'

function App () {
  const [resource, setResource] = useState(CONFIG.USER_ENDPOINT)
  const [result, setResult] = useState()

  useEffect(() => {
    fetchItems({ url: `${CONFIG.API_URL}/${resource}` })
      .then(data => setResult(data))
  }, [])

  useEffect(() => {
    fetchItems({ url: `${CONFIG.API_URL}/${resource}` })
      .then(data => setResult(data))
  }, [resource])

  const handleClick = (e) => {
    const textButton = e.target.innerHTML
    setResource(textButton)
  }

  return (
    <main>
      <header>
        <Button name={CONFIG.USER_ENDPOINT} isActive={CONFIG.USER_ENDPOINT === resource} handleClick={handleClick} />
        <Button name={CONFIG.POST_ENDPOINT} isActive={CONFIG.POST_ENDPOINT === resource} handleClick={handleClick} />
        <Button name={CONFIG.COMMENT_ENDPONT} isActive={CONFIG.COMMENT_ENDPONT === resource} handleClick={handleClick} />
      </header>
      <section>
        {result &&
          <p>{JSON.stringify(result)}</p>}

      </section>

    </main>

  )
}

export default App

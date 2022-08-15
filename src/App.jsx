import { useEffect } from 'react'
import './index.css'

const API_URL = 'http://www.omdbapi.com?apikey=adc9f17d'

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    // console.log(data)
    console.log(data.Search)
  }

  useEffect(() => {
    searchMovies('Spiderman')
  }, [])

  return (
    <>
      <h1>Hello React!!!</h1>
    </>
  )
}

export default App

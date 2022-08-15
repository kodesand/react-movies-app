import { useEffect } from 'react'
import './index.css'
import SearchIcon from './search.svg'

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
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          type=''
          placeholder='Search Movies'
          value='Superman'
          onchange={() => {}}
        />
        <img src={SearchIcon} alt='search' onClick={() => {}} />
      </div>
    </div>
  )
}

export default App

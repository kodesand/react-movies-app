import { useEffect, useState } from 'react'
import './index.css'
import SearchIcon from './search.svg'
import MovieCard from './components/MovieCard'

const API_URL = 'http://www.omdbapi.com?apikey=adc9f17d'

const movie1 = {
  Title: 'Italian Spiderman',
  Year: '2007',
  imdbID: 'tt2705436',
  Type: 'movie',
  Poster: 'N/A',
}

const App = () => {
  const [movie, setMovie] = useState([])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
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

      {movies.length > 0 ? (
        <div className='container'>
          <MovieCard movie1={movie1} />
        </div>
      ) : (
        <div className='empty'>
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  )
}

export default App

import { useEffect } from 'react'
import './index.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=adc9f17d'

const movie1 = {
  Title: 'Italian Spiderman',
  Year: '2007',
  imdbID: 'tt2705436',
  Type: 'movie',
  Poster: 'N/A',
}

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

      <div className='container'>
        <div className='movie'>
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img src={'https://via.placeholder.com/400'} alt={movie1.Title} />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

import { useEffect } from 'react'
import './index.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=adc9f17d'

const movie1 = {
  Title: 'Italian Spiderman',
  Year: '2007',
  imdbID: 'tt2705436',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg',
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
      <div className='container'></div>
    </div>
  )
}

export default App

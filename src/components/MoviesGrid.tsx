import { useEffect, useState } from 'react'
import MovieCard, { Movies } from './MovieCard'
import axios from 'axios'

const MoviesGrid = () => {
  const [movies, setMovies] = useState<Movies[]>([])

  useEffect(() => {
    loadMovies()
  }, [])

  const loadMovies = async () => {
    try {
      const res = await axios.get('/data/movies.json')
      const data = res?.data as Movies[]
      console.log({ data })
      setMovies(data)
    } catch (error) {
      throw new Error(`There was an error fetching movies: ${error}`)
    }
  }

  if (!movies.length) {
    return (
      <div className='spinner'>
        <div className='spinner-dot1'></div>
        <div className='spinner-dot2'></div>
      </div>
    )
  }

  return (
    <div className='movies-grid'>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MoviesGrid

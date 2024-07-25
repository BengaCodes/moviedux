import { ChangeEvent, useEffect, useState } from 'react'
import MovieCard, { Movies } from './MovieCard'
import Input from './Input'
import Select from './Select'

type MoviesGridProps = {
  movies: Movies[]
  toggleWatchlist: (movie: Movies) => void
}

const MoviesGrid = ({ movies, toggleWatchlist }: MoviesGridProps) => {
  const [filteredMovies, setFilteredMovies] = useState<Movies[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [genre, setGenre] = useState('All Genres')
  const [rating, setRating] = useState('All Ratings')

  useEffect(() => {
    if (searchTerm && movies.length) {
      setFilteredMovies(() => {
        const filteredMovies = movies.filter((movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        return filteredMovies
      })
    }
    if (genre === 'All Genres') {
      setFilteredMovies(movies)
    }
  }, [searchTerm, movies.length, genre])

  useEffect(() => {
    if (genre !== 'All Genres' && !filteredMovies.length) {
      setFilteredMovies(() => {
        const filteredMovies = movies.filter((movie) => movie.genre === genre)
        return filteredMovies
      })
    } else if (genre !== 'All Genres' && filteredMovies.length) {
      setFilteredMovies((prevMovies) => {
        const filteredMovies = prevMovies.filter(
          (movie) => movie.genre === genre
        )
        return filteredMovies
      })
    }
    if (rating !== 'All Ratings' && !filteredMovies.length) {
      setFilteredMovies(() => {
        const filteredMovies = movies.filter((movie) => movie.rating === rating)
        return filteredMovies
      })
    } else if (rating !== 'All Ratings' && filteredMovies.length) {
      setFilteredMovies((prevMovies) => {
        const filteredMovies = prevMovies.filter(
          (movie) => movie.rating === rating
        )
        return filteredMovies
      })
    }
  }, [genre, rating, filteredMovies.length])

  const handleMovieSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleGenreFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setGenre(e.target.value)
  }

  const handleRatingFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setRating(e.target.value)
  }

  if (!movies.length) {
    return (
      <div className='spinner'>
        <div className='spinner-dot1'></div>
        <div className='spinner-dot2'></div>
      </div>
    )
  }

  const genreOptions = movies.map((movie) => ({
    value: movie.genre,
    option: movie.genre
  }))
  const uniqueGenreOptions = new Set(
    genreOptions.map((option) => JSON.stringify(option))
  )
  const outputGenreOptions = Array.from(uniqueGenreOptions).map((option) =>
    JSON.parse(option)
  )

  const ratingOptions = movies.map((movie) => ({
    value: movie.rating,
    option: movie.rating
  }))
  const uniqueRatingOptions = new Set(
    ratingOptions.map((option) => JSON.stringify(option))
  )
  const outputRatingOptions = Array.from(uniqueRatingOptions).map((option) =>
    JSON.parse(option)
  )

  return (
    <div>
      <Input
        label='Search Movies'
        id='movies'
        type='text'
        onChange={handleMovieSearch}
        value={searchTerm}
      />

      <div className='filter-bar'>
        <div className='filter-slot'>
          <Select
            options={outputGenreOptions}
            label='Genre'
            id='genre'
            value={genre}
            onChange={handleGenreFilter}
            defaultOption='All Genres'
          />
        </div>
        <div className='filter-slot'>
          <Select
            options={outputRatingOptions}
            label='Rating'
            id='ratings'
            value={rating}
            onChange={handleRatingFilter}
            defaultOption='All Ratings'
          />
        </div>
      </div>

      <div className='movies-grid'>
        {filteredMovies?.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            toggleWatchlist={toggleWatchlist}
          />
        ))}
      </div>
    </div>
  )
}

export default MoviesGrid

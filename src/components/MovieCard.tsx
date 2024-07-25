import { SyntheticEvent } from 'react'
import Input from './Input'

export type Movies = {
  id: number
  title: string
  image: string
  genre: string
  rating: string
  isWatchlist: boolean
}

export type MovieCardProps = {
  movie: Movies
  toggleWatchlist: (movie: Movies) => void
}

const MovieCard = ({ movie, toggleWatchlist }: MovieCardProps) => {
  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    target.src = 'images/default.jpg'
  }

  const getRatingClass = (rating: string): string => {
    const ratingNumber = +rating
    switch (true) {
      case ratingNumber >= 8:
        return 'rating-good'
      case ratingNumber >= 5 && ratingNumber < 8:
        return 'rating-ok'
      default:
        return 'rating-bad'
    }
  }

  return (
    <div
      className='movie-card'
      onClick={() => toggleWatchlist(movie)}
      style={{ cursor: 'pointer' }}
    >
      <img
        src={`images/${movie?.image}`}
        alt={movie?.title}
        onError={handleImageError}
      />
      <div className='movie-card-info'>
        <h3 className='movie-card-title'>{movie?.title}</h3>
        <div>
          <span className='movie-card-genre'>{movie?.genre}</span>
          <span
            className={`movie-card-rating ${getRatingClass(movie?.rating)}`}
          >
            {movie?.rating}
          </span>
        </div>
        <label className='switch'>
          <Input
            type='checkbox'
            label=''
            id='watchlist'
            checked={movie?.isWatchlist}
          />
          <span className='slider'>
            <span className='slider-label'>
              {movie?.isWatchlist ? 'In Watchlist' : 'Add to watchlist'}
            </span>
          </span>
        </label>
      </div>
    </div>
  )
}

export default MovieCard

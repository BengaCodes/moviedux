import { SyntheticEvent } from 'react'

export type Movies = {
  id: number
  title: string
  image: string
  genre: string
  rating: string
}

export type MovieCardProps = {
  movie: Movies
}

const MovieCard = ({ movie }: MovieCardProps) => {
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
    <div className='movie-card'>
      <img
        src={`images/${movie?.image}`}
        alt={movie?.title}
        onError={handleImageError}
      />
      <div className='movie-card-info'>
        <h3 className='movie-card-title'>{movie?.title}</h3>
        <p className='movie-card-genre'>{movie?.genre}</p>
        <p className={`movie-card-rating ${getRatingClass(movie?.rating)}`}>
          {movie?.rating}
        </p>
      </div>
    </div>
  )
}

export default MovieCard

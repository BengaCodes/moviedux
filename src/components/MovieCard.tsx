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
  return (
    <div className='movie-card'>
      <img src={`images/${movie?.image}`} alt={movie?.title} />
      <div className='movie-card-info'>
        <h3 className='movie-card-title'>{movie?.title}</h3>
        <p className='movie-card-genre'>{movie?.genre}</p>
        <p className='movie-card-rating'>{movie?.rating}</p>
      </div>
    </div>
  )
}

export default MovieCard

import MovieCard, { Movies } from './MovieCard'

type WatchlistProps = {
  watchlist: Movies[]
  toggleWatchlist: (movie: Movies) => void
}

const Watchlist = ({ watchlist, toggleWatchlist }: WatchlistProps) => {
  return (
    <div>
      <h1 className='title'>Your Watchlist</h1>
      <div className='movies-grid'>
        {watchlist.map((movie) => (
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

export default Watchlist

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import MoviesGrid from './components/MoviesGrid'
import Watchlist from './components/Watchlist'
import { useEffect, useState } from 'react'
import { Movies } from './components/MovieCard'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const [movies, setMovies] = useState<Movies[]>([])
  const [watchlist, setWatchlist] = useState<Movies[]>([])

  useEffect(() => {
    loadMovies()
  }, [])

  const loadMovies = async () => {
    try {
      const res = await axios.get('/data/movies.json')
      const data = res?.data as Movies[]
      setMovies(data)
    } catch (error) {
      throw new Error(`There was an error fetching movies: ${error}`)
    }
  }

  const toggleWatchlist = (movie: Movies) => {
    setWatchlist((prevWatchlist) => {
      const movieExists = prevWatchlist.some((m) => m.id === movie.id)
      if (!movieExists) {
        toast.success(`${movie.title} added to your watchlist!`, {
          position: 'top-right',
          icon: false,
          theme: 'colored',
          autoClose: 3000
        })
        setMovies((prevMovies) =>
          prevMovies.map((m) =>
            m.id === movie.id ? { ...m, isWatchlist: true } : m
          )
        )
        return [...prevWatchlist, { ...movie, isWatchlist: true }] as Movies[]
      }
      toast.error(`${movie.title} removed from your watchlist!`, {
        position: 'top-right',
        icon: false,
        theme: 'colored',
        autoClose: 3000
      })
      return prevWatchlist.filter((m) => m.id !== movie.id)
    })
  }

  return (
    <Router>
      <Header />
      <ToastContainer />
      <div className='app'>
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <MoviesGrid movies={movies} toggleWatchlist={toggleWatchlist} />
              }
            />
            <Route
              path='/watchlist'
              element={
                <Watchlist
                  watchlist={watchlist}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  )
}

export default App

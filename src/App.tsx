import Footer from './components/Footer'
import Header from './components/Header'
import MoviesGrid from './components/MoviesGrid'

const App = () => {
  return (
    <div className='app'>
      <div className='container'>
        <Header />
        <MoviesGrid />
      </div>
      <Footer />
    </div>
  )
}

export default App

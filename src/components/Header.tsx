import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/watchlist'>Watchlist</Link>
          </li>
          {/* <li></li> */}
        </ul>
      </nav>
      <img
        src={logo}
        alt='moviedux logo with a duck and a popcorns'
        className='logo'
      />
      <h2 className='app-subtitle'>
        It's time for popcorn! Find your next movie here
      </h2>
    </header>
  )
}

export default Header

import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className='header'>
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

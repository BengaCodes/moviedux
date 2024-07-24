import { useEffect, useState } from 'react'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getUTCFullYear()
  )

  useEffect(() => {
    setCurrentYear(new Date().getUTCFullYear())
  }, [])

  return (
    <footer className='footer'>
      <p className='footer-text'>
        &copy; {currentYear} Moviedux, All rights reserved
      </p>
    </footer>
  )
}

export default Footer

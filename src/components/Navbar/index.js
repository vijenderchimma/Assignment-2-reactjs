// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => {
  const toggleTheme = () => {}

  return (
    <ThemeContext.Consumer>
      <div>
        <Link to="/" className="nav-link">
          <img src="" className="" alt="" />
        </Link>
        <div>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </div>
        <button type="button" className="button" onClick={toggleTheme}>
          <img src="" className="" alt="" />
        </button>
      </div>
    </ThemeContext.Consumer>
  )
}
export default Navbar

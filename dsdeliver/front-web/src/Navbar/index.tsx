import './styles.css';
import { ReactComponent as LogoNavbar } from './logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="main-navbar">
      <LogoNavbar />
      <Link to="/" className="logo-text">DS Deliver</Link>
    </nav>
  )
}

export default Navbar;
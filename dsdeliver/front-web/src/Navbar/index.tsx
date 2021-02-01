import './styles.css';
import { ReactComponent as LogoNavbar } from './logo.svg';

function Navbar() {
  return (
    <nav className="main-navbar">
      <LogoNavbar />
      <a href="home" className="logo-text">DS Deliver</a>
    </nav>
  )
}

export default Navbar;
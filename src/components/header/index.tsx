import './header.modules.css';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="C-header">
      <nav className="C-header_nav">
        <Link to="/" className="C-header_link logo">
          Dev Shop
        </Link>
        
        <Link to="/cart" className="C-header_link cart_link">
          <FiShoppingCart size={28} color="#2894dbdd"/>
          <span>2</span>
        </Link>
      </nav>
    </header>
  )
}

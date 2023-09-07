import './header.modules.css';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartcontext/cartcontext';


export default function Header() {

  const { cartAmount } = useContext(CartContext);

  return (
    <header className="C-header">
      <nav className="C-header_nav">
        <Link to="/" className="C-header_link logo">
          Dev Shop
        </Link>
        
        <Link to="/cart" className="C-header_link cart_link">
          <FiShoppingCart size={28} color="#2894dbdd"/>
          {cartAmount > 0 && (
            <span>{cartAmount}</span>
          )}
        </Link>
      </nav>
    </header>
  )
}

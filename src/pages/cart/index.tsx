import './cart.modules.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cartcontext/cartcontext';

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <main className="C-main">
      <h1>Meu carrinho</h1>

      <section className="C-cart">

        {cart.length === 0 && (
          <section className="C-cart__is_empty">
            <p>Seu carrinho está vazio...</p>
            <Link to="/">
              Ver todos os produtos
            </Link>
          </section>
        )}

        {cart.length !== 0 && cart.map((item) => (
          <section className="C-cart_details"key={item.id}>
            <img className="C-cart_img" src={item.cover} alt={item.title} />

            <p className="C-cart_price">Preço: {item.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}</p>

            <div className="C-cart_control_quantity">
              <span>-</span>
              <p>{item.amount}</p>
              <span>+</span>
            </div>

            <p className="C-cart_subtotal">Subtotal: {item.total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}</p>
          </section>
        ))}

        {cart.length !== 0 && (
          <p className="C-cart_total">Total: R$ 1.000,00</p>
        )}

      </section>
    </main>
  )
}

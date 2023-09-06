import './cart.modules.css';

export default function Cart() {
  return (
    <main className="C-main">
      <h1>Meu carrinho</h1>

      <section className="C-cart">
  
        <section className="C-cart_details">
          <img className="C-cart_img" src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/g/pgk-p432vn-rgb0100110.jpg" alt="" />
  
          <p className="C-cart_price">Preço: R$ 1.000,00</p>

          <div className="C-cart_control_quantity">
            <span>-</span>
            <p>1</p>
            <span>+</span>
          </div>

          <p className="C-cart_subtotal">Subtotal: R$ 1.000,00</p>
        </section>

        <section className="C-cart_details">
          <img className="C-cart_img" src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/g/pgk-p432vn-rgb0100110.jpg" alt="" />
  
          <p className="C-cart_price">Preço: R$ 1.000,00</p>

          <div className="C-cart_control_quantity">
            <span>-</span>
            <p>1</p>
            <span>+</span>
          </div>

          <p className="C-cart_subtotal">Subtotal: R$ 1.000,00</p>
        </section>

        <p className="C-cart_total">Total: R$ 1.000,00</p>
      </section>
    </main>
  )
}

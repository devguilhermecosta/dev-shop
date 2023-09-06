import './home.modules.css';
import { BsCart } from 'react-icons/bs';

export default function Home() {
  return (
    <main className="C-main">
      <h1 className="C-main__title">Produtos em alta</h1>

      <section className="C-products">

        <section className="C-product">
          <div className="C-product_c_img">
            <img src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/g/pgk-p432vn-rgb0100110.jpg" alt="teclado" />
          </div>
          <div className="C-product_details">
            <h2>Nome do produto</h2>
            <p>
              R$ 150,00
              <span><BsCart size={20} color="#ffffff"/></span>
            </p>
          </div>
        </section>
  
      </section>
    </main>
  )
}

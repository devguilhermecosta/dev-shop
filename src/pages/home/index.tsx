import './home.modules.css';
import { BsCart } from 'react-icons/bs';
import { api } from '../../services/api';
import { useState, useEffect } from 'react';

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }

    getProducts();

  }, [])

  return (
    <main className="C-main">
      <h1 className="C-main__title">Produtos em alta</h1>

      <section className="C-products">

        {products.map((product) => (
          <section className="C-product" key={product.id}>
            <div className="C-product_c_img">
              <img src={product.cover} alt={product.title} />
            </div>
            <div className="C-product_details">
              <h2>{product.title}</h2>
              <p>
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                })}
                <span><BsCart size={20} color="#ffffff"/></span>
              </p>
            </div>
          </section>
        ))}
  
      </section>
    </main>
  )
}

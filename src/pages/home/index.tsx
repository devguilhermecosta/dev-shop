import './home.modules.css';
import { BsCart } from 'react-icons/bs';
import { api } from '../../services/api';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cartcontext/cartcontext';
import toast from 'react-hot-toast';

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export default function Home() {
  const { handleAddItem } = useContext(CartContext);
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }

    getProducts();

  }, [])

  function handleAddCartItem(product: ProductProps) {
    toast.success('Produto adicionado com sucesso', {
      style: {
        backgroundColor: '#000000',
        color: '#f1f1f1',
      }
    })
    handleAddItem(product);
  }

  return (
    <main className="C-main">
      <h1 className="C-main__title">Produtos em alta</h1>

      <section className="C-products">

        {products.map((product) => (
          <section className="C-product" key={product.id}>
            <div className="C-product_c_img">
              <Link to={`/product/details/${product.id}`}>
                <img src={product.cover} alt={product.title} />
              </Link>
            </div>
            <div className="C-product_details">
              <h2>{product.title}</h2>
              <p>
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                })}
                <span>
                  <BsCart
                    size={20} 
                    color="#ffffff" 
                    onClick={() => (handleAddCartItem(product))} 
                  />
                </span>
              </p>
            </div>
          </section>
        ))}
  
      </section>
    </main>
  )
}

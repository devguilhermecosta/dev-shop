import { BsCart } from 'react-icons/bs';
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../contexts/cartcontext/cartcontext';
import { useParams, useNavigate } from 'react-router-dom';
import Style from './detail.module.css';
import { api } from '../../services/api';
import { ProductProps } from '../home';
import toast from 'react-hot-toast';

export default function Detail() {
  const { id } = useParams();
  const { handleAddItem } = useContext(CartContext);
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductProps>();

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }

    getProduct();

   }, [id])

   function handleAddCartItem(product: ProductProps) {
    toast.success('Produto adicionado com sucesso', {
      style: {
        backgroundColor: '#000000',
        color: '#f1f1f1',
      }
    })
    handleAddItem(product);
    navigate("/cart");
  }

  return (
    <main className={Style.C_product_details}>
    {product && (
      <>
        <div className={Style.C_product_details_cover}>
          <img src={product?.cover} alt={product?.title} />
        </div>
        <div className={Style.C_product_details_description}>
          <h1>{product?.title}</h1>
          <p>{product?.description}.</p>
          <div className={Style.C_product_details_price}>
            <span>{product?.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}
            </span>
            <span>
              <BsCart
                size={20} 
                color="#ffffff"
                onClick={() => handleAddCartItem(product)}
              />
            </span>
          </div>
        </div>
      </>
    )}
    </main>
  )
}
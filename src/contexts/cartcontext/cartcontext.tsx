import { createContext, ReactNode, useState } from 'react';
import { ProductProps } from '../../pages/home';

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  handleAddItem: (product: ProductProps) => void;
}

interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartPrivderProps {
  children: ReactNode;
}


export const CartContext = createContext({} as CartContextData);


export default function CartProvider({ children }: CartPrivderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);

  function handleAddItem(newItem: ProductProps) {
    const itemIndex = cart.findIndex(item => item.id === newItem.id);
    /*
      Verifica se o item já está no carrinho.
      Se estiver, soma a quantidade do item já existente.
      Se não estiver, cria um novo item no carrinho.
    */
    if (itemIndex !== -1) {
      const cartItem = cart[itemIndex];
      cartItem.amount += 1;
      cartItem.total = cartItem.price * cartItem.amount;

      return
    }

    // se não estiver no carrinho, adicionamos um novo item;
    const data = {
      ...newItem,
      amount: 1,
      total: newItem.price
    }

    setCart([...cart, data]);
  }

  return (
    <CartContext.Provider value={
      { 
        cart,
        cartAmount: cart.length,
        handleAddItem
      }
      }>
      {children}
    </CartContext.Provider>
  )
}

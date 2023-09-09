import { createContext, ReactNode, useState } from 'react';
import { ProductProps } from '../../pages/home';

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  handleAddItem: (product: ProductProps) => void;
  handleRemoveItemCart: (product: ProductProps) => void;
  total: string;
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
  const [totalCart, setTotalCart] = useState("");

  function handleAddItem(newItem: ProductProps) {
    const cartList = cart;
    const itemIndex = cartList.findIndex(item => item.id === newItem.id);
    /*
      Verifica se o item já está no carrinho.
      Se estiver, soma a quantidade do item já existente.
      Se não estiver, cria um novo item no carrinho.
    */
    if (itemIndex !== -1) {
      const cartItem = cartList[itemIndex];
      cartItem.amount += 1;
      cartItem.total = cartItem.price * cartItem.amount;

      setCart(cartList);
      calcTotalCart(cartList);

      return
    }

    // se não estiver no carrinho, adicionamos um novo item;
    const data = {
      ...newItem,
      amount: 1,
      total: newItem.price
    }

    setCart(products => [...products, data]);
    calcTotalCart([...cart, data]);
  }

  function handleRemoveItemCart(product: ProductProps) {
    const itemIndex = cart.findIndex(item => item.id === product.id);

    if (cart[itemIndex]?.amount > 1) {
      const cartList = cart;
      const itemCart = cartList[itemIndex];
      itemCart.amount -= 1;
      itemCart.total = itemCart.amount * itemCart.price;
      setCart(cartList);
      calcTotalCart(cartList);
      return
    }

    const removeItem = cart.filter(item => item.id !== product.id);

    setCart(removeItem);
    calcTotalCart(removeItem);
  }

  function calcTotalCart(items: CartProps[]) {
    const cartItens = items;
    const total = cartItens.reduce((acc, item) => {return acc + item.total}, 0);
    setTotalCart(total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    }))
  }

  return (
    <CartContext.Provider value={
      { 
        cart,
        cartAmount: cart.length,
        handleAddItem,
        handleRemoveItemCart,
        total: totalCart
      }
      }>
      {children}
    </CartContext.Provider>
  )
}

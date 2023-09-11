import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './App';
import { RouterProvider } from 'react-router-dom';
import CartProvider from './contexts/cartcontext/cartcontext';
import { Toaster } from 'react-hot-toast';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <Toaster/>
      <RouterProvider router={router}/>
    </CartProvider>
  </React.StrictMode>,
)

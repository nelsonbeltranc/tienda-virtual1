import React from 'react';
import { useCart } from '../context/CartContext'; // Asegúrate de que esta ruta sea correcta
import styles from '../styles/Carrito.module.css'; // Crearemos este archivo de estilos

function Carrito() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (cart.length === 0) {
    return <div className={styles.emptyCart}>Tu carrito está vacío</div>;
  }

  return (
    <div className={styles.cartContainer}>
      <h1>Tu Carrito</h1>
      {cart.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <img src={item.image} alt={item.name} className={styles.itemImage} />
          <div className={styles.itemDetails}>
            <h3>{item.name}</h3>
            <p>Precio: ${item.price}</p>
            <div className={styles.quantityControl}>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
          </div>
          <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>
            Eliminar
          </button>
        </div>
      ))}
      <div className={styles.cartSummary}>
        <h2>Total: ${calculateTotal()}</h2>
        <button onClick={clearCart} className={styles.clearCartButton}>Vaciar Carrito</button>
        <button className={styles.checkoutButton}>Proceder al Pago</button>
      </div>
    </div>
  );
}

export default Carrito;
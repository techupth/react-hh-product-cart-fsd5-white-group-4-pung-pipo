import "./App.css";
import products from "./data/products";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    const updatedCart = [...cartItems];

    const existingItem = updatedCart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCartItems(updatedCart);
  }

  function removeFromCart(itemId) {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== itemId);
    setCartItems(updatedCart);
  }

  return (
    <div className="App">
      <h1 className="product-heading">Products</h1>
      <section className="product-container">
        {products.map((item, index) => (
          <div className="product-list" key={item.id}>
            <div className="product">
              <img src={item.image} alt="sample name" />
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <button onClick={() => addToCart(item)}>Add to cart</button>
            </div>
          </div>
        ))}
      </section>
      <hr />

      <section className="cart">
        <h1 className="cart-heading">Cart (Total Price is x Baht)</h1>
        <div className="cart-item-list">
          {cartItems.map((cartItem) => (
            <div className="cart-item" key={cartItem.id}>
              <h1>Item name: {cartItem.name}</h1>
              <h2>
                Price: {Number(cartItem.price) * Number(cartItem.quantity)} Baht
              </h2>
              <h2>Quantity: {cartItem.quantity}</h2>
              <button
                onClick={() => removeFromCart(cartItem.id)}
                className="delete-button"
              >
                x
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;

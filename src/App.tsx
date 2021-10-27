import React, { useContext } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { CartContext } from "./Providers/cart";
import { ProductsContext } from "./Providers/Products";

function App() {
  const { products } = useContext(ProductsContext);
  const { cart, addProduct, deleteProduct } = useContext(CartContext);

  return (
    <div>
      <h1>Produtos</h1>
      <div className="App">
        {products.map((product) => (
          <div className="Align">
            <Card
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            />
            <button onClick={() => addProduct(product)}>
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
      <h1>Carrinho</h1>
      <div className="App">
        {cart.map((product) => (
          <div className="Align">
            <Card
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            />
            <button onClick={() => deleteProduct(product)}>
              remover do carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

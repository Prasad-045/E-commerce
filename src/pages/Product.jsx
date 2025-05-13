import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find(p => p.id === parseInt(id));

  return (
    <div className="container-fluid my-5 px-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid my-5 px-4y" alt={product.name} />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>${product.price.toFixed(2)}</h4>
          <button className="btn btn-success mt-3" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

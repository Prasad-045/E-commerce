import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!product) {
    return <p className="text-center mt-5">Product not found.</p>;
  }

  return (
    <div className="container my-5">
      {/* Back Button */}
      <button className="btn btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="row">
        <div className="col-md-6 text-center">
          <img src={product.image} alt={product.name} className="img-fluid" style={{ maxHeight: "400px", objectFit: "contain" }} />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">{product.category}</p>
          <h4>${product.price}</h4>
          <p>{product.description}</p>
          <button className="btn btn-success" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

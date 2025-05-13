import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="d-flex justify-content-center align-items-center" style={{ height: '250px', overflow: 'hidden' }}>
          <img
            src={product.image}
            alt={product.title}
            className="card-img-top"
            style={{ objectFit: 'cover', maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
        <div className="card-body d-flex flex-column text-center">
          <h6 className="card-title">{product.title}</h6>
          <p className="card-text fw-bold">${product.price}</p>
          <div className="mt-auto d-flex flex-column gap-2">
            <Link to={`/product/${product.id}`} className="btn btn-outline-primary btn-sm">
              View Details
            </Link>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

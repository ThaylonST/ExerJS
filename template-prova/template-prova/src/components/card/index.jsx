import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import "./styles.css";

export function Card({ coffeeImg, tags, title, description }) {
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div id="card">
      <img src={coffeeImg} alt={title} id="coffeeImg" />
      <div className="tags-container">
        {tags.map((tag, index) => (
          <div className="tag" key={index}>
            <span>{tag}</span>
          </div>
        ))}
      </div>

      <h1>{title}</h1>
      <p className="description">{description} </p>

      <div id="details">
        <div className="price">
          <p>
            R$ <strong>9,90</strong>
          </p>
        </div>

        <div id="quantityButtons">
          <button type="button" onClick={decrementQuantity}>
            -
          </button>
          <span>{quantity}</span> {}
          <button type="button" onClick={incrementQuantity}>
            +
          </button>
        </div>

        <button type="button" className="shoppingBtn">
          <ShoppingCart color="#F3F2F2" fill="#F3F2F2" size={20} />
        </button>
      </div>
    </div>
  );
}

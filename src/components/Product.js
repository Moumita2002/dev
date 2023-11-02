import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import './style.css';


const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <div className="card">
      <figure>
        <img src={image} alt={name} />
        <figcaption className="caption">{category}</figcaption>
      </figure>

      <div className="card-data">
        <div className="card-data-flex">
          <h3>{name}</h3>
          <p className="card-data--price">{<FormatPrice price={price} />}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;

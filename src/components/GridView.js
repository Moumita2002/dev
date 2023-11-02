import React from "react";
import Product from "./Product";
import './style.css';


const GridView = ({ products }) => {
  return (
    <div className="section">
      <div className="container grid grid-three-column">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};



export default GridView;

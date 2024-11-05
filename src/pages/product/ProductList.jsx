import React from "react";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import data from "../data";


const Product = ({ id, title, price, img, description }) => {
  return (
    <Link to={`product/${id}`} className="w-72 bg-slate-100 shadow transition-all hover:shadow-xl p-5">
      <div className="mx-auto w-full flex justify-center">
        <img src={img} alt={title} className="w-1/3" />
      </div>
      <div>
        <h2 className="text-3xl my-3">{title}</h2>
        <TextTruncate line={3} element="p" truncateText="..." text={description} />
        <p className="mt-1">Price: {price}</p>
      </div>
    </Link>
  );
};
const ProductList = () => {
  // console.log(data);

  return (
    <div className="grid md:grid-cols-4 grid-cols-1 place-items-center my-10 gap-10 md:mx-20">
      {data.map((pr) => (
        <Product
          key={pr.id} // Add key prop here
          id={pr.id}
          title={pr.title}
          price={pr.price}
          img={pr.img}
          description={pr.description}
        />
      ))}
    </div>
    
  );
};

export default ProductList;

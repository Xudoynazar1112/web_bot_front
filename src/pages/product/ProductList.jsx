import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import axios from "axios";

const Product = ({ id, title, price, img, description }) => {
  return (
    <Link
      to={`product/${id}`}
      className="w-72 bg-slate-100 shadow transition-all hover:shadow-xl p-5"
    >
      <div className="mx-auto w-full flex justify-center">
        <img src={img} alt={title} className="w-full" />
      </div>
      <div>
        <h2 className="text-3xl my-3">{title}</h2>
        <TextTruncate
          line={3}
          element="p"
          truncateText="..."
          text={description}
        />
        <p className="mt-1">Price: {price}</p>
      </div>
    </Link>
  );
};
const ProductList = () => {
  const [realData, setRealData] = useState([]);

  useEffect(() => {
    axios
      .get("https://web-bot-back.onrender.com/api/")
      ?.then((res) => setRealData(res.data))
      .catch((error) => console.error(error));
  }, []); // Empty dependency array ensures the API call happens only once

  console.log(realData);
  
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 place-items-center my-10 gap-10 md:mx-20">
      {realData?.map((pr) => (
        <Product
          key={pr.id} // Add key prop here
          id={pr.id}
          title={pr.name}
          price={pr.price}
          img={pr.photo}
          description={pr.description}
        />
      ))}
    </div>
  );
};

export default ProductList;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [realData, setRealData] = useState([]);

  useEffect(() => {
    axios
      .get("https://web-bot-back.onrender.com/api/")
      ?.then((res) => setRealData(res.data))
      .catch((error) => console.error(error));
  }, []); // Empty dependency array ensures the API call happens only once

  const id = useParams();
  const item = realData?.find((d) => d.id == id.id);
  console.log(realData);

  return (
    <div className="flex justify-between items-center gap-12 place-items-center md:mx-20 mx-10 bg-slate-100 rounded-xl p-5">
      <div className="md:w-1/3 w-full">
        <img src={item?.photo} className='w-full' alt="product image" />
      </div>
      <div className="md:w-2/3">
        <h2 className="md:text-3xl text-xl mb-5">{item?.name}</h2>
        <span>Narxi: {item?.price}so'm</span>
        <p className="mt-3">{item?.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;

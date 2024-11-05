import data from '../data';
import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const id = useParams()
  const item = data.find((d) => d.id == id.id);  
  
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-12 place-items-center md:mx-20 mx-10 bg-slate-100 rounded-xl p-5'>
      <div className='md:w-1/2 w-full'>
        <img src={item.img} className='w-full' alt="product image" />
      </div>
      <div className='md:w-1/2'>
        <h2 className='md:text-3xl text-xl mb-5'>{item.title}</h2>
        <span>Narxi: {item.price}so'm</span>
        <p className='mt-3'>{item.description}</p>
      </div>
    </div>
  )
}

export default ProductDetail
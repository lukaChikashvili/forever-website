import React, { useState } from 'react'
import Product from './Product';

const Products = () => {
 
     const products = [
          {
            title: "Forever Essence",
            img: ''
          },

          {
               title: "Perpetual Perfume",
               img: ''
             },

             {
               title: "Timeless Aroma",
               img: ''
             },

             {
               title: "Everlasting Scen",
               img: ''
             }

     ];

     const [modalState, setModalState] = useState({active: false, index: 0});


  return (
    <div className='products-page'>
          {products.map((product, index) => {
               return <Product key = {index} index = {index} title = {product.title} setModalState = {setModalState} />
          })}

    </div>
  )
}

export default Products
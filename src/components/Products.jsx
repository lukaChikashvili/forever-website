import React, { useState } from 'react'
import Product from './Product';
import Modal from './Modal';
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
import four from '../assets/four.png';
const Products = () => {
 
     const products = [
          {
            title: "Forever Essence",
            img: one,
            color: "white"
          },

          {
               title: "Perpetual Perfume",
               img: two,
               color: "white"
               
             },

             {
               title: "Timeless Aroma",
               img: three,
               color: "white"
             },

             {
               title: "Everlasting Scen",
               img: four,
               color: "white"
             }

     ];

     const [modalState, setModalState] = useState({active: false, index: 0});


  return (
    <div className='products-page'>
     <span className='product-span'>Products</span>
          {products.map((product, index) => {
               return <Product key = {index} index = {index} title = {product.title} setModalState = {setModalState} />
          })}

    <Modal modal = {modalState} products = {products} />
    </div>
  )
}

export default Products
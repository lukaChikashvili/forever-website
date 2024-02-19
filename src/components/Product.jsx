import React from 'react'



export default function Product({title, index, setModalState}) {
  return (
    <div className='product' onMouseEnter={() => {setModalState({active: true, index})}} onMouseLeave={() => {setModalState({active: false, index})}}>
     <h2>{title}</h2>
    </div>
  )
}

import { Facebook, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='header'>
       <div className="logo">
          <h2>Forever+</h2>
       </div>

       <nav>
          <ul>
               <li><a href = "#">Home</a></li>
               <li><a href = "#">About</a></li>
               <li><a href = "#">Products</a></li>
               <li><a href = "#">More</a></li>
          </ul>
       </nav>


       <div className="icons">
          <label>
         Contacts
          </label>
         <Facebook />
         <Instagram />
         <Linkedin />
       </div>
    </div>
  )
}

export default Header
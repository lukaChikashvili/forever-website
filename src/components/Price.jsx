import React from 'react'
import {DollarSign} from 'lucide-react';

const Price = () => {
  return (
    <div className='price-container'>
     <div className="price-title">
          <h2>Choose your favorite plan to become the member of the <span>Forever+</span></h2>
     </div>

     <div className="plans">
          <div className="plan">
              <span>Forever free</span>
              <div className='price-tag'>
              <label>0</label>
               <DollarSign className='price-icon'/>
               </div>
            <ul>
              <li>Age Restriction </li>
              <li>Single Purchase Limit </li>
              <li>Identity Verification </li>
              <li>Non-Transferable </li>
            </ul>
               <button>Get free plan</button>
          </div>


          <div className="plan">
              <span>Forever standard</span>
              <div className='price-tag'>
              <label>150</label>
               <DollarSign className='price-icon'/>
               </div>
            <ul>
              <li>Exclusive Access </li>
              <li>Product Updates </li>
              <li>Member Discounts </li>
              <li>Early Access to Events </li>
            </ul>
               <button>Get standard plan</button>
          </div>


          <div className="plan">
              <span>Forever premium</span>
              <div className='price-tag'>
              <label>1500</label>
               <DollarSign className='price-icon'/>
               </div>
            <ul>
              <li>VIP Events Access </li>
              <li>Limited Edition Collectibles</li>
              <li>Customized Perfume Experience </li>
              <li>Exclusive Discounts and Offers </li>
            </ul>
               <button>Get premium plan</button>
          </div>
     </div>
    </div>
  )
}

export default Price
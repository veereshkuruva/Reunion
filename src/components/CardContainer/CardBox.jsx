import React from 'react'
import { useSelector } from 'react-redux'
import Cards from '../Cards/Cards'
import './cardbox.css'

const CardBox = () => {
    const cartItems =useSelector((state)=>state.cartSlice.cartItems)

    const filtered_data = useSelector((state)=>state.cartSlice.filtered_data)
    console.log(filtered_data)
 
  return (
    <div className='card-box'>
         {
        filtered_data.length===0 ?
          cartItems.map((ele)=>{
                return (
                 
                    <Cards key={ele.id} ele = {ele}/>
                   
                )
               
            }) :
            filtered_data.map((ele)=>{
              return (
                <Cards ele={ele}  key={ele.id} />
              )
            })
      }
    </div>
  )
}

export default CardBox
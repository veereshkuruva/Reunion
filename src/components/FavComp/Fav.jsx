import React from 'react'
import { useSelector } from 'react-redux'
import Cards from '../Cards/Cards'

import './fav.css'

const Fav = () => {
    
    const Emptycart =useSelector((state)=>state.cartSlice.EmptyCart)
    console.log(Emptycart)
   
  return (
    <div className='fav'>
        {
            Emptycart.map((ele)=>{
                return(
                    <Cards ele={ele}/>

                )
            })
        }
       
    </div>
  )
}

export default Fav
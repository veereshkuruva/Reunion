import React,{useState} from 'react'
import './card.css'
import { BiHome } from "react-icons/bi";
import { FaGratipay, FaBath } from "react-icons/fa";
import { AiFillUsb } from "react-icons/ai";
import './card.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/Cart/cartSlice';



const Cards = ({ ele }) => {
    const dispatch = useDispatch()
    // console.log(ele)
    const { id, price, location } = ele
    const [like,setLike] = useState(false);

 
    const clickHandler = (params) => {
        if(like){
          setLike(false)
        }else{
          setLike(true)
        }
        dispatch(addToCart(params))
      }


    return (
        <>
            <div className='card'>

                <img src='https://thearchitectsdiary.com/wp-content/uploads/2022/03/foresight-associates-19.jpg' className='card-image' />
                <div className='container' key={ele.id}>
                    <div className='sub-div'>
                        <h1 key={ele.id}></h1>
                        <h3 style={{ "color": "blue" }}>{ele.price}</h3>
                        <div className="card-like"onClick={()=>clickHandler(ele)} style={{color:like?"red":"blue"}} >
                        <i class="fa fa-sharp fa-solid fa-heart"></i>
                    </div>

                    </div>
                   
                    <div className='location_details'>
                        <h4 className='title'>{ele.location}</h4>
                        <p>2699 Green Valley,Highland Lake,FL</p>

                    </div>
                    <div className='icons'>
                        <span><BiHome style={{ "fontSize": "20px" }} />200/sq</span>
                        <span><FaBath style={{ "fontSize": "20px" }} />2bathrooms</span>
                        <span><AiFillUsb style={{ "fontSize": "20px" }} />2bhk</span>
                    </div>

                    {/* <button className='btn' onClick={() => clickHandler(ele)}>Add Favorate</button> */}
                </div>

            </div>
        </>
    )
}

export default Cards;
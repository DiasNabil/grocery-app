import { CartContext } from '../Context/CartContext'
import './Products.scss'
import { useContext, useState } from 'react'

export default function AddToCartButton({isClicked, product}){
    const [quantity, setQuantity] = useState(0)
    const {cart, setCart} = useContext(CartContext)

    function handleClick(string){
        if(string === 'plus'){
            setQuantity(prev => quantity + 1)
            console.log(product)
            //setCart(prev => {return {...cart, product}})
        }else{
            if(quantity > 0)
                setQuantity(prev => quantity - 1)
                console.log(product)
        }
    }

    function cartButton(){
        if(!isClicked){
            if(quantity > 0){
                return quantity
            }else return '+'
        }else return '+'
    }


    return(
        <button  className='addToCart'>
                <span className={!isClicked ? 'none' : null} onClick= {()=>handleClick('minus')}>-</span>
                <span className={!isClicked ? 'none' : null}>{quantity}</span>
                <span className={!isClicked ? 'cartButton' : null} onClick= {()=>handleClick('plus')}>{cartButton()}</span> 
        </button>
    )
}
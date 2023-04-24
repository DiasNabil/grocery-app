import './Products.scss'
import { useState } from 'react'

export default function AddToCartButton({isClicked}){
    const [quantity, setQuantity] = useState(0)

    function handleQuant(string){
        if(string === 'plus'){
            setQuantity(prev => quantity + 1)
        }else{
            if(quantity > 0)
                setQuantity(prev => quantity - 1)
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
                <span className={!isClicked ? 'none' : null} onClick= {()=>handleQuant('minus')}>-</span>
                <span className={!isClicked ? 'none' : null}>{quantity}</span>
                <span className={!isClicked ? 'cartButton' : null} onClick= {()=>handleQuant('plus')}>{cartButton()}</span> 
        </button>
    )
}
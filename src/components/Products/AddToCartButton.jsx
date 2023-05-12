import { addToCart } from '../../../functions'
import { CartContext } from '../Context/CartContext'
import './Products.scss'
import { useContext, useState, useEffect } from 'react'


export default function AddToCartButton({isClicked, product}){
    const {cart, setCart} = useContext(CartContext)
    const [isAdded , setAdded] = useState(false)
    const [quantity, setQuantity] = useState(initializeQuantity)//marche pas >:() regarder video tuto indien 

    function initializeQuantity(){
        let cartData = localStorage.getItem('jaimetous-cart')
        cartData = cartData !== null ? JSON.parse(cartData) : null
        
        if(cartData){
            let productInCart = cartData.products.find(p => product.id == p.id)

            if(productInCart){
                return productInCart.quantity
            }else return 0
        }else return 0 
    }


    function handleClick(string){
        if(string === 'plus'){
            setQuantity(prev => quantity + 1)
            setAdded(true)
        }else{
            if(quantity > 0){
                setQuantity(prev => quantity - 1)
                setAdded(true)
            }
        }
    }

    useEffect(()=>{
        if(isAdded){
            addToCart(product, quantity, setCart)
            setAdded(false)
        }
    }, [isAdded])


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
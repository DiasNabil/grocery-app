
import { findKey, updateQuantity } from '../../../functions'
import { CartContext } from '../Context/CartContext'
import './AddToCart.scss'
import { useContext} from 'react'


export default function AddToCartButton({isClicked, product}){
    const {cart, setInput} = useContext(CartContext)
    let quantity = cart ? updateQuantity(cart , findKey(product, cart)):0

    async function handleClick(string){
        if(string === 'plus'){
            let toAdd = {
                "productId": product.id
            }
            setInput({"data" : toAdd , "mutation" : "add", 'id': product.id})
    
        }else{
            if(quantity > 0){
                let toSubstract = [
                    {
                        "key": findKey(product, cart),
                        "quantity" : quantity - 1
                    }
                ]
                setInput({"data" : toSubstract , "mutation" : "substract", 'id': product.id})
            }
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
        <button className='addToCart'>
                <span className={!isClicked ? 'none' : null} onClick= {()=>handleClick('minus')}>-</span>
                <span className={!isClicked ? 'none' : null}>{quantity}</span>
                <span className={!isClicked ? 'cartButton' : null} onClick= {()=>handleClick('plus')}>{cartButton()}</span> 
        </button>
    )
}
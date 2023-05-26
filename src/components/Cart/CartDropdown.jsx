import { useContext } from 'react'
import './Cart.scss'
import { CartContext } from '../Context/CartContext'
import CartItems from './CartItems'

export default function CartDropDown({toggleCart , setToggleCart}){
    const {cart} = useContext(CartContext)
    const itemsInCart = cart ? cart.products : []


    return (
        <div className={`filter ${toggleCart && 'displayed'}`} /**onClick={()=>{setToggleCart(false)}}*/>
            <div className={`cart-dropdown-container ${toggleCart && 'slide'}`}>
                <div className="cart-dropdown-navbar">
                    <h3>Panier</h3>
                    <i className='bx bx-x' onClick={()=>{setToggleCart(false)}}></i>
                </div>
                <div className="total">
                    <p>Total: </p>
                    <span>{cart ? cart.total : '0'} KMF</span>
                </div>
                
                <CartItems  items={itemsInCart}/>
                {
                    itemsInCart.length > 0 ? 
                    <button className='cartButton'>Valider mon panier</button> :
                    <button className='cartButton' onClick={()=>{setToggleCart(false)}}>Commencer mes achats</button>
                }
            </div>
        </div>
    )
}
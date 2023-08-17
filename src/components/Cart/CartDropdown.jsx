import { useContext } from 'react'
import './Cart.scss'
import { CartContext } from '../Context/CartContext'
import CartItems from './CartItems'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

export default function CartDropDown({toggleCart , setToggleCart}){
    const {cart} = useContext(CartContext)
    const itemsInCart = cart ? cart.products : []
    const navigate = useNavigate()
    const{Desktop, Mobile} = useContext(AppContext)

    const cartDesktop = 
        <div className={`filter ${toggleCart && 'displayed'}`}>
            <div className={`cart-dropdown-container ${toggleCart && 'cart-slide'}`}>
                <div className="cart-dropdown-navbar">
                    <h3>Panier</h3>
                    <i className='bx bx-x' onClick={()=>{setToggleCart(false)}}></i>
                </div>
                <div className="total">
                    <p>Total: </p>
                    <span>{cart ? cart.total : '0'} KMF</span>
                </div>
                
                {<CartItems  items={itemsInCart}/>}
                {
                    itemsInCart.length > 0 ? 
                    <button className='cartButton' onClick={()=> navigate('/checkout')}>Valider mon panier</button> :
                    <button className='cartButton' onClick={()=>{setToggleCart(false)}}>Commencer mes achats</button>
                }
            </div>
        </div>

    const cartMobile = 
        <div className={`cart-dropdown-container cart-mobile ${toggleCart && 'cart-slide'}`}>
            <div className="cart-dropdown-navbar">
                <h3>Panier</h3>
                <i className='bx bx-x' onClick={()=>{setToggleCart(false)}}></i>
            </div>
            <div className="total">
                <p>Total: </p>
                <span>{cart ? cart.total : '0'} KMF</span>
            </div>
            
            {<CartItems  items={itemsInCart}/>}
            {
                itemsInCart.length > 0 ? 
                <button className='cartButton' onClick={()=> navigate('/checkout')}>Valider mon panier</button> :
                <button className='cartButton' onClick={()=>{setToggleCart(false)}}>Commencer mes achats</button>
            }
        </div>


    return (
        <>
        <Desktop>{cartDesktop}</Desktop>
        <Mobile>{cartMobile}</Mobile>
        </>
    )
}
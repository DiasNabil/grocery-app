import './Navbar.scss'

export default function CartIcon({cart}){
    
    return ( 

        <div className='cart-icon-container'>
            <i className='bx bx-cart-alt cart'></i>
            {cart && <span>{cart.length}</span>}
        </div>
    )
}
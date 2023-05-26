import './Navbar.scss'

export default function CartIcon({cart}){
    
    let cartNumber = cart && cart.products.length 
    return ( 

        <div className='cart-icon-container'>
            <i className='bx bx-cart-alt cart'></i>
            {cartNumber > 0 && <span>{cartNumber}</span>}
        </div>
    )
}
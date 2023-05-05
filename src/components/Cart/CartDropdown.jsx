import './Cart.scss'

export default function CartDropDown({toggleCart , setToggleCart}){



    return (
        <div className={`filter ${toggleCart && 'displayed'}`} onClick={()=>{setToggleCart(false)}}>
            <div className={`cart-dropdown-container ${toggleCart && 'slide'}`}>
                <div className="cart-dropdown-navbar">
                    <h3>Panier</h3>
                    <i className='bx bx-x' onClick={()=>{setToggleCart(false)}}></i>
                </div>
                <div className="total">
                    <p>Total: </p>
                    <span>0.00 KMF</span>
                </div>
                <div className="cart-items">
                    <p className="empty">Votre Panier est vide</p>
                </div>
                <button onClick={()=>{setToggleCart(false)}}>Commencer mes achats</button>
            </div>
        </div>
    )
}
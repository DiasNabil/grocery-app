
import { Fragment, useContext } from 'react'
import './Cart.scss'
import { findKey, getItemsInCart } from '../../../functions'
import { CartContext } from '../Context/CartContext'
import { AppContext } from '../Context/AppContext'
import AddToCartLoader from '../AddToCart/AddToCartLoader'
import AddToCartButton from '../AddToCart/AddToCartButton'



export default function CartItems({items}){

    const {products} = useContext(AppContext)
    const {setInput, cart} = useContext(CartContext)

    let itemInCartDetails = getItemsInCart(products, cart)

    const itemsInCart = itemInCartDetails.map(item=>{

        if(item){

            function handleClick(){
                let toRemove = [
                    {
                        "key": findKey(item, cart),
                        "quantity" : 0
                    }
                ]
                setInput({"data" : toRemove , "mutation" : "remove", 'id': item.id})
            }
    
            return (
                <Fragment key={item.id}>
                    <div className='itemInCart'>
                        <div className='box-img'>
                            <div onClick={handleClick} className='delete-item'><i className='bx bx-x-circle'></i></div>
                            <img src={item.image}/>
                            <AddToCartLoader className='cartLoader' id={item.id}/>
                        </div>
                        <div className='item-details'>
                            <div className='item-left'>
                                <h3>{item.name}</h3>
                                <p>prix unitaire:   <span>{item.price} KMF</span></p>
                            </div>
                            <div className='item-right'>
                                <p>{item.total} KMF</p>
                                <AddToCartButton isClicked={true} product={item} />
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                </Fragment>
            )
        }
    })

    const noItem = <p className="empty">Votre panier est vide</p>

    return (
        <div className="cart-items">
            {items.length > 0 ? itemsInCart : noItem }
        </div>
    )
}
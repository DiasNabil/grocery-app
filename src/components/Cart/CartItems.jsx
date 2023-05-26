
import { Fragment, useContext } from 'react'
import './Cart.scss'
import AddToCartButton from '../Products/AddToCartButton'
import { findKey } from '../../../functions'
import { CartContext } from '../Context/CartContext'
import { AppContext } from '../Context/AppContext'



export default function CartItems({items}){

    const itemsInCart = items.map(item=>{
        const itemId = item.product.node.databaseId
        const itemTotal = item.total
        

        const {products} = useContext(AppContext)
        const {removeToCart ,input , setInput, cart} = useContext(CartContext)

        item = products.find(product => itemId == product.id)
        item.total = itemTotal

        function handleClick(){
            let toRemove = [
                {
                    "key": findKey(item, cart),
                    "quantity" : 0
                }
            ]
            setInput({"data" : toRemove , "mutation" : "remove"})
        }

        return (
            <Fragment key={item.id}>
                <div className='itemInCart'>
                    <div className='box-img'>
                        <div onClick={handleClick} className='delete-item'><i className='bx bx-x-circle'></i></div>
                        <img src={item.image}/>
                    </div>
                    <div className='item-details'>
                        <div className='item-left'>
                            <h3>{item.name}</h3>
                            <p>prix unitaire: {item.price} KMF</p>
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
    })

    const noItem = <p className="empty">Votre panier est vide</p>

    return (
        <div className="cart-items">
            {items.length > 0 ? itemsInCart : noItem }
        </div>
    )
}
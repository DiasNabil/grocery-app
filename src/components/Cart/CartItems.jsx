
import AddToCartButton from '../Products/AddToCartButton'
import './Cart.scss'


export default function CartItems({items}){
    const itemsInCart = items.map(item=>{
        return (
            <>
                <div className='itemInCart'>
                    <div className='box-img'>
                        <img src={item.image}/>
                    </div>
                    <div className='item-details'>
                        <div className='item-left'>
                            <h3>{item.name}</h3>
                            <p>prix unitaire: {item.price} KMF</p>
                        </div>
                        <div className='item-right'>
                            <p>{item.totalPrice} KMF</p>
                            <AddToCartButton isClicked={true} product={item} />
                        </div>
                    </div>
                </div>
                <hr></hr>
            </>
        )
    })

    const noItem = <p className="empty">Votre Panier est vide</p>

    return (
        <div className="cart-items">
            {items.length > 0 ? itemsInCart : noItem }
        </div>
    )
}
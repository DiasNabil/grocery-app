import { Fragment } from 'react'
import './Checkout.scss'

export default function CheckoutItem({items}){

    const itemInfo = items.map(item => {
        return (
            <Fragment key={item.id}>
            <div className='checkout-item'>
                <div className='checkout-box-img'>
                    <img src={item.image}/>
                </div>
                <div className='checkout-item-details'>
                    <div className='checkout-item-left'>
                        <h3>{item.name}</h3>
                        <p>quantité : {item.quantity}</p>
                    </div>
                    <div className='checkout-item-right'>
                        <p>{item.total} KMF</p>
                    </div>
                </div>
            </div>
        </Fragment>
        )
    })

    return (
        <div className='checkout-item-container'>
            {itemInfo}
        </div>
    )

}
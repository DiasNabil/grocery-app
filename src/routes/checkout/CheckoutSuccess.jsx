import { Link } from "react-router-dom"


export default function CheckoutSuccess({data}){

    let orderNumber
    if(data){
        orderNumber = data.checkout.order.orderNumber
    }

    return (
        <div className='checkoutSuccess'>
            <h2>Merci pour votre commande ! </h2>
            <p className='orderNum'>Numero de commande : <span>{orderNumber}</span></p>
            <p>Votre commande est en cours de préparation, vous recevrez une notification par mail et par message une fois votre commande prête</p>
            <Link className='returnButton' to='/' > {'Revenir sur le site '}</Link>
        </div>
    )
}
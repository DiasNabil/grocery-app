import {  useContext, useEffect, useState } from 'react'
import './Checkout.scss'
import { CartContext } from '../../components/Context/CartContext'
import { Link } from 'react-router-dom'
import CheckoutItem from './CheckoutItem'
import { CHECKOUT} from '../../utils/query'
import { useMutation } from '@apollo/client'
import PreLoader from '../../components/PreLoader/PreLoader'
import { getItemsInCart } from '../../../functions'
import { AppContext } from '../../components/Context/AppContext'
import CheckoutForm from './CheckoutForm'
import CheckoutSuccess from './CheckoutSuccess'

import {ToggleContext} from '../../components/Context/ToggleContext'

export default function Checkout(){

    const {cart} = useContext(CartContext)
    const { products, Desktop, Mobile } = useContext(AppContext)
    const [cartInfo, setCartInfo] = useState({items: [], total: 0})
    const [checkout, {loading, data}] = useMutation(CHECKOUT)

    const {toggleCheckout, setToggleCheckout} = useContext(ToggleContext)

    useEffect(()=>{
        const itemsInCart = getItemsInCart(products, cart)
        setCartInfo({items: itemsInCart, total: cart.total})
    }, [])

    const checkoutDesktop = 
    <div className='checkout-container checkout-desktop'>
        <section className='checkout-left'>
            <div className='checkout-header'>    
                <Link to='/' >
                    <img className='checkout-logo' src='https://fakeimg.pl/150x50'/>
                </Link>
                <h2>Récapitulatif</h2>
            </div>
            <div className='checkout-items'>
                <CheckoutItem items={cartInfo.items}/>
                
                <hr></hr>
                <p className='checkout-price'>Total : <span>{cartInfo.total} KMF</span></p>
            </div>
        </section>
        <section className='checkout-right'>
            {!loading && !data && <CheckoutForm checkout={checkout}/>} 
            {loading && <PreLoader/>}
            {data && <CheckoutSuccess data={data}/>}
        </section>
    </div>

    const checkoutMobile = 
    <div className='checkout-container checkout-mobile'>
        <section className='checkout-left'>
            <div className='checkout-header'>    
                <Link to='/' >
                    <img className='checkout-logo' src='https://fakeimg.pl/150x50'/>
                </Link>
            </div>

            <div className='recap'>
                <div className='recap-left'>
                    <h2 onClick={()=>{setToggleCheckout(prev => !prev)}}>Récapitulatif</h2> 
                    <i onClick={()=>{setToggleCheckout(prev => !prev)}} className={`bx bx-chevron-${toggleCheckout ? 'down' : 'right'}`} ></i>
                </div>
                <div className='recap-right'>
                    <p>{cartInfo.total} KMF</p>
                </div>
            </div>

            <div className={`checkout-items ${!toggleCheckout && 'none'}`}>
                <CheckoutItem items={cartInfo.items}/>
            </div>
        </section>
        <section className='checkout-right'>
            {!loading && !data && <CheckoutForm checkout={checkout}/>} 
            {loading && <PreLoader/>}
            {data && <CheckoutSuccess data={data}/>}
        </section>

    </div>


    return (
        <>
            <Desktop>{checkoutDesktop}</Desktop>
            <Mobile>{checkoutMobile}</Mobile>
        </>
    )
}
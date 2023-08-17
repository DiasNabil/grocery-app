import './AddToCart.scss'
import ringLoader from '../../assets/ringLoader.svg'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

export default function AddToCartLoader({id}){

    const {input} = useContext(CartContext)

    return (
        input.data && 
        input.id == id && 
        <img className='addToCartLoader' src={ringLoader}/>
    )
}
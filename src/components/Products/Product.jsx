import { useState } from 'react'
import AddToCartButton from '../AddToCart/AddToCartButton'
import AddToCartLoader from '../AddToCart/AddToCartLoader'
import './Products.scss'



export default function Product({product}){

    const [isClicked, setIsClicked] = useState(false)

        return(
            <div key={product.id} className='product-container' onClick={()=>{setIsClicked(true)}} onPointerLeave={()=>setIsClicked(false)}>
            
                <AddToCartButton isClicked={isClicked} product={product}/>

                <div  className='product-cart'>
                    <div className='product-img'>
                        <img src={product.image}/>
                        <AddToCartLoader id={product.id}/>
                    </div>
                    <div className='text'>
                        <p className='price'>{product.price} KMF</p>
                        <p className='name'>{product.name}</p>
                    </div>
                </div>
            </div>
        )
}
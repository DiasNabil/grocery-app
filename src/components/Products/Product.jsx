import { useState } from 'react'
import AddToCartButton from './AddToCartButton'
import './Products.scss'



export default function Product({product}){

    const [isClicked, setIsClicked] = useState(false)

    if(product.stock !== 'outofstock'){

        return(
            <div key={product.id} className='product-container' onClick={()=>{setIsClicked(true)}} onPointerLeave={()=>setIsClicked(false)}>
            
                <AddToCartButton  isClicked={isClicked} product={product}/>

                <div  className={`product-cart`} >
                    <div className={`product-img`}>
                        <img src={product.image}/>
                    </div>
                    <div className='text'>
                        <p className='price'>{product.price} KMF</p>
                        <p className='name'>{product.name}</p>
                    </div>
                </div>
            </div>
        )
    }
}
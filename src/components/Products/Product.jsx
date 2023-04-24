import { useState } from 'react'
import AddToCartButton from './addToCartButton'
import './Products.scss'



export default function Product({product, location}){
    const [isClicked, setIsClicked] = useState(false)
    if(product.stock !== 'outofstock'){

        return(
            <div key={product.id} className='product-container' onClick={()=>{console.log('test');setIsClicked(true)}} onPointerLeave={()=>setIsClicked(false)}>
            
                <AddToCartButton  isClicked={isClicked}/>

                <div  className={`product-cart ${!isClicked ? null : 'filter'}`} >
                    <div className='product-img'>
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
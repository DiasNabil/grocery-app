import './Products.scss'
import Product from './Product'
import { useLocation } from 'react-router-dom'

export default function Products({products}){

    let location = useLocation()

    return (
        <div className='products-section'>
            {location.pathname === '/' && <h2>Tous nos produits</h2>}
            <div className='products-container'>

                {
                    products.map(product =>{
                        return (
                            <Product key={product.id} product={product} location={location}/>
                        )
                    })
                }

            </div>
        </div>
    )
}
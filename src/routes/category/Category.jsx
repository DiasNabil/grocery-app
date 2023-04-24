import React from 'react'
import Hero from '../../components/Hero-section/Hero'
import Products from '../../components/Products/Products'
import './Category.scss'
import { useLoaderData} from "react-router-dom"

export async function loader({params}){
    
    let res = await fetch(`http://localhost/projets/api-wp/wp-json/api/category/${params.category}`)
    let data = await res.json()
    let category = data[0]

    console.log('category : ')
    console.log(category)
    return category
  } 

export default function Category() {
  let category= useLoaderData()





  return (
    
    <>
        <div className='hero-category' style={{
            backgroundImage: `url(${category.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} >
            <h1>{category.name}</h1>
        </div>

        <Products products={category.products}/>
    </>
  )
}


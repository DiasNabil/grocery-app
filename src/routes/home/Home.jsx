import React, { useContext } from 'react'
import Hero from '../../components/Hero-section/Hero'
import Products from '../../components/Products/Products'
import { ProductsContext } from '../../components/Context/ProductsContext'
import './Home.scss'
import { useLoaderData } from "react-router-dom"

export async function loader(){

  let [contentPage , allProducts] = await Promise.all([
    fetch('http://localhost/projets/api-wp/wp-json/api/pages/134'),
    fetch('http://localhost/projets/api-wp/wp-json/api/product/')
  ])

  contentPage = await contentPage.json()
  allProducts = await allProducts.json()

  let homePage = {
    contentPage: contentPage[0], 
    allProducts: allProducts
  }

  return homePage
}


export default function Home() {
  let data = useLoaderData()
  let homePage = data.contentPage.fields
 
  let products = useContext(ProductsContext)

  return (
    <>
      <Hero homePage={homePage} />
      <Products products={products}/>
    </>
  )
}


import React, { useContext , useEffect } from 'react'
import Hero from '../../components/Hero-section/Hero'
import Products from '../../components/Products/Products'
import './Home.scss'
import { AppContext } from '../../components/Context/AppContext'
import PreLoader from '../../components/PreLoader/PreLoader'



export default function Home() {
  let { pageQuery , products } = useContext(AppContext)
  let query = pageQuery(237)
  let homePage = query && query.fields

  if(query){
    return (
      <>
        <Hero homePage={homePage} />
        <Products products={products}/>
      </>
    )
  }else return (
    <PreLoader/>
  )

}


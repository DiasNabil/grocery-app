import { useContext } from 'react'
import Hero from '../../components/Hero-section/Hero'
import Products from '../../components/Products/Products'
import './Home.scss'
import { AppContext } from '../../components/Context/AppContext'
import PreLoader from '../../components/PreLoader/PreLoader'
import { PageContext } from '../../components/Context/PageContext'

let homePageId = 237

export default function Home() {
  let { products } = useContext(AppContext)
  let { pageQuery } = useContext(PageContext)
  let query = pageQuery(homePageId)
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


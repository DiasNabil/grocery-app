import { useContext } from 'react'
import Products from '../../components/Products/Products'
import './Category.scss'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../components/Context/AppContext'
import PreLoader from '../../components/PreLoader/PreLoader'

export default function Category() {
  const params = useParams()
  const {categories} = useContext(AppContext)
  let category = categories.find(cat => cat.id == params.category)

  if(category){
    return (
    
      <>
          <div className='hero-category' style={{
              backgroundImage: `url(${category.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
          }} >
              <h1>{category.name}</h1>
          </div>
  
          <Products products={category.products}/>
      </>
    )
  }
}


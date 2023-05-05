import { NavLink } from 'react-router-dom'
import './categories.scss'
import { CategoriesContext } from '../Context/CategoriesContext'
import { useContext } from 'react'


export async function loader(){
    
    let res = await fetch('http://localhost/projets/api-wp/wp-json/api/category/')
    let categoriesList = await res.json()

    return categoriesList
  } 

export default function Categories(){

    let categoriesList = useContext(CategoriesContext)

    return (
        <ul className='categories-container'>
            <h2>Toutes les catégories</h2>

            {categoriesList.map((category) =>{
            return(
                <li key={category.id}>
                    <NavLink to={`/categories/${category.id}`} className='category-name' > {category.name} </NavLink>
                </li>
            )
            })}

        </ul>
    )
}
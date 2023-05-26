import { NavLink } from 'react-router-dom'
import './categories.scss'

export default function Categories({categoriesList}){

    

    return (
        <ul className='categories-container'>
            <h2>Toutes les catégories</h2>

            {categoriesList.map((category) =>{
                if(category.products.length > 0){
                    return(
                        <li key={category.id}>
                            <NavLink to={`/categories/${category.id}`} className='category-name' > {category.name} </NavLink>
                        </li>
                    )                    
                }
            })}

        </ul>
    )
}
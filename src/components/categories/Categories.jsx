import { NavLink } from 'react-router-dom'
import './categories.scss'
import { useContext } from 'react'
import { ToggleContext } from '../Context/ToggleContext'
import { AppContext } from '../Context/AppContext'

export default function Categories({categoriesList}){

    const {toggleCategories, setToggleCategories} = useContext(ToggleContext)
    const{Desktop, Mobile} = useContext(AppContext)

    const categoriesDesktop = 
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

const categoriesMobile = 
    <ul className={`categories-container cat-mobile ${toggleCategories && 'cat-slide'}`}>
        <h2>Toutes les catégories</h2>

        {categoriesList.map((category) =>{
            if(category.products.length > 0){
                return(
                    <li key={category.id}>
                        <NavLink to={`/categories/${category.id}`} className='category-name' onClick={()=>{setToggleCategories(false)}}> {category.name} </NavLink>
                    </li>
                )                    
            }
        })}

    </ul>
    

    return (
        <>
        <Desktop>{categoriesDesktop}</Desktop>
        <Mobile>{categoriesMobile}</Mobile>
        </>
    )
}
import React from 'react'
import Category from './Category'
import './categories.scss'

export default function Categories({categoriesList}){

    return (
        <div className='categories-container'>

            {categoriesList.map((category) =>{
            return(
                <Category key={category.id} category={category} />
            )
            })}

        </div>
    )
}
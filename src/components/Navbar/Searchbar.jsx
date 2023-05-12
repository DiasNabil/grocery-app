import { Form , useNavigation, useSubmit } from 'react-router-dom'
import { useState } from 'react'

export default function Searchbar({categoriesList}){

    const[isSearch , setSearch] = useState('')
    const[isCategory, setCategory] = useState('')

    let submit = useSubmit()
    const nav = useNavigation()

    function handleSearch(event){
        setSearch(prev => event.target.value)
        submit(event.currentTarget.form)
    }

    function handleSelect(event){
        setCategory(prev => event.target.value)
    }


    return (

        <Form className='search-container' method="post" action='./product'>
                <input 
                type='text'
                placeholder='Je recherche ...'
                onChange={(event)=>handleSearch(event)}
                name='search'
                className='searchBar'
                value={isSearch} 
                />

                <select 
                    onChange={(event)=>handleSelect(event)} 
                    value={isCategory} 
                    className='select-category'
                    name='category'
                >
                <option value='' >Choisir une catégorie</option>
                {categoriesList.map(category => {
                    return (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    )
                })}
                </select>
            
        </Form>
    )
}
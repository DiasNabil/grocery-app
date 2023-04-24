import { Form } from 'react-router-dom'

export default function Searchbar({categoriesList}){

    return (

        <Form className='search-container'>
                <input 
                type='text'
                placeholder='Je recherche ...'
                //onChange={}
                name='searchBar'
                className='searchBar'
                //ajouter une icone de recherche
                //value={} setState pour controler l'input
                />

                <select 
                    //onChange={} 
                    //value={} initier un state pour controller cette valeur 
                    className='select-category'
                >
                <option value='' >Choisir une catégorie</option>
                {categoriesList.map(category => {
                    return (
                        <option key={category.id} value={category.name}>{category.name}</option>
                    )
                })}
                </select>
            
            </Form>
    )
}
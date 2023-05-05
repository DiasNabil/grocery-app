import { createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext({
    categories: [], 
    setCategories: () => null
})

export function CategoriesProviders({children}) {

    const[categories, setCategories] = useState([])

    useEffect(()=>{
        const url = 'http://localhost/projets/api-wp/wp-json/api/category/'

        async function fetchProducts(url){
            const data = await fetch(url)
            const json = await data.json()

            setCategories(json)
        }

        fetchProducts(url)
            .catch(console.error)
    },[])

    return ( 
        <CategoriesContext.Provider value={categories}>
            {children}
        </CategoriesContext.Provider>
    )

}
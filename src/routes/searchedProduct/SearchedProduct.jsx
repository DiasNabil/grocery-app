import { useActionData, useLoaderData } from "react-router-dom"
import Products from "../../components/Products/Products"
import { useContext } from "react"
import { ProductsContext } from "../../components/Context/ProductsContext"



export async function action({request}){
    
    const res = await fetch('http://projets.local/api-wp/wp-json/api/product/')
    const arrProducts = await res.json ()
    const data = Object.fromEntries(await request.formData())
    data.search = data.search.trim()
    let products = null

    function search(product , data){
        let name = product.name.toLowerCase()
        let query = data.toLowerCase()

        return name.includes(query)
    }


    if(data.category !== ''){
        let filteredProducts = arrProducts.filter(product => product.category.find(cat => cat == data.category))
        products =  filteredProducts.filter(product => search(product , data.search))
    } else products = arrProducts.filter(product => search(product , data.search))


    return products 
}

export async function loader(){

    const res = await fetch('http://projets.local/api-wp/wp-json/api/product/')

    const allProducts = await res.json()
    
    return allProducts
}


export default function SearchedProduct() {
    const action = useActionData()
    const allProducts = useLoaderData()
    const products = action ? action : allProducts

    return (
        <>
            <Products products={products}/>
        </>
    )
}
import { useActionData } from "react-router-dom"
import Products from "../../components/Products/Products"
import { useContext } from "react"
import { AppContext } from "../../components/Context/AppContext"



export async function action({request}){
    const data = Object.fromEntries(await request.formData())
    data.search = data.search.trim()

    return data
}


function search(product , data){
    let name = product.name.toLowerCase()
    let query = data.toLowerCase()

    return name.includes(query)
}


export default function SearchedProduct() {
    const data = useActionData()
    let {products} = useContext(AppContext)
    let searchedProducts = products
    
    if(data){
        if(data.category !== ''){
            let filteredProducts = products.filter(product => product.category.find(cat => cat == data.category))
            searchedProducts =  filteredProducts.filter(product => search(product , data.search))
        } else searchedProducts = products.filter(product => search(product , data.search))
    }

    return (
        <>
            <Products products={searchedProducts}/>
        </>
    )
}
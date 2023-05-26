import {useState , useEffect , createContext} from "react";
import { useQuery } from "@apollo/client";
import { CATEGORIES_QUERY, PAGE_QUERY, PRODUCTS_QUERY } from "../../utils/query";

export const AppContext = createContext({
    products: [],
    setProducts: () => null,
    categories: [],
    setCategories: () => null,
    isLoading: Boolean,
    setLoading: () => null
})

function formatCategories(data){
    let arr = data.productCategories.nodes.map(cat =>{
        let {databaseId , name , image} = cat
        const id = databaseId
        image = image && image.sourceUrl
        const products = formatProducts(cat)

        return {name , id , image , products}
    })

    return arr

}

function formatProducts(data){
    let arr = data.products.nodes.map(product => {
        let {databaseId, name , image, regularPrice , stockStatus , productCategories  } = product
        const id = databaseId
        const stock = stockStatus
        const category = productCategories.nodes.map(cat => cat.databaseId)
        const price = regularPrice 
        image = image && image.sourceUrl 

        return {name , id , price , stock , category , image}
    })

    return arr
}

function formatPage(data){
    let format = {}
    Object.entries(data.page).forEach(([keyFields , valueFields]) => {
        if(typeof valueFields === 'object'){
            format.fields = {...format.fields, [keyFields]: []}
            Object.entries(valueFields).forEach(([keyArr, valueArr])=>{
                if(typeof valueArr === 'object'){
                    if(valueArr){
                        valueArr.forEach(obj => {
                            let {titre, texte, image} = obj
                            image = image = image && image.sourceUrl
                            format.fields[keyFields] = [...format.fields[keyFields], {titre , texte , image}]
                        })
                    }
                }
            })
        }
    })

    format.id = data.page.databaseId
    format.title = data.page.title

    return format
}



export function AppProvider({children}){
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const [isLoading, setLoading] = useState(true)

    const getProducts = useQuery(PRODUCTS_QUERY)
    const getCategories = useQuery(CATEGORIES_QUERY)
    let getPage = null


    function pageQuery(id){
        getPage = useQuery(PAGE_QUERY, {variables: {id: id}})
        
        if(!getPage.loading && !getPage.error){
            return formatPage(getPage.data)
        }
    }

    useEffect(()=>{

        if(!getProducts || !getCategories){
            setLoading(true)
        }else if(!getProducts.loading && !getCategories.loading){
            setLoading(false)
        }

        if(!isLoading){
            setProducts(formatProducts(getProducts.data))
            setCategories(formatCategories(getCategories.data))
        }

        
    },[getProducts , getCategories, isLoading])



    return (
        <AppContext.Provider value={{products , categories , pageQuery , isLoading , setLoading}}>
            {children}
        </AppContext.Provider>
    )

}
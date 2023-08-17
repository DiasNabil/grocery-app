import {useState , useEffect , createContext} from "react";
import { useQuery } from "@apollo/client";
import { CATEGORIES_QUERY, PRODUCTS_QUERY } from "../../utils/query";
import { useMediaQuery } from 'react-responsive'

export const AppContext = createContext({
    products: [],
    setProducts: () => null,
    categories: [],
    setCategories: () => null,
    isLoading: Boolean,
    setLoading: () => null,
    Desktop: ()=>null,
    Mobile: ()=>null,
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



export function AppProvider({children}){
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const [isLoading, setLoading] = useState(true)

    const getProducts = useQuery(PRODUCTS_QUERY)
    const getCategories = useQuery(CATEGORIES_QUERY)

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 781 })
        return isDesktop ? children : null
    }

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 780 })
        return isMobile ? children : null
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
        <AppContext.Provider value={{products , categories , isLoading , setLoading, Desktop, Mobile}}>
            {children}
        </AppContext.Provider>
    )

}
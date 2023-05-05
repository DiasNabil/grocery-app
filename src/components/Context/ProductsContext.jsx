import {useState , useEffect , createContext} from "react";

export const ProductsContext = createContext({
    products: [],
    setProducts: () => null,
})

export function ProductsProvider({children}){
    const [products, setProducts] = useState([])

    useEffect(()=>{

        const url = 'http://localhost/projets/api-wp/wp-json/api/product/'

        async function fetchProducts(url){
            const data = await fetch(url)
            const json = await data.json()

            setProducts(json)
        }

        fetchProducts(url)
            .catch(console.error)

    }, [])

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )

}
import {useState , useEffect , createContext} from "react";
import process from "process";
import { ADD_TO_CART, GET_CART, UPDATE_CART } from '../../utils/query'
import {formatCart} from '../../../functions'
import { useMutation, useQuery } from '@apollo/client'


export const CartContext = createContext({
    cart : null,
    setCart : () => null,
})


export function CartProvider ({children}) {  
    const [cart, setCart] = useState(null)
    const [input , setInput] = useState({"data" : null , "mutation" : null, 'id': null})
    const [itemsInCart, setItemsInCart] = useState([])


    const getCart = useQuery(GET_CART, {
        notifyOnNetworkStatusChange: true,
        onCompleted: (data)=>{
            const updatedCart = formatCart(data)
            if(!updatedCart.isEmpty){
                localStorage.setItem("jaimetous-cart", JSON.stringify(updatedCart))
                setCart(updatedCart)
            }else{
                localStorage.removeItem("jaimetous-cart")
                setCart(null)
            }
       }
     })

     const [addToCart] = useMutation(ADD_TO_CART, {
        variables: {
            input: input.data
        },
        onCompleted: ()=>{
            getCart.refetch()
            setInput({"data" : null , "mutation" : null, 'id': null})
        }, 
     })


     const [subtractToCart] = useMutation(UPDATE_CART, {
        variables: {
            input: {
                "items":input.data
            }
        },
        onCompleted: ()=>{
            getCart.refetch()
            setInput({"data" : null , "mutation" : null, 'id': null})
        }
     })


     const [removeToCart] = useMutation(UPDATE_CART, {
        variables: {
            input: {
                "items":input.data
            }
        },
        onCompleted: ()=>{
            getCart.refetch()
            setInput({"data" : null , "mutation" : null, 'id': null})
        }
     })


    useEffect(()=>{
        if(process.browser){
            let cartData = localStorage.getItem('jaimetous-cart')
            cartData = cartData !== null ? JSON.parse(cartData) : null
            setCart(cartData)
        }
    },[])

    useEffect(()=>{

        if(input.mutation === "add"){
            addToCart()
        }

        if(input.mutation === "substract"){
            subtractToCart()
        }

        if(input.mutation === "remove"){
            removeToCart()
        }
        
    }, [input])

    return (
        <CartContext.Provider value={{cart, setCart, input , setInput , itemsInCart , setItemsInCart , getCart, addToCart, subtractToCart , removeToCart}}> 
            {children} 
        </CartContext.Provider>
        )
}
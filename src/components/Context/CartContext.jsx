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

     const [input , setInput] = useState({"data" : null , "mutation" : null})

     const [addToCart] = useMutation(ADD_TO_CART, {
        variables: {
            input: input.data
        },
        onCompleted: ()=>{
            getCart.refetch()
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
        }
     })


    useEffect(()=>{
        if(process.browser){
            let cartData = localStorage.getItem('jaimetous-cart')
            cartData = cartData !== null ? JSON.parse(cartData) : null
            setCart(cartData)
        }
    }, [])

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

        if(input.mutation !== null){
            setInput({"data" : null , "mutation" : null})
        }
        
    }, [input])

    return (
        <CartContext.Provider value={{cart, setCart, getCart, addToCart, subtractToCart , removeToCart , input , setInput}}> 
            {children} 
        </CartContext.Provider>
        )
}
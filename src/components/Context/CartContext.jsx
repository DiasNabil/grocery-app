import {useState , useEffect , createContext} from "react";
import process from "process";


export const CartContext = createContext({
    cart : null,
    setCart : () => null
})


export function CartProvider ({children}) {  
    
    const [cart, setCart] = useState(null)



    useEffect(()=>{
        if(process.browser){
            let cartData = localStorage.getItem('jaimetous-cart')
            cartData = cartData !== null ? JSON.parse(cartData) : null
            setCart(cartData)
        }
    }, [])

    return (
        <CartContext.Provider value={{cart, setCart}}> 
            {children} 
        </CartContext.Provider>
        )
}
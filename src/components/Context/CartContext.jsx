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
            let cartData = localStorage.getItem('cart')
            cartData = null !== cartData ? JSON.parse(cartData) : ''
            setCart(cartData)
        }
    }, [])

    return (
        <CartContext.Provider value={{cart, setCart}}> 
            {children} 
        </CartContext.Provider>
        )
}
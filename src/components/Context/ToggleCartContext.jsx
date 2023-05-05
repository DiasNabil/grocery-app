import {useState , createContext} from "react";

export const ToggleCartContext = createContext({
    toggleCart: null,
    setToggleCart: ()=> null
})

export function ToggleCartProvider({children}){

    const[toggleCart, setToggleCart] = useState(false)

    return (
        <ToggleCartContext.Provider value={{toggleCart, setToggleCart}}>
            {children}
        </ToggleCartContext.Provider>
    )
}
import {useState , createContext} from "react";

export const ToggleContext = createContext({
    toggleCart: null,
    setToggleCart: ()=> null,
    toggleSearchBar: null,
    setToggleSearchBar: ()=> null,
    toggleCategories: null,
    setToggleCategories: ()=> null,
    toggleCheckout: null,
    setToggleCheckout: ()=> null,
})

export function ToggleProvider({children}){

    const[toggleCart, setToggleCart] = useState(false)
    const[toggleSearchBar, setToggleSearchBar] = useState(false)
    const[toggleCategories, setToggleCategories] = useState(false)
    const[toggleCheckout, setToggleCheckout] = useState(false)

    return (
        <ToggleContext.Provider value={{toggleCheckout, setToggleCheckout, toggleCart, setToggleCart, toggleSearchBar, setToggleSearchBar, toggleCategories, setToggleCategories}}>
            {children}
        </ToggleContext.Provider>
    )
}
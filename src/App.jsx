import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Categories from "./components/Categories/Categories"
import { useLoaderData , useNavigation } from "react-router-dom"
import PreLoader from "./components/PreLoader/PreLoader";
import { useContext } from "react";
import { AppContext } from "./components/Context/AppContext";


import { CartProvider } from "./components/Context/CartContext";
import { ToggleCartProvider } from "./components/Context/ToggleCartContext";




export default function App(){

  const {categories , isLoading} = useContext(AppContext)

  if(isLoading){
    return (
      <PreLoader/>
    )
  }else
  return ( 

    <CartProvider>
      
      <ToggleCartProvider>
        <Navbar  categoriesList={categories}/>
      </ToggleCartProvider>
      <section className="body-Container">
        <Categories categoriesList={categories}/>
        <div className="outletStyle">
          <Outlet />
        </div>
      </section>

    </CartProvider>
    
  )
}
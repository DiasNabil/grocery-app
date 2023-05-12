import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Categories from "./components/Categories/Categories"
import { useLoaderData , useNavigation } from "react-router-dom"
import PreLoader from "./components/PreLoader/PreLoader";

import client from "./utils/ApolloClient";
import { gql } from "@apollo/client";
import { CartProvider } from "./components/Context/CartContext";
import { ToggleCartProvider } from "./components/Context/ToggleCartContext";



export default function App(){
  const navigation = useNavigation()
  const categoriesList = useLoaderData()

  return ( 
    <CartProvider>
      
      <ToggleCartProvider>
        <Navbar  categoriesList={categoriesList}/>
      </ToggleCartProvider>
      <section className="body-Container">
        <Categories categoriesList={categoriesList}/>
        <div className="outletStyle">
          {navigation.state === 'loading' ? <PreLoader/> : <Outlet />}
        </div>
      </section>

    </CartProvider>
  )
}
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Categories from "./components/categories/Categories"
import { useLoaderData , useNavigation } from "react-router-dom"
import PreLoader from "./components/PreLoader/PreLoader";

import client from "./utils/ApolloClient";
import { gql } from "@apollo/client";
import { CartProvider } from "./components/Context/CartContext";
import { ToggleCartProvider } from "./components/Context/ToggleCartContext";
import { ProductsProvider } from "./components/Context/ProductsContext";
import { CategoriesProviders } from "./components/Context/CategoriesContext";
import { useContext } from "react";



export default function App(){
  const navigation = useNavigation()

  return ( 
    <ProductsProvider>
    <CategoriesProviders>
    <CartProvider>
      
    <ToggleCartProvider>
        <Navbar  />
    </ToggleCartProvider>
      
      <section className="body-Container">
        <Categories />
        <div className="outletStyle">
          {navigation.state === 'loading' ? <PreLoader/> : <Outlet />}
        </div>
      </section>

    </CartProvider>
    </CategoriesProviders>
    </ProductsProvider>
  )
}
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Categories from "./components/Categories/Categories"
import PreLoader from "./components/PreLoader/PreLoader";
import { useContext } from "react";
import { AppContext } from "./components/Context/AppContext";

import { ToggleProvider, ToggleContext } from "./components/Context/ToggleContext";
import { PageProvider } from "./components/Context/PageContext";




export default function App(){

  const {categories , isLoading} = useContext(AppContext)
  const {setToggleSearchBar} =  useContext(ToggleContext)

  if(isLoading){
    return (
      <PreLoader/>
    )
  }else
  return ( 
    <>
        <Navbar  categoriesList={categories}/>
      


      <section className="body-Container" onClick={()=>{setToggleSearchBar(false)}}>

        <Categories className='categoriesList' categoriesList={categories}/>

        <div className="outletStyle">
          <PageProvider>
            <Outlet />
          </PageProvider>
        </div>

      </section>

      </>
  )
}
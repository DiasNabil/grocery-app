import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Categories from "./components/categories/Categories"
import { useLoaderData } from "react-router-dom"


export default function App(){

  const categoriesList = useLoaderData()

  return ( 
    <>
      <Navbar  categoriesList={categoriesList}/>
      <section className="body-Container">
        <Categories categoriesList={categoriesList}/>
        <div className="outletStyle">
          <Outlet />
        </div>
      </section>
    </>
  )
}
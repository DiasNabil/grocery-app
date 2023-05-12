import '../reset.css'
import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import App from './App'
import Home from './routes/home/Home'
import Category from './routes/category/Category'
import SearchedProduct from './routes/searchedProduct/SearchedProduct'


import { loader as homePageLoader } from './routes/home/Home'
import { loader as categoryLoader } from './routes/category/Category'
import { loader as categoriesLoader } from './components/Categories/Categories'
import { loader as productsLoader } from './routes/searchedProduct/SearchedProduct'
import { action as productsAction } from './routes/searchedProduct/SearchedProduct'
import PreLoader from './components/PreLoader/PreLoader'



const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        loader: categoriesLoader,
        children: [
            {   
                index: true,
                element: <Home />,
                loader: homePageLoader
            },
            {
                path: 'categories/:category',
                element: <Category />,
                loader: categoryLoader
            },
            {
                path: 'product/',
                element: <SearchedProduct />,
                action: productsAction,
                loader: productsLoader
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(

        <RouterProvider 
            router={router}
            fallbackElement={<PreLoader/>} 
        />

)

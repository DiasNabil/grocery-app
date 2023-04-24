import '../reset.css'
import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import App from './App'
import Home from './routes/home/Home'
import Category from './routes/category/Category'

import { loader as categoriesLoader } from './components/categories/Categories'
import { loader as homePageLoader } from './routes/home/Home'
import { loader as productsLoader } from './routes/category/Category'


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
                path: 'category/:category',
                element: <Category />,
                loader: productsLoader
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

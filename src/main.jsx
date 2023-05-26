import '../reset.css'
import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import App from './App'
import Home from './routes/home/Home'
import Category from './routes/category/Category'
import SearchedProduct from './routes/searchedProduct/SearchedProduct'

import client from "./utils/ApolloClient";
import { ApolloProvider } from "@apollo/client";
import { AppProvider } from "./components/Context/AppContext";

import { action as productsAction } from './routes/searchedProduct/SearchedProduct'
import PreLoader from './components/PreLoader/PreLoader'



const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {   
                index: true,
                element: <Home />,
            },
            {
                path: 'categories/:category',
                element: <Category />,
            },
            {
                path: 'product/',
                element: <SearchedProduct />,
                action: productsAction,
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client} >
    <AppProvider>
        <RouterProvider 
            router={router}
            fallbackElement={<PreLoader/>} 
        />
    </AppProvider>
    </ApolloProvider>

)

import '../reset.css'
import './index.scss'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'

import App from './App'
import Home from './routes/home/Home'
import Category from './routes/category/Category'
import SearchedProduct from './routes/searchedProduct/SearchedProduct'
import PreLoader from './components/PreLoader/PreLoader'
import Checkout from './routes/checkout/Checkout'
import ErrorPage from './routes/error/errorPage'

import client from "./utils/ApolloClient";
import { ApolloProvider } from "@apollo/client";
import { AppProvider } from "./components/Context/AppContext";
import { CartProvider } from "./components/Context/CartContext";

import { action as productsAction } from './routes/searchedProduct/SearchedProduct'
import { ToggleProvider } from './components/Context/ToggleContext'




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
            },
            
        ],
        errorElement: <ErrorPage/>,
    },
    {
        path: 'checkout/',
        element: <Checkout/>,
        errorElement: <ErrorPage/>,
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client} >
    <AppProvider>
    <CartProvider>
    <ToggleProvider>
        <RouterProvider 
            router={router}
            fallbackElement={<PreLoader/>} 
        />
    </ToggleProvider>
    </CartProvider>
    </AppProvider>
    </ApolloProvider>

)

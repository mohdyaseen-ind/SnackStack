import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Body from './components/Body.jsx'
import About from './components/About.jsx'
import Error from './components/Error.jsx'
import Contact from './components/Contact.jsx'
import Cart from './components/Cart.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu.jsx'

const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <App />,
        errorElement : <Error />,
        children : [
            {
                path : '',
                element : <Body />
            },
            {
                path : '/about',
                element : <About />
            },
            {
                path : '/contact',
                element : <Contact />
            },
            {
                path : '/cart',
                element : <Cart />
            },
            {
                path : '/restaurant/:resId',
                element : <RestaurantMenu />
            },
        ]
    },
    
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter} />
)

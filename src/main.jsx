import React,{ lazy,Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Body from './components/Body.jsx'
// import About from './components/About.jsx'
import Error from './components/Error.jsx'
import Contact from './components/Contact.jsx'
import Cart from './components/Cart.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu.jsx'
import Shimmer from './components/Shimmer.jsx'
// import Instamart from './components/Instamart.jsx'     // Instead of loading it as soon as the app loads, lets load it when the user clicks the Instamart Button
const InstaMart = lazy(() => import('./components/Instamart.jsx'))
const About = lazy(()=>import('./components/About.jsx')) 


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
                element : 
                <Suspense fallback={<h1>Loading...</h1>}>
                <About />
                </Suspense>
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
            {
                path : '/Instamart',
                element : (
                <Suspense fallback={<Shimmer/>}>
                <InstaMart />
                </Suspense>
            )
            },
        ]
    },
    
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter} />
)

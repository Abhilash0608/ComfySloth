import React, { Children } from 'react'
import {  Router, RouterProvider,createBrowserRouter } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { HomePage,AboutPage,AuthWrapper,CartPage,CheckoutPage,ErrorPage,SingleProductPage,ProducsPage, PrivateRoute } from './pages'
import HomeLayout from './pages/HomeLaout'

const router=createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:'/about',
        element:<AboutPage/>
      },
      {
        path:'/cart',
        element:<CartPage/>
      },
      {
        path:'/products',
        element:<ProducsPage/>
      },
      {
        path:'/products/:id',
        element:<SingleProductPage/>
      },
      {
        path:'/checkout',
        element:<PrivateRoute><CheckoutPage/></PrivateRoute>,

      },
      {
        path:'*',
        element:<ErrorPage/>
      },
    ]
  },
  
  
])
function App() {
  return (
    <div>

    

    <RouterProvider router={router}/>

    </div>
  )
    
}

export default App

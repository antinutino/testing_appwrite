import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/home/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './components/signup/Signup.jsx';
import Profile from './components/profile/Profile.jsx';
import Login from './components/login/Login.jsx';
import Data from './components/data/Data.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      { 
        path:'/',
        element:<Home></Home>

      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },
      {
        path:'/profile',
        element:<Profile></Profile>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/data',
        element:<Data></Data>
      }
        
      ],
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

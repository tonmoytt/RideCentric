import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dropdown from './All Components/Components/Navbar/Dropdown/Dropdown';
import Root from './Root/Root';
import Login from './All Components/Components/Navbar/Authinctation/Login/Login';
import Signup from './All Components/Components/Navbar/Authinctation/Signup/Signup';
import Home from './All Components/Components/Home/Home';
import Authinctation from './All Components/Components/Navbar/Authinctation/Authinctation';
import PrivetRoute from './All Components/Components/Navbar/Authinctation/PrivetRoute/PrivetRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/drop",
        element:  <Dropdown></Dropdown> 
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authinctation>
      <RouterProvider router={router} />
    </Authinctation>
  </React.StrictMode>,
)

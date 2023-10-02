import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Root.jsx';
import NotFound from './Components/NotFound.jsx';
import Home from './Pages/Home/Home.jsx';
import Products from './Pages/Products/Products';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import About from './Pages/About/About';
import AuthProvider from './Privider/AuthProvider';
import Login from './Pages/Login/Login'
import Register from './Pages/Login/Register'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

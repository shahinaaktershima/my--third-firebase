import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root.jsx';
import Home from './component/Home.jsx';
import Login from './component/Login.jsx';
import Register from './component/Register.jsx';
import AuthProvider from './component/AuthProvider.jsx';
import Orders from './component/Orders.jsx';
import Private from './routes/Private.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/orders',
    element:<Private><Orders></Orders></Private>
  }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider >
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

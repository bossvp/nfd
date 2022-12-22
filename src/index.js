import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';

import '../src/css/normalize.css'
import '../src/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
///
import Wallet from './components/pages/Wallet';
import Secret from './components/pages/Secret';
import Prod from './components/pages/Prod';
import Layout from './components/Layout';
import Blend from './components/pages/Blend';
import Season from './components/pages/Season';
import Gangs from './components/pages/Gangs';
import Battle from './components/pages/Battle';
import CoffeShop from './components/pages/CoffeShop';
import Error from './components/pages/Error';
import Stats from './components/pages/Stats';
import CardGang from './components/gangs-components/CardGang';



const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Secret />,
    children: [
      {
        index:true,// al visitar layout se muestra este elemento de manera directa
        element:<Secret/>
      },
    ],
    errorElement:<Error/>
  },
  {
    path: "/prod",
    element: <Layout />,
    children: [
      {
        index:true,// al visitar layout se muestra este elemento de manera directa
        element:<Prod/>,
      },
     
    ],
        errorElement:<Error/>
  },
  {
    path: "/blend",
    element: <Layout />,
    children: [
      {
        index:true,// al visitar layout se muestra este elemento de manera directa
        element:<Blend/>,
      },
     
    ],
        errorElement:<Error/>
  },
  {
    path: "/season",
    element: <Layout />,
    children: [
      {
        index:true,// al visitar layout se muestra este elemento de manera directa
        element:<Season/>,
      },
     
    ],
        errorElement:<Error/>
  },
  {
    path: "/gangs",
    element: <Layout />,
    children: [
      {
        index:true,// al visitar layout se muestra este elemento de manera directa
        element:<Gangs/>,
      },
     
    ],
        errorElement:<Error/>
  },
  {
    path: "/gangs/rank",
    element: <Layout />,
    children: [
      {
        index:true,// al visitar layout se muestra este elemento de manera directa
        element:<CardGang/>,
      },
     
    ],
        errorElement:<Error/>
  },


  {
    path: "/battle",
    element: <Layout />,
    children: [
      {
        index:true,// al visitar layout se muestra este elemento de manera directa
        element:<Battle/>,
      },
     
    ],
        errorElement:<Error/>
  },
  {
    path: "/coffeshop",
    element: <Layout />,
    children: [
      {
        index:true,// al visitar layout se muestra este elemento de manera directa
        element:<CoffeShop/>,

      },
     
    ],
        errorElement:<Error/>
  },
  {
    path: "/wallet",
    element: <Layout />,
    children: [
      {
        index:true,// al visitar layout se muestra este elemento de manera directa
        element:<Wallet/>,

      },
     
    ],
        errorElement:<Error/>
  },
  {
    path: "/stats",
    element: <Layout />,
    children: [
      {
        index:true,// al visitar layout se muestra este elemento de manera directa
        element:<Stats/>,

      },
     
    ],
        errorElement:<Error/>
  },
]);

root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

import { StrictMode } from 'react'
import './index.css' 
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/home.jsx'
import About from './components/About/About.jsx'
import Layout from './components/Layout/Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import Service from './components/Service/Service.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import PackageTour from './components/PackageTour/PackageTour.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: '/About',
        element: <About />
      },
       {
        path: '/PackageTour',
        element: <PackageTour />
      },
       {
        path: '/Service',
        element: <Service />
      },
       {
        path: '/Gallery',
        element: <Gallery />
      },
       {
        path: '/Contact',
        element: <Contact />
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
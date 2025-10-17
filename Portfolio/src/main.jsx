import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home.jsx'
import Project from './Components/Project.jsx'
import Marksheet from './Components/Marksheet.jsx'
import Semprep from './Semprep.jsx'
import BankMng from './BankMng.jsx'
import HealthProj from './HealthProj.jsx'
import Certification from './Components/Certification.jsx'
import Skills from './Components/Skills.jsx'
import About from './Components/About.jsx'
const router= createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[{
        path:"",
        element:<Home/>,
    },
    {
      path:"/Projects",
      element:<Project/>
    },
    {
      path:"/Marksheet",
      element:<Marksheet/>
    },
     {
      path:"/Semprep",
      element:<Semprep/>
    },
     {
      path:"/Project_Bank",
      element:<BankMng/>
    },
     {
      path:"/HealthTracker",
      element:<HealthProj/>
    },
     {
      path:"/CertfCard",
      element:<Certification/>
    },
    {
      path:"/Skills",
      element:<Skills/>
    },
    {
      path:'/About',
      element:<About/>
    }
  ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

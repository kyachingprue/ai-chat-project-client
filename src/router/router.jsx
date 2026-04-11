import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element:<Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/services',
        element: <Services/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  }
])

export default router;

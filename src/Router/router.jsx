import {createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Pages/Home"
import NotFound from "../Pages/NotFound"
import Blog from "../Pages/Blog"
import AllProducts from "../Pages/AllProducts"
import TopSeller from "../Pages/TopSeller"
import BlogDetails from "../Pages/BlogDetails"
import { ProductDetilsCard } from "../Components/PageComponents/ProductDetailsCard"
import PrivateRouter from "../PrivateRouter/PrivateRouter"


export const router= createBrowserRouter(
  [
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path:"/home",
          element: <Home />,
        },
        {
          path:"/",
          element: <Home />,
        },
        {
          path:"/shop",
          element: <AllProducts />
        },

        {
          path:"/blog",
          element: <Blog />,
        },
        {
          path:"/blog/:id",
          element: <BlogDetails/>,
        },
        {
          path:"/topseller",
          element: <TopSeller />,
        },
        {
          path:"/product/:id",
          element: <PrivateRouter>
            <ProductDetilsCard/>
          </PrivateRouter>,
        },
        {
          path:"*",
          element: <NotFound/>,
        },

      ]

  }
]
)
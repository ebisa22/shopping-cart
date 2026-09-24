import { createBrowserRouter } from 'react-router'
import Home from './pages/home/Home.jsx'
import Shop from './pages/shop/Shop.jsx'
import Cart from './pages/cart/Cart.jsx'
import App from './app/App.jsx'
import ExpandedProduct from './pages/expandedProduct/ExpandedProduct.jsx'
import ErrorPage from './components/errorPage/ErrorPage.jsx'


const router=createBrowserRouter([
   {
      path:"/",
      element:<App/>,
      children:[
          {
            index:true,
            element:<Home/>
          },
          {
            path:"shop",
            element:<Shop/>
          },
          {
            path:"cart",
            element:<Cart/>
          },
          { 
            path:"product/:productId",
            element:<ExpandedProduct/>
          }
      ],
      errorElement:<ErrorPage/>
   },
])
export default router;
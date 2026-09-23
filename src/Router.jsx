import { createBrowserRouter } from 'react-router'
import Home from './pages/home/Home.jsx'
import Shop from './pages/shop/Shop.jsx'
import Cart from './pages/cart/Cart.jsx'
import App from './app/App.jsx'

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
      ]
   },
])
export default router;
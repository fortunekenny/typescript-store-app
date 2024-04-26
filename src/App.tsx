
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from "./pages";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorElement from "./components/ErrorElement";

import {loader as landingLoader} from './pages/Landing'
import {loader as productsLoader} from './pages/Products'
import {loader as singleProductLoader} from './pages/SingleProduct'

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { store } from './store';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,

    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <ErrorElement />
      },
      { 
        path: "about", 
        element: <About />,
        errorElement: <ErrorElement />
      },
      {
        path: "checkout",
        element: <Checkout />,
        errorElement: <ErrorElement />
      },
      {
        path: "orders",
        element: <Orders />,
        errorElement: <ErrorElement />
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);


function App() {

  return (
    <RouterProvider router={router}/>
  );
}
export default App;
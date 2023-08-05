import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import CheckoutForm from "./Components/CheckoutForm";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="productDetails/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckoutForm/>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

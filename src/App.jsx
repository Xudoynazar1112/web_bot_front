import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import ProductList from "./pages/product/ProductList";
import ProductDetail from "./pages/product/ProductDetail";
import NotFound from "./pages/notFound/NotFound";
import Contact from "./pages/contact/Contact";
import PrivateRoute from "./privateRoute/privateRoute";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <>
      <div className="container w-full">
        <Routes>
          <Route path={"*"} element={<NotFound />} />
          <Route path={"/"} element={<ProductList />} />
          <Route path={"product/:id"} element={<ProductDetail />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/login"} element={<Login />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
          {/* <Route
            path="/admin-create"
            element={
              <PrivateRoute>
                <AdminCreatePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-edit/:id"
            element={
              <PrivateRoute>
                <AdminEditPage />
              </PrivateRoute>
            }
          /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
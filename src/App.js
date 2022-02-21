import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserSinglePage from "./pages/UserSinglePage/UserSinglePage";
import CreateUserPage from "./pages/CreateUserPage/CreateUserPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductSinglePage from "./pages/ProductSinglePage/ProductSinglePage";
import CreateProductPage from "./pages/CreateProductPage/CreateProductPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/users" element={<UsersPage />}/>
      <Route path="/users/:id" element={<UserSinglePage />}/>
      <Route path="/users/create" element={<CreateUserPage />}/>
      <Route path="/products" element={<ProductPage />}/>
      <Route path="/products/:id" element={<ProductSinglePage />}/>
      <Route path="/products/create" element={<CreateProductPage />}/>
    </Routes>
  );
}

export default App;

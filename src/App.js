import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Product from "./Components/Products/Product";
import Products from "./Components/Products/Products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;

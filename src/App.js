import { Route, Routes, Navigate } from "react-router";
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
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home/*" element={<Home />}>
          <Route path="explain" element={<p>this is RRD-v6</p>} />
          <Route path="hi" element={<p>hi there</p>} />
        </Route>

        <Route path="products/*" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;

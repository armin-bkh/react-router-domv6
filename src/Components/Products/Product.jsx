import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { productList } from "./Products";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setProduct(productList.find((pr) => pr.id === Number(id)));
  }, []);
  return (
    <main>
      <h1>{product?.name}</h1>
    </main>
  );
};

export default Product;

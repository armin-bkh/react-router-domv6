import { Link } from "react-router-dom";

export const productList = [
  { name: "book", id: 1 },
  { name: "Laptop", id: 2 },
  { name: "TV", id: 3 },
];

const Products = () => {
  return (
    <main>
      <h1>products page</h1>
      <ul>
        {productList.map((pr) => (
          <li key={pr.id}>
            <Link to={`/products/${pr.id}`}>{pr.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Products;

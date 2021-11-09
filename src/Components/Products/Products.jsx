import { Link, useNavigate } from "react-router-dom";

export const productList = [
  { name: "book", id: 1 },
  { name: "Laptop", id: 2 },
  { name: "TV", id: 3 },
];

const Products = () => {
  const navigate = useNavigate();
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
      <button onClick={()=> navigate('/home', { replace: true, state: {hi: "armin"} })}>back to home</button>
    </main>
  );
};

export default Products;

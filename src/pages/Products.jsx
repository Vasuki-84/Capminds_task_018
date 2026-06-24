import styled from "styled-components";
import ProductCard from "../Components/ProductCard";

const products = [
  {
    id: 1,
    title: "iPhone 16",
    price: 80000,
    image: "https://i.pinimg.com/736x/13/a9/9c/13a99cc7ae16f759b9a9ec6ffad1591a.jpg",
  },
  {
    id: 2,
    title: "Samsung S25",
    price: 70000,
    image: "https://i.pinimg.com/736x/9b/12/84/9b12844fb013c4730c3d402e76c5874c.jpg",
  },
  {
    id: 3,
    title: "Dell inspiron 15",
    price: 45000,
    image: "https://i.pinimg.com/1200x/fe/f7/b3/fef7b3cbaeb59afc974ab04dd20741e6.jpg",
  },
  {
    id: 4,
    title: "JBL Earbuds",
    price: 2000,
    image: "https://i.pinimg.com/736x/ab/84/dc/ab84dc0c4c665fb2060ad7a0ab5b7d58.jpg",
  },
];

const Container = styled.div`
  padding: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

function Products() {
  return (
    <Container>
      <h1>Products</h1>

      <Grid>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Grid>
    </Container>
  );
}

export default Products;

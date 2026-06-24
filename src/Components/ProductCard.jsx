import styled from "styled-components";

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    transition: 0.3s;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Price = styled.h3`
  color: ${({ $expensive }) => ($expensive ? "red" : "green")};
`;

const Button = styled.button`
  background: ${({ $primary }) => ($primary ? "#007bff" : "#f53900")};

  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

function ProductCard({ title, price, image }) {
  return (
    <Card>
      <ProductImage src={image} alt={title} />

      <h3>{title}</h3>

      <Price $expensive={price > 50000}>₹{price}</Price>

      <Button $primary>Add To Cart</Button>
    </Card>
  );
}

export default ProductCard;

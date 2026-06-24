import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background: #24292e;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h2`
  color: #61dafb;
  cursor: pointer;
`;

const Menu = styled.ul`
  display: flex;
  gap: 25px;
  list-style: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #61dafb;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo>StyleShop</Logo>

      <Menu>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>

        <li>
          <StyledLink to="/products">
            Products
          </StyledLink>
        </li>
      </Menu>
    </Nav>
  );
}

export default Navbar;
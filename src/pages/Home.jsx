import styled from "styled-components";

const Hero = styled.section`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-image: url("https://images.unsplash.com/photo-1441986300917-64674bd600d8");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: white;
  text-align: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.2rem;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: black;
    color: white;
  }
`;

function Home() {
  return (
    <Hero>
      <Content>
        <Heading>Welcome To StyleShop</Heading>

        <Description>
          Discover the latest fashion and trends.
        </Description>

        <Button>Shop Now</Button>
      </Content>
    </Hero>
  );
}

export default Home;
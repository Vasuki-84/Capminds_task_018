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

  color: ${({ theme }) => theme.text};
  text-align: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.overlay};
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

  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.buttonText};

  &:hover {
    opacity: 0.9;
  }
`;

function Home({ darkMode, setDarkMode }) {
  return (
    <Hero>
      <Content>
        <Heading>Welcome To StyleShop</Heading>

        <Description>
          Discover the latest fashion and trends.
        </Description>

        <Button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </Content>
    </Hero>
  );
}

export default Home;
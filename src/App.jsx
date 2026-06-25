import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";

import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/themes";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <ThemeProvider
        theme={darkMode ? darkTheme : lightTheme}
      >
        <GlobalStyles />

        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          <Route
            path="/products"
            element={<Products />}
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
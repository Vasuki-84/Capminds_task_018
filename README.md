# StyleShop - Styled Components Practice Project

## Overview

StyleShop is a simple React application built to practice the Styled Components library. The project demonstrates how to create reusable styled components, apply dynamic styling using props, implement responsive layouts, and organize styles within React components.

## Features

* Responsive Navigation Bar
* Home Page with Hero Section
* Products Page
* Reusable Product Card Component
* Dynamic Styling using Props
* Hover Effects and Transitions
* Global Styles using createGlobalStyle
* Component-Based Architecture
* React Router Navigation

## Technologies Used

* React.js
* Vite
* Styled Components
* React Router DOM
* JavaScript (ES6+)

## Project Structure

```bash
src/
├── components/
│   ├── Navbar.jsx
│   └── ProductCard.jsx
│
├── pages/
│   ├── Home.jsx
│   └── Products.jsx
│
├── styles/
│   └── GlobalStyles.js
│
├── App.jsx
└── main.jsx
```

## Styled Components Concepts Practiced

### Basic Styled Components

```jsx
const Button = styled.button`
  background: blue;
  color: white;
`;
```

### Dynamic Styling with Props

```jsx
const Price = styled.h3`
  color: ${({ $expensive }) =>
    $expensive ? "red" : "green"};
`;
```

### Pseudo Classes

```jsx
&:hover {
  transform: translateY(-5px);
}
```

### Global Styles

```jsx
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd style-component
```

Install dependencies:

```bash
npm install
```

Install Styled Components:

```bash
npm install styled-components
```

Install React Router:

```bash
npm install react-router-dom
```

Start the development server:

```bash
npm run dev
```

## Learning Outcomes

Through this project, I learned:

* Creating reusable styled components
* Using props for dynamic styling
* Working with pseudo-selectors
* Implementing global styles
* Building reusable UI components
* Managing component-based styling
* Routing with React Router
* Following React's one-way data flow

## Future Enhancements

* ThemeProvider Implementation
* Dark / Light Mode
* Product Search Functionality
* Product Details Page
* Shopping Cart Feature
* API Integration
* Responsive Mobile Navigation

## Author

Vasuki T

Frontend Developer | React Developer | MERN Stack Learner

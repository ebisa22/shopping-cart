# QuickShop

QuickShop is a simple e-commerce web application built with React and React Router. The project was created as a learning exercise to practice modern frontend development concepts such as component-based architecture, routing, state management, API integration, filtering, searching, sorting, and responsive design.

## Features

- Browse products from Fake Store API
- Search products by name
- Filter products by category
- Sort products by:
  - Featured
  - Price: Low to High
  - Price: High to Low
  - Highest Rated
- Product details page
- Shopping cart functionality
- Increase and decrease product quantity
- Remove items from cart
- Real-time cart total calculation
- Responsive design for desktop and mobile devices

## Technologies Used

- React
- React Router
- JavaScript (ES6+)
- CSS Modules
- Fake Store API

## Project Structure

```text
src
│
├── app
├── components
│   ├── navbar
│   ├── products
│   ├── loading
│   ├── error
│   └── errorPage
│
├── pages
│   ├── home
│   ├── shop
│   ├── cart
│   └── expandedProduct
│
├── scripts
│   └── getProducts
│
└── assets
```

## Main Functionality

### Product Listing

Products are fetched from the Fake Store API and displayed in a responsive product grid.

### Search

Users can search products by entering keywords in the search bar.

### Category Filtering

Products can be filtered by:

- All Categories
- Men's Clothing
- Women's Clothing
- Jewelery
- Electronics

### Sorting

Products can be sorted based on:

- Featured
- Lowest Price
- Highest Price
- Highest Rating

### Product Details

Clicking a product name opens a dedicated product page displaying:

- Product image
- Product title
- Category
- Rating
- Price
- Description

### Cart System

Users can:

- Add products to cart
- Increase quantity
- Decrease quantity
- Remove products
- View total cart value

## API

This project uses:

https://fakestoreapi.com/

Example endpoint:

```text
https://fakestoreapi.com/products
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build For Production

```bash
npm run build
```

## Learning Objectives

This project was developed to practice:

- React fundamentals
- Custom Hooks
- Component communication
- State management with hooks
- React Router
- API consumption
- Responsive layouts
- CSS Modules
- E-commerce UI development

## Future Improvements

- Product pagination
- Persistent cart storage
- User authentication
- Checkout page
- Product reviews
- Wishlist functionality
- Backend integration

## Author
ebisaeshetu100@gmail.com
Developed as a React learning project.
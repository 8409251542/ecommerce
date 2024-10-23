<<<<<<< HEAD
=======
Product Listing & Details App
This is a simple product listing and details application built with React.js. It fetches product data from the DummyJSON API and displays a paginated list of products. When a product is clicked, the app navigates to a detailed product view page where more information about the product is shown.

Features
Product Listing: Displays products in a responsive grid layout.
Pagination: Navigate through pages of products.
Product Details: Click on any product to view detailed information.
Add to Cart / Wishlist: Buttons available for potential integration.
Responsive Design: Works well on different screen sizes.
Tech Stack
React.js: A JavaScript library for building user interfaces.
React Router: To handle routing and navigation between pages.
Tailwind CSS: A utility-first CSS framework for styling the UI.
DummyJSON API: A free API used to fetch product data.
Installation
Prerequisites
Node.js installed on your machine.
Steps to Install
Clone the repository:

bash
Copy code
git clone 
Navigate into the project directory:

bash
Copy code
cd product-listing-app
Install the required dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start

How to Use
Product List Page
On the homepage, products are displayed in a grid layout.
Use the pagination links at the bottom to navigate through different pages.
Click on a product to view its details.
Product Details Page
Displays an enlarged image, product description, price, stock, etc.
You can click the "Add to Cart" or "Add to Wishlist" buttons for future enhancement.
API Reference
Products List: GET https://dummyjson.com/products?limit=12&skip=12
Product Details: GET https://dummyjson.com/products/{id}
Enhancements
Future improvements that can be made:

Add to Cart/Wishlist Functionality: Currently, the buttons exist but don't have any logic connected.
Search Feature: Allow users to search for specific products by name or category.
Error Handling UI: Improve the UI for cases when fetching data fails.
License
This project is licensed under the MIT License - see the LICENSE file for details.

>>>>>>> 93d71f55d5afb1b0a1c3ec7c2759f7eadff93b6c

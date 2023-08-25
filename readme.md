# Store API - Backend Project

The **Store API** is a backend project designed to manage product information for a store, with a focus on products from companies like IKEA and others. This API provides functionalities to retrieve, sort, and manage product details including names, pictures, prices, and more.

## Table of Contents

-   [Introduction](#introduction)
-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Endpoints](#endpoints)
-   [Sorting](#sorting)
-   [Contributing](#contributing)
-   [License](#license)

## Introduction

The Store API project aims to simplify the management of product information for a store, with an emphasis on products from well-known companies like IKEA. Developers can integrate product data into their applications, perform sorting operations, and enhance the user experience.

## Features

-   Retrieve product information including name, picture, and price.
-   Sort products based on different criteria.
-   Support for products from various companies, with a focus on IKEA.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/store-api.git`
2. Navigate to the project directory: `cd store-api`
3. Install dependencies: `npm install`
4. Create and configure the `.env` file for database connection.
5. Start the server: `npm start`

## Usage

1. Make API requests using your preferred client (e.g., `axios`, `fetch`, etc.).
2. Access product information by making appropriate API calls to the provided endpoints.
3. Implement sorting logic based on your application's requirements.

## Endpoints (todo)

-   `GET /products`: Retrieve a list of products.
-   `GET /products/:id`: Retrieve details of a specific product.
-   `POST /products`: Add a new product (authentication/authorization required).
-   `PUT /products/:id`: Update product details (authentication/authorization required).
-   `DELETE /products/:id`: Delete a product (authentication/authorization required).

## Sorting (to do)

The API supports sorting of products based on different criteria:

-   `GET /products?sort=price`: Get products sorted by price in ascending order.
-   `GET /products?sort=name`: Get products sorted alphabetically by name.
-   `GET /products?sort=company`: Get products sorted by the company (e.g., IKEA).

## Contributing

Contributions to the Store API project are welcome! Feel free to create pull requests for issues or enhancements. Please ensure code follows the existing style and provides adequate documentation.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

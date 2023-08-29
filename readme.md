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
-   Filter products based on various attributes.
-   Paginate through product listings.
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

## Endpoints

-   `GET /api/v1/products`: Retrieve a list of products.

## Sorting

The API supports sorting of products based on different criteria:

-   (e.g.)`GET /api/v1/products?sort=price`: Get products sorted by price in ascending order.
-   (e.g.)`GET /api/v1/products?sort=-name,price`: You can add more sort here get products sorted Descending order alphabetically by name and price.

## Filtering

You can filter products based on different attributes:

- `GET /api/v1/products?company=ikea`: Get products filtered by company name.
- `GET /api/v1/products?name=table`: Get products filtered by names containing "table".
- `GET /api/v1/products?feature=false`: Get products filtered by feature availability.
- `GET /api/v1/products?numericFilter=price<30`: Get products filtered by price less than 30 (<,>,<=,>=,=).
- `GET /api/v1/products?numericFilter=rating>=3.5`: Get products filtered by rating greater than or equal to 3.5 .

## Pagination

You can use pagination to control the number of products displayed:

-   `GET /api/v1/products?limit=10&page=2`: Get 10 products on the second page.

## Contributing

Contributions to the Store API project are welcome! Feel free to create pull requests for issues or enhancements. Please ensure code follows the existing style and provides adequate documentation.

## to do

-   migration
-   refactor
-   better naming

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

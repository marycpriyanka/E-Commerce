# E-Commerce
![badge](https://img.shields.io/badge/MIT-License-blue.svg)

## Description

E-Commerce or internet retail website

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Technologies used](#technologies-used)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)

## Installation

- Use 'npm i' in your command line to install all dependent packages.
- Add a .env file in your root directory. It should contain 3 environment variables named DB_USER, DB_PASSWORD and DB_NAME. Assign the variables with values of your database username, database password, and database table name which is 'ecommerce_db'.
- Go to mysql command line using 'mysql -u root -p'. Do 'SOURCE db/schema.sql' to create the schema.
- Run'npm run seed' in your command line to seed data to your database.


## Usage

Use 'nodemon server' in your command line to sync the database and start the application's server.After that open Insomnia or Postman to test all API GET, POST, PUT and DELETE routes for categories, products or tags. When any API GET routes are tested, the data for the corresponding route is displayed in a formatted JSON. When API POST, PUT or DELETE routes are tested, then the corresponding data is successfully created, updated or deleted in the database. Any server side or client side errors are handled.

##  Technologies used

Node.js, MySQL2, Sequelize package, dotenv package

## License

E-Commerce is available under the MIT License.

## How to Contribute

Contributions and ideas are welcome. We can add additional functionality to the application. Before submitting an issue, please take a moment to look over the contributing guidelines in https://www.contributor-covenant.org/ . Before submitting pull requests, ensure the following:

- Fork the repo and create your branch from master.
- Test your code.

## Questions

https://github.com/marycpriyanka

For any addditional questions, reach me at marycpriyanka@gmail.com.

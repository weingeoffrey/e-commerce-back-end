# e-commerce-back-end

## Description
![badge](https://img.shields.io/static/v1?label=license&message=ISC&color=green)

The purpose of this project is to create a functional backend for a fictional e-commerce retail company that uses Sequelize to generate the schema and seeds the database with test data. A functional API is created with GET/POST/PUT and DELETE routes

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)

## Installation
Navigate to the root of the downloaded project files and start your SQL server on your local machine by running the following commands from a cmd prompt, be sure to substitute [USERNAME] with the correct username for your SQL environment (usually root):

    mysql -u [USERNAME] -p
    source db/schema.sql

## Usage
From the root of the file you will have to run the following to install the necessary packages and start the program: 

    npm install
    npm run seed
    npm start
    
Once the application is started the backend will be fully functional and will allow you to make API calls to your localhost to retrieve data.

### CREATE/UPDATE [CATEGORY/PRODUCT/TAG]

    POST localhost:3001/api/[categories|products|tags]/
    PUT localhost:3001/api/[categories|products|tags]/[id]

    Categories: 
    {
      "category_name": "New Category"
    }

    Products:
    {
      "product_name": "Basketball",
      "price": 200.00,
      "stock": 3,
      "tagIds": [1, 2, 3, 4],
      "category_id": 4
    }

    Tags:
    {
      "tag_name": "Stuff"
    }
    
### GET [CATEGORY/PRODUCT/TAG]

    GET localhost:3001/api/[categories|products|tags]/
    GET localhost:3001/api/[categories|products|tags]/[id]
    
### DELETE [CATEGORY/PRODUCT/TAG] by ID
    DELETE localhost:3001/api/[categories|products|tags]/[id]

## License 

URL to License: https://spdx.org/licenses/ISC.html





## Questions

If you have any questions feel free to reach me at:

GitHub: weingeoffrey

Email: wein.geoffrey@gmail.com

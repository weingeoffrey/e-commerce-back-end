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


![Untitled_ Aug 6, 2021 3_28 PM](https://user-images.githubusercontent.com/83042277/128568401-b4d67332-8cba-4a8a-a2b7-0ad5e96ec626.gif)


## Usage
From the root of the file you will have to run the following to install the necessary packages and start the program: 

    npm install
    npm run seed
    npm start
    
Once the application is started the backend will be fully functional and will allow you to make API calls to your localhost to retrieve data.

![e-commerce-usage](https://user-images.githubusercontent.com/83042277/128568738-37dd353a-66c0-44c8-8090-90c8b2afe1ac.gif)

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

![post-put-api](https://user-images.githubusercontent.com/83042277/128569912-5e91cf04-96db-4d43-881e-3fd0fd42376b.gif)

### GET [CATEGORY/PRODUCT/TAG]

    GET localhost:3001/api/[categories|products|tags]/
    GET localhost:3001/api/[categories|products|tags]/[id]
    
![get-api](https://user-images.githubusercontent.com/83042277/128570206-584f1b09-bfd6-4ccc-8d09-07a928f38f57.gif)

### DELETE [CATEGORY/PRODUCT/TAG] by ID
    DELETE localhost:3001/api/[categories|products|tags]/[id]

![delete-api](https://user-images.githubusercontent.com/83042277/128570307-676ce64e-0b68-4643-b633-68cc8f07c4c3.gif)

## License 

URL to License: https://spdx.org/licenses/ISC.html





## Questions

If you have any questions feel free to reach me at:

GitHub: weingeoffrey

Email: wein.geoffrey@gmail.com

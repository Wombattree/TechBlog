# Tech Blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
A tech blog where users can sign up, create blog posts and leave comments on other people's posts.

You can find the deployed version [here.](https://ascrivener-tech-blog.herokuapp.com).

![Preview Image](./public/images/screenshot.png?raw=true "Preview Image")

<br/>

## Table Of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Contact](#contact)

<br/>

## Installation
Create the database with:
~~~
mysql -u root -p
~~~
~~~
source db/schema.sql
~~~

Seed the database with:
~~~
npm run seed
~~~

Create a .env file with the credentials for mysql, something like this:
~~~
DB_NAME='blog_db'
DB_USER='root'
DB_PASSWORD='<YOUR PASSWORD HERE>'
~~~

Run the following command to install necessary dependencies:
~~~
npm i
~~~

<br/>

## Usage
~~~
npm start
~~~

<br/>

## License
This project is licensed under the MIT license.

<br/>

## Contributors
Alex Scrivener

<br/>

## Contact
If you have any questions about the repo, open an issue or contact me directly at [awombattree@gmail.com](mailto:awombattree@gmail.com). You can find more of my work at [my repo](https://github.com/Wombattree).
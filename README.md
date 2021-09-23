# My 5 Star Local

  [Project Repo](https://github.com/Cleggatron/My-5-Star-Local)
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Contributors
  A [Kevin](https://github.com/kevinjr1998), [Georgia](https://github.com/G-bot987), and [David](https://github.com/Cleggatron) production!

  ## Description

  This website is a full stack, interactive, collaborative website. It will allow users to post up the details of a local website they enjoy. Other users can then leave text based reviews and ratings, from 1-5. The main page will render the most popular restaurants by average ranking, meaning that users are always directed to popular establishments. 
  
  On the backend the website logs analytic data relating to the http requests submitted from the user. This will allow the website owners to monitor the useage of the website. Gathering understanding of the user interactions with the site will allow potential improvements to the site going forwards, and provide feeedback to any interested parties.

  ## Table Of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)

  ## Installation

  Once the repo has been cloned locally you can enter the commands `npm i` to install all the dependencies. 
  
  To run this locally you will also need to set up a .env file. There is an example of this with the necessary structure to follow. Once this has been created you can create your own seed data in the files in the seeds folder. Once this has been achieved you can initialise the database with the commands `mysql -u root -p` followed by your password, and then entering `source ./db/schema.sql` to get the database running. `npm run seed` will then seed the database, follwed by `npm start` to start the whole project running on localhost 3001.

  The website is also set up to run on heroku. Once you ahve pushed it there, you will need to proviion a database for this. This is coded to use JAWSDB.  Once that has been arranged the website should be good to go!

  ## Usage

  ![File In Action]()

  When a user navigates to the webpage they will be redirected to the login/signup screen. Once they have logged in they can go to the main page to see the top rated restaurants. They will have a dashboard option that shows them the restaurants, with the individual comments. Here they will have the option at add a restaurant by filling in the form. If they click on any of the restaurants here they can ammend/update the entry. 

  ## Credits 
  The contributors are:
 -  David
 -  Georgia
 -  Kevin


  Third Party Technologies:
  The Third Party Code used:
 - Bootstrap
 -  Morgan
 -  bcrypt
 -  sequelize
 -  mysql
 -  express
 -  dotenv
 -  winston


  ## License
  MIT License

  [License Link](https://opensource.org/licenses/MIT)

  Copyright <2021> <Georgia, Kevin, and David>

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  

  ## Questions

  If you have any questions feel free to reach out to us. Our Github profiles are:
  <br>
  [Kevin](https://github.com/kevinjr1998)
  <br>
  [Georgia](https://github.com/G-bot987)
  <br>
  [David](https://github.com/Cleggatron)
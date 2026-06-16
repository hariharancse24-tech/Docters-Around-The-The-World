# Doctors Around the World

## Project Overview

Doctors Around the World is a web application that fetches user data from a public REST API and transforms it into a professional doctor directory. The application dynamically generates doctor profiles, including specialization, hospital affiliation, experience, ratings, availability status, and contact information, and displays them in a responsive card-based interface.

The project demonstrates API integration using JavaScript Fetch API, dynamic data rendering, search functionality, loading states, and error handling.

## API Used

This project uses the JSONPlaceholder API to retrieve user information dynamically.

### API Endpoint

https://jsonplaceholder.typicode.com/users

The fetched user data is transformed into realistic doctor profiles by assigning specializations, hospitals, experience levels, ratings, and availability statuses.


## Features

* Fetch API integration
* Dynamic doctor profile generation
* Loading state while data is being fetched
* Error handling for failed API requests
* Search doctors by name, specialization, or hospital
* Responsive card-based user interface
* Doctor availability status indicator
* Experience and rating display
* Professional healthcare directory layout


## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Fetch API
* JSONPlaceholder API


## How It Works

1. When the webpage loads, JavaScript sends a GET request to the JSONPlaceholder API.
2. The API returns user information in JSON format.
3. The application converts users into doctor profiles.
4. Each doctor is assigned:

   * Specialization
   * Hospital
   * Experience
   * Rating
   * Availability Status
5. Doctor information is displayed as interactive cards.
6. Users can search doctors by:

   * Name
   * Specialization
   * Hospital
7. Loading and error states provide feedback during API requests.


## Doctor Information Displayed

Each doctor profile includes:

* Doctor Name
* Medical Specialization
* Hospital Name
* Location
* Years of Experience
* Patient Rating
* Availability Status
* Contact Email

## Learning Outcomes

Through this project, I learned:

* How REST APIs work
* How to fetch data using JavaScript Fetch API
* How to handle asynchronous operations using async/await
* How to manage loading and error states
* How to dynamically generate HTML content using JavaScript
* How to implement search and filtering functionality
* How to build responsive card-based layouts
* How to deploy web applications using GitHub Pages


## Future Enhancements

* Filter doctors by specialization
* Sort doctors by rating or experience
* Add doctor profile images
* Add appointment booking functionality
* Integrate with a real healthcare API

## Author

HARIHARAN M

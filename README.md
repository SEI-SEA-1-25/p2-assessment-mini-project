<img src="https://i.imgur.com/sX12DTc.png">

# Project 2 Assessment Mini-Project

## Introduction (By Instructor)

Students will be self-directed through this assessment. **Please read the requirements in their entirety before beginning any work.**

The last thing you want is to waste an hour doing the wrong thing!

### GOAL

The goal of this project assessment is to gauge your ability to develop a minimal full-stack web application using NodeJS and the Express framework, including your ability to:

- Set up GET and POST routes
- Install and use node modules
- Use an ORM
- Set up and properly use forms

## Requirements

### Time Limit

You have until 0900 on Tuesday, 2021-03-16 to complete the assignment.

### Resources

This is an open book test. You are welcome to use class notes, books, or any resource on the internet.

### Starter Code

You may start your app from scratch, or you may use the [express app starter code found here](https://github.com/WDI-SEA/p2-retake-starter-code/tree/master)

### Technology Requirements

In class, we've been using PostgreSQL, Sequelize, Node, Express, and EJS, so by default, we'll assume that's what you're using for this assessment. However, you are welcome to use any framework, ORM, view engine, and cloud service you're comfortable with.

> Pro-tip: Don't learn something new just for this assessment. Use something you already know.

### App Requirements

#### Routing

Make an Express app with the following routes:

| METHOD | PATH           | PURPOSE                        |
| ------ | -------------- | ------------------------------ |
| GET    | /              | Home Page                      |
| GET    | /favorites     | List of all favorite animals   |
| POST   | /favorites     | Add a new favorite animal      |
| GET    | /favorites/new | A form for adding a new animal |

#### Database

Make an `animal` model using Sequelize with the following schema:

| COLUMN          | TYPE    |
| --------------- | ------- |
| id              | integer |
| species_name    | string  |
| scientific_name | string  |
| image_url       | string  |
| description     | text    |
| extinct         | boolean |
| createdAt       | date    |
| updatedAt       | date    |

> Pro-tip: Sequelize gives you id, createdAt, and updatedAt by default. You don't need to have these in your `model:create` command.

#### Views

Your homepage can generally look however you'd like, but make sure there are **visible links** to your other two pages.

Your /favorites/new page should render a form that allows you to enter a new animal. This form should `post` to the /favorites route. There should be an input field for each value corresponding to the columns in your database schema. This will include:

- species_name
- scientific_name
- image_url
- description
- extinct

Your /favorites page contains a list of all animals in your database. If the animal is extinct, show the species_name in red text. Otherwise show the species name in black text. The scientific_name should be shown in italic text beside or below the species_name. The image linked to by the image_url should be displayed at no larger than 300x300 pixels. The description should also be displayed somewhere.

#### Checklist

1. All routes in above route table work
2. An extinct animal's name is rendered in red
3. Homepage contains links to other pages (the full list and add new animal form)
4. An image that is displayed has a max-width and max-height of 300px
5. Scientific name is displayed in italics

#### BONUS

You can do any number of things for bonus points including:

- Add a GET /favorites/:id page for a specific animal
- Add a CSS framework or custom styling
- Make your site responsive
- Give your site a header and/or footer
- Make your add animal form really nicely styled
- Make your home page really exciting
- Add a default image in case the user doesn't provide one
- Implement flash messages for form/data entry errors
- Add a DELETE or PUT route for animals

## Turn-in

Put your GitHub repo link into slack. Send this slack message to your whole instructional team. This is all you need to do.

## Advice

Styling, for the most part (unless listed as a requirement) is a bonus for this assessment. This thing does not need to be beautiful. Worry about functionality first and foremost. Priority one is that your routes work properly. Priority two is that your database works properly. Get as far as you can within the allotted time frame.

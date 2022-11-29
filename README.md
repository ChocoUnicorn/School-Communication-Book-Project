# Communication for Kids App

In this app, teachers can communicate seamlessly with the parents / guardians they are caring for.

## How It's Made:

**Tech stack:** HTML, CSS, Node.js, MongoDB, Passport, Express, EJS, Cloudinary, Multer, Bcrypt, Validator

## Optimizations

Better comment section to allow for threads on blogposts

## How are started:

When I started, I thought of a small blogging app for a school. That metamorphed into a communication app. I like how organic its been for me to build more on an original idea.

When I improve this app, I would add everything listed below

## Future plan:

I'd like to deploy this app to Netlify.

1. Add new pages for parent / guardian registration.
2. Add new pages for teacher registration
3. Add react to stack
4. Work more on the authentication while designating access according to user
5. Create an admin account that manages everybody
6. Create student communication for Adult education users
7. Create report card page and emergency alert page
8. Open to more ideas

# Install

`npm install`

---

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`

  - PORT = 7777 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

  You get DB_STRING from Mongo Atlas

  for the last three, you need to go to cloudinary.com, register, login and get the details from your dashboard. Remember to select the node.js option

---

# Run

`npm start`

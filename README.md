# ShopPro Ecommerce-website
A Full Stack Ecommerce website called 'ShopPro', using MongoDB, Express, ReactJS, NodeJS (MERN)

## Checkout the hosted website
Hosting PLatform: render.com
Hosted website: (ShopPro website)[https://shoppro-qtmo.onrender.com]

## Tech Stack
- MongoDB (Database)
- Express.js (Framework)
- React.js (User Interface-UI)
- Node.js (Server)
- Redux (UI)
- Paypal (Payment)
- JWT json web token (Authentication)

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Usage

- Create a MongoDB database and obtain your `MongoDB URL` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 8000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8
```

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@gmail.com (Admin)
123456

naveen@gmail.com (Customer)
123456
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

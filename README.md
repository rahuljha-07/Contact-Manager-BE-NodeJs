

# Contacts and Users API

---

## Overview

This is a RESTful API built using **Node.js** and **Express.js**. It offers endpoints to manage:

- **User Authentication**: Register, login, and retrieve user details.  
- **Contacts Management**: Perform Create, Read, Update, and Delete (CRUD) operations.  

Swagger UI is integrated to provide interactive and clear API documentation.

---

## Features

- **User Authentication**: Secure login, registration, and access token generation.  
- **Contacts Management**: Endpoints to create, retrieve, update, and delete contact information.  
- **Protected Routes**: JWT-based token authorization for secure access.  
- **Swagger UI**: Explore and test the API endpoints interactively.

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory and add the following:

```env
URL=http://localhost
PORT=5000
MONGO_URI=mongodb://localhost:27017
ACCESS_TOKEN_SECRET=your_secret_key
```

---

## API Documentation

Swagger UI is available at:

```
http://localhost:5000/api-docs
```

You can explore and test all the available endpoints directly from Swagger.

---

## Endpoints

### Contacts API

| Endpoint               | Method | Description                  | Protected |
|-------------------------|--------|------------------------------|-----------|
| `/api/contacts`         | GET    | Fetch all contacts           | Yes       |
| `/api/contacts`         | POST   | Create a new contact         | Yes       |
| `/api/contacts/{id}`    | GET    | Fetch a contact by ID        | Yes       |
| `/api/contacts/{id}`    | PUT    | Update a contact by ID       | Yes       |
| `/api/contacts/{id}`    | DELETE | Delete a contact by ID       | Yes       |

### User API

| Endpoint               | Method | Description                  | Protected |
|-------------------------|--------|------------------------------|-----------|
| `/api/users/register`   | POST   | Register a new user          | No        |
| `/api/users/login`      | POST   | Login and get access token   | No        |
| `/api/users/current`    | GET    | Get current user information | Yes       |

---

## Run the Application

### 1. Start MongoDB

Ensure MongoDB is running locally, or update the `MONGO_URI` in the `.env` file to point to your MongoDB instance.

### 2. Run the Server

```bash
node server.js
```

The server will start at:

```
http://localhost:5000
```

Swagger UI for API Documentation:

```
http://localhost:5000/api-docs
```

---

## License

This project is licensed under the [MIT License](LICENSE).

---




const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandle");
const dotenv = require("dotenv").config();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swaggerConfig');
const routes = require("./routes"); // Importing all routes from a single file

connectDb();
const app = express();
const port = process.env.PORT || 5000;

// Swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use("/api", routes); // Use consolidated routes
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

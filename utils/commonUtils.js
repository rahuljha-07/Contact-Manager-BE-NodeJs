// utils/commonUtils.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Validate required fields in the request body
const validateFields = (fields, requiredFields) => {
    const missingFields = requiredFields.filter(field => !fields[field]);
    if (missingFields.length > 0) {
        throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
    }
};

// Hash password using bcrypt
const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

// Generate JWT token
const generateToken = (payload) => {
    return jwt.sign(
        { user: payload },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "60m" }
    );
};

module.exports = {
    validateFields,
    hashPassword,
    generateToken,
};
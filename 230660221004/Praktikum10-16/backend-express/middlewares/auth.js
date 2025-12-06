// Import express
const express = require('express');

// Import jwt
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Get header
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ message: 'Unauthenticated.' });
    }

    // Expect: "Bearer <token>"
    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: 'Token format salah' });
    }

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Invalid token' });

        req.userId = decoded.id;
        next();
    });
};

module.exports = verifyToken;

// Import validationResult
const { validationResult } = require("express-validator");

// import bcrypt
const bcrypt = require("bcryptjs");

// import prisma client
const prisma = require("../prisma/client");

// function register
const register = async (req, res) => {

    // cek hasil validasi
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: "Validation error",
            errors: errors.array(),
        });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    try {
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
            },
        });

        return res.status(201).json({
            success: true,
            message: "Register successfully",
            data: user,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = { register };

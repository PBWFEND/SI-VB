const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const prisma = require("../prisma/client");

// GET ALL USERS
const findUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
            },
        });

        res.status(200).send({
            success: true,
            data: users,
        });
    } catch (error) {
        console.log("GET USERS ERROR:", error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

// GET USER BY ID
const findUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await prisma.user.findUnique({
            where: { id: Number(id) },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).send({
            success: true,
            data: user,
        });
    } catch (error) {
        console.log("GET USER ERROR:", error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

// CREATE USER
const createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            errors: errors.array(),
        });
    }

    try {
        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        res.status(201).send({
            success: true,
            message: "User created successfully",
            data: user,
        });
    } catch (error) {
        console.log("CREATE USER ERROR:", error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

// UPDATE USER
const updateUser = async (req, res) => {
    const { id } = req.params;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            errors: errors.array(),
        });
    }

    try {
        const { name, email, password } = req.body;

        const dataUpdate = { name, email };

        if (password && password.length >= 6) {
            dataUpdate.password = await bcrypt.hash(password, 10);
        }

        const user = await prisma.user.update({
            where: { id: Number(id) },
            data: dataUpdate,
        });

        res.status(200).send({
            success: true,
            message: "User updated successfully",
            data: user,
        });
    } catch (error) {
        console.log("UPDATE USER ERROR:", error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

// DELETE USER
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.user.delete({
            where: { id: Number(id) },
        });

        res.status(200).send({
            success: true,
            message: "User deleted successfully",
        });
    } catch (error) {
        console.log("DELETE USER ERROR:", error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

// ⬇️ INI YANG TADI HILANG & BIKIN SEMUA ERROR
module.exports = {
    findUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser,
};

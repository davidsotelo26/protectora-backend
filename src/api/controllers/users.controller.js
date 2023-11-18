const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const { validateEmailDB, validatePassword } = require('../utils/validator');
const { generateToken } = require('../utils/jwt');

const registerUser = async (req, res) => {
    try {
        const userBody = new User(req.body);
        const valEmail = await validateEmailDB(req.body.email);
        if (!valEmail) {
            if (validatePassword(req.body.password)) {
                userBody.password = bcrypt.hashSync(userBody.password, 10);
                const createdUser = await userBody.save();
                return res.status(200).json({ message: "Usuario creado", data: createdUser });
            }
            else {
                return res.json({ message: "La contraseña debe contener al menos 8 caracteres, una mayúscula y una minúscula" });
            }
        }
        return res.json({ message: "El email ya existe" });
    } catch (error) {
        
    }
};

const loginUser = async (req, res) => {
    try {
        const userInfo = req.body;
        const userBD = await validateEmailDB(userInfo.email);
        if (!userBD) {
            return res.json({ message: "El email no existe" });
        }
        if (!bcrypt.compareSync(userInfo.password, userBD.password)) {
            return res.json({ succes: false, message: "Contraseña incorrecta" });
        }
        const token = generateToken(userBD._id, userBD.email);
        return res.status(200).json({ message: "Usuario logueado", data: token });
    } catch (error) {
        
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        
    }
};
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        return res.status(200).json(user);
    } catch (error) {
        
    }
};

const getUserByEmail = async (req, res) => {
    try {
        const user = await User.findByEmail(req.params.email);
        return res.status(200).json(user);
    } catch (error) {
        
    }
};

const updateUser = async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id, req.body, { new: true });
        return res.status(200).json({ message: "Usuario actualizado", data: updateUser });
    } catch (error) {
        return res.status(500).json({ message: "Error", data: error });
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Usuario eliminado", data: deletedUser });
    } catch (error) {
        return res.status(500).json({ message: "Error", data: error });
    }
};

module.exports = { registerUser, loginUser, getUsers, getUserById, getUserByEmail, updateUser, deleteUser };
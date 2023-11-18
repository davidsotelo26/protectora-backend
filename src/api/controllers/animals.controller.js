const Animals = require("../models/animals.model");

const addAnimal = async (req, res) => {
    try {
        const newAnimal = new Animals(req.body);
        const createdAnimal = await newAnimal.save();
        return res
            .status(200)
            .json({ message: "Animal creado", data: createdAnimal });
    } catch (error) {
        return res.status(500).json({ message: "Error", data: error });
    }
};

const getAnimals = async (req, res) => {
    try {
        const animals = await Animals.find();
        return res.status(200).json(animals);
    } catch (error) { }
};

const getAnimalById = async (req, res) => {
    try {
        const animal = await Animals.findById(req.params.id);
        return res.status(200).json(animal);
    } catch (error) { }
};

const getAnimalByName = async (req, res) => {
    try {
        const animal = await Animals.findByName(req.params.name);
        return res.status(200).json(animal);
    } catch (error) { }
};

const updateAnimal = async (req, res) => {
    try {
        const updatedAnimal = await Animals.findByIdAndUpdate(
            req.params.id, req.body, { new: true });
        return res.status(200).json({ message: "Animal actualizado", data: updatedAnimal });
    } catch (error) {
        return res.status(500).json({ message: "Error", data: error });
    }
};

const deleteAnimal = async (req, res) => {
    try {
        const deletedAnimal = await Animals.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Animal eliminado", data: deletedAnimal });
    } catch (error) {
        return res.status(500).json({ message: "Error", data: error });
    }
};
module.exports = { addAnimal, getAnimals, getAnimalById, getAnimalByName, updateAnimal, deleteAnimal };

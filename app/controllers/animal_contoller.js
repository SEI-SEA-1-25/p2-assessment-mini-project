const db = require("../models");
const Animals = db.animals;
const Op = db.Sequelize.Op;

// Create and Save a new Animall
exports.create = (req, res) => {
    // Validate request
    if (!req.body.species_name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Animal
    const newAnimal = {
      species_name: req.body.species_name,
      scientific_name: req.body.scientific_name,
      image_url: req.body.image_url,
      description: req.body.description,
      extinct: req.body.extinct 
    };
  console.log({ newAnimal });
    // Save Animal in the database
    Animals.create(newAnimal)
      .then(data => {
        res.redirect('/favorites');
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Animal."
        });
      });
  };

// Retrieve all Animals from the database.
exports.findAll = (req, res) => {
  
    Animals.findAll({ })
      .then(data => {
        res.render('favorites', { animals: data });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving animals."
        });
      });
  };

// // Find a single Animal with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Animals.findByPk(id)
    .then(data => {
      res.render('animal-profile', { animal: data });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Animal with id=" + id
      });
    });
};

// // Update a Animal by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Animals.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Animal was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Animal with id=${id}. Maybe Animal was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Animal with id=" + id
      });
    });
};

// // Delete a Animal with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Animals.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Animal was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Animal with id=${id}. Maybe Animal was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Animal with id=" + id
      });
    });
};

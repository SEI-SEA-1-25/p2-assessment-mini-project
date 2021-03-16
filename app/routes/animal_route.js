module.exports = app => {
    const animals = require("../controllers/animal_contoller.js");
  
  var router = require("express").Router();
  
    // Create a new Favourite Animal
    router.post("/", animals.create);
  
    // Retrieve all Favourite Animals
    router.get("/", animals.findAll);
  
    // Retrieve a single Animal with id
    router.get("/:id", animals.findOne);
  
    // // Update a Animal with id
    router.put("/:id", animals.update);
  
    // // Delete Animal with id
    router.delete("/:id", animals.delete);
  
    app.use('/favorites', router);
  };
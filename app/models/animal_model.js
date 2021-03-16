module.exports = (sequelize, Sequelize) => {
    const Animal = sequelize.define("animal", {
      species_name: {
        type: Sequelize.STRING
      },
      scientific_name: {
        type: Sequelize.STRING
      },
      image_url: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      extinct: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Animal;
  };

const db = require("../models/questions");

// Defining methods for the questionsController
module.exports = {
  findByTopiId: function(req, res) {
    db.Questions
      .findAll({where : {topic_id: req.params.id}}) 
      .then(dbModel => res.json(dbModel.question))
      .catch(err => res.status(422).json(err));
  }, 
};

//Will need to loop through all questions, render one for each page?
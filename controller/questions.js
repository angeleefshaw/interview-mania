
const db = require("../models");

// Defining methods for the questionsController
module.exports = {
  findByTopicId: function(req, res) {
    console.log(db);
    db.Questions
      .findAll(
        {
        where : {topic_id: req.params.id}, 
        include: [db.Answers], 
        attributes: ["question"]
        }
        ) 
        // .then(db.Answers.findAll().then(dbAnswers => res.json(dbAnswers)))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }, 
};

